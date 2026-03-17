// src/utils/ProcessExampleData.tsx
import deepIterator from "deep-iterator";
import parse from "html-react-parser";
import { ComponentFixture, ComponentFixtureRoot } from "../dynamics";
import omit from "../components/Boolean/OmitKey";

type DataRecord = Record<string, unknown>;

// Type guards — narrows unknown to usable shapes
function isRecord(x: unknown): x is DataRecord {
  return typeof x === "object" && x !== null && !Array.isArray(x);
}
function isArray(x: unknown): x is unknown[] {
  return Array.isArray(x);
}

const propReplacements: Record<string, string> = {
  classes: "className",
  describedBy: "aria-describedby",
  containerClasses: "containerClassName",
  navigationClasses: "navigationClassName",
  autocomplete: "autoComplete",
  for: "htmlFor",
  captionClasses: "captionClassName",
  colspan: "colSpan",
  rowspan: "rowSpan",
  summaryText: "summaryChildren",
  summaryHtml: "summaryChildren",
  descriptionText: "descriptionChildren",
  descriptionHtml: "descriptionChildren",
  titleText: "titleChildren",
  titleHtml: "titleChildren",
  inputmode: "inputMode",
  serviceUrl: "serviceUrlHref",
  homepageUrl: "homepageUrlHref",
  spellcheck: "spellCheck",
  tabindex: "tabIndex",
  ariaLabel: "aria-label",
  headingText: "headingChildren",
};

function replaceAttributes(parent: DataRecord, attributes: unknown) {
  if (typeof attributes !== "object" || attributes === null) {
    throw new TypeError("attributes must be an object");
  }
  Object.entries(attributes as DataRecord).forEach(
    ([attributeName, attributeValue]) => {
      const propName = propReplacements[attributeName] ?? attributeName;
      parent[propName] = String(attributeValue);
    },
  );
}

function processHtmlAndTextFields(
  parent: DataRecord,
  key: string,
  value: unknown,
) {
  const endWithHtml = key.toLowerCase().endsWith("html");
  const targetKey =
    endWithHtml && key !== "html"
      ? key.replace("Html", "Children")
      : "children";

  parent[targetKey] =
    endWithHtml && typeof value === "string" ? parse(value) : value;
  delete parent[key];
}

function processItems(items: unknown[], keyToRemove: string) {
  return items.map((item) =>
    isRecord(item) && Object.keys(item).length > 0
      ? { ...omit(item, keyToRemove) }
      : item,
  );
}

/**
 * Pre-pass for table components: wraps raw row arrays (array-of-arrays format
 * from govuk-frontend fixtures) into `{ cells: row }` objects BEFORE the deep
 * iterator runs. This must happen first because deepIterator visits leaf nodes
 * (cell objects) before their parent rows array, so the wrapping check would
 * always fail if deferred to the main iteration pass.
 */
function preProcessTableRows(data: unknown): void {
  if (!isArray(data)) return;

  data.forEach((item) => {
    if (!isRecord(item)) return;
    const options = item.options;
    if (!isRecord(options)) return;

    if (isArray(options.rows)) {
      options.rows = options.rows
        .filter((row) => isArray(row) || isRecord(row)) // drop falsy rows (false/null)
        .map((row) => {
          // Only wrap if it's an array (the raw govuk fixture format)
          if (isArray(row)) {
            return { cells: row };
          }
          return row;
        });
    }
  });
}

/**
 * Pre-pass for non-fixture table data (e.g. direct processExampleData calls
 * in tests like `[{ rows: [["cell1", "cell2"]] }]`).
 */
function preProcessTableRowsDirect(data: unknown): void {
  if (!isArray(data)) return;

  data.forEach((item) => {
    if (!isRecord(item)) return;
    if (isArray(item.rows)) {
      item.rows = (item.rows as unknown[])
        .filter((row) => isArray(row) || isRecord(row))
        .map((row) => {
          if (isArray(row)) {
            return { cells: row };
          }
          return row;
        });
    }
  });
}

function processComponentSpecificData(
  parent: DataRecord,
  key: string,
  value: unknown,
  componentName: string,
) {
  if (componentName === "radios" && key === "items" && isArray(value)) {
    value.forEach((item) => processComponentData(item, componentName));
    const checked = value.find(
      (item): item is DataRecord => isRecord(item) && Boolean(item.checked),
    );
    parent.items = processItems(value, "checked");
    if (checked) parent.value = checked.value;
  } else if (componentName === "select" && key === "items" && isArray(value)) {
    value.forEach((item) => processComponentData(item, componentName));
    const selected = value.find(
      (item): item is DataRecord => isRecord(item) && Boolean(item.selected),
    );
    parent.items = processItems(value, "selected");
    if (selected) parent.value = selected.value;
  } else if (
    componentName === "cookie-banner" &&
    key === "messages" &&
    isArray(value)
  ) {
    value.forEach((message) => processComponentData(message, componentName));
  }
}

function processComponentData(data: unknown, componentName: string): void {
  for (const { parent, value, key } of deepIterator(data)) {
    if (!key || !value) continue;
    if (!isRecord(parent)) continue;

    if (
      typeof value === "string" &&
      (key.toString().toLowerCase().endsWith("html") || key === "text")
    ) {
      processHtmlAndTextFields(parent, key, value);
      continue;
    }

    if (key in propReplacements) {
      parent[propReplacements[key]] = value;
      delete parent[key];
    } else if (key === "attributes") {
      replaceAttributes(parent, value);
      delete parent.attributes;
    } else {
      processComponentSpecificData(parent, key, value, componentName);
    }
  }
}

export default function processExampleData(
  data: unknown,
  componentName: string,
): Array<ComponentFixture> {
  if (componentName === "table") {
    // Try both shapes: direct `[{rows:[...]}]` and fixture `[{options:{rows:[...]}}]`
    preProcessTableRowsDirect(data);
    preProcessTableRows(data);
  }
  processComponentData(data, componentName);
  return data as Array<ComponentFixture>;
}

export function extractShownFixtures(
  fixtures: ComponentFixtureRoot,
): Array<ComponentFixture> {
  return processExampleData(
    fixtures.fixtures.filter((fixture) => !fixture.hidden),
    fixtures.component,
  ) as Array<ComponentFixture>;
}
