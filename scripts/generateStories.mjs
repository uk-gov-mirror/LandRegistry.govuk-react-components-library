#!/usr/bin/env node
/**
 * scripts/generateStories.mjs
 *
 * Generates *.stories.tsx files from govuk-frontend fixtures.json files.
 * Each non-hidden fixture becomes its own top-level named export — the only
 * format Storybook's CSF parser supports for individual sidebar entries.
 *
 * Also reports any govuk-frontend components that have no matching folder in
 * src/components/, so new upstream components are never silently missed.
 *
 * Usage:
 *   node scripts/generateStories.mjs
 *   node scripts/generateStories.mjs --component=Accordion
 *
 * Add to package.json:
 *   "generate-stories":    "node scripts/generateStories.mjs",
 *   "prestorybook":        "npm run generate-stories",
 *   "prebuild-storybook":  "npm run generate-stories"
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const COMPONENTS_DIR = path.join(ROOT, "src", "components");
const GOVUK_FIXTURES_BASE = path.join(
  ROOT,
  "node_modules",
  "govuk-frontend",
  "dist",
  "govuk",
  "components",
);

// ---------------------------------------------------------------------------
// Fixture name overrides
//
// By default the script converts a component folder name to kebab-case and
// looks for a matching govuk-frontend fixtures.json:
//   "CookieBanner" → "cookie-banner" → .../cookie-banner/fixtures.json
//
// If a component folder name does NOT map cleanly to its govuk-frontend name,
// add an entry here:
//   "MyFolderName": "govuk-fixture-name"
// ---------------------------------------------------------------------------
const FIXTURE_NAME_OVERRIDES = {
  // Example:
  // "ErrorSummary": "error-summary",
};

// ---------------------------------------------------------------------------
// Per-component customisation
//
// Only add an entry here if the component needs extra imports, setup, or a
// custom decorator beyond the default `return <Story />;`.
// ---------------------------------------------------------------------------
const CUSTOM_CONFIG = {
  Accordion: {
    extraImports: `import { ConfigureOverallAccordion } from "./Accordion.config";`,
    extraSetup: `\nlet configured = false;`,
    decorator: `(Story, { parameters }) => {
      React.useEffect(() => {
        const isDocsMode = window.location.search.includes("viewMode=docs");
        if (isDocsMode && !configured && parameters.initializeConfigurations) {
          ConfigureOverallAccordion();
          configured = true;
        } else if (!isDocsMode) {
          ConfigureOverallAccordion();
        }
      }, []);
      return <Story />;
    }`,
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** "with all sections already open" → "WithAllSectionsAlreadyOpen" */
function toExportName(name) {
  return name
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

/** "CookieBanner" → "cookie-banner" */
function toKebabCase(name) {
  return name
    .replace(/([A-Z])/g, (m, l, i) => (i === 0 ? l : `-${l}`).toLowerCase())
    .toLowerCase();
}

/** "cookie-banner" → "CookieBanner" */
function toPascalCase(kebab) {
  return kebab
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

function resolveFixtureName(componentName) {
  return FIXTURE_NAME_OVERRIDES[componentName] ?? toKebabCase(componentName);
}

function getVisibleFixtures(componentName) {
  const fixtureName = resolveFixtureName(componentName);
  const fixturePath = path.join(
    GOVUK_FIXTURES_BASE,
    fixtureName,
    "fixtures.json",
  );
  if (!fs.existsSync(fixturePath)) return null;
  const { fixtures } = JSON.parse(fs.readFileSync(fixturePath, "utf8"));
  return fixtures.filter((f) => f.hidden === false);
}

function getAllGovukComponents() {
  if (!fs.existsSync(GOVUK_FIXTURES_BASE)) return [];
  return fs
    .readdirSync(GOVUK_FIXTURES_BASE, { withFileTypes: true })
    .filter(
      (d) =>
        d.isDirectory() &&
        fs.existsSync(path.join(GOVUK_FIXTURES_BASE, d.name, "fixtures.json")),
    )
    .map((d) => d.name);
}

// ---------------------------------------------------------------------------
// File generator
//
// The generated file imports fixtures and calls extractShownFixtures at
// runtime — this is intentional. extractShownFixtures transforms the raw
// govuk-frontend fixture data (e.g. `text` → `children`, `classes` →
// `className`) into props the React components actually accept. Inlining the
// raw JSON as args would cause TypeScript errors like:
//   "text does not exist in type { children: ReactNode }"
// because the component types expect the already-transformed prop names.
// ---------------------------------------------------------------------------
function generateFile(componentName, visibleFixtures) {
  const fixtureName = resolveFixtureName(componentName);
  const custom = CUSTOM_CONFIG[componentName];
  const hasScss = fs.existsSync(
    path.join(COMPONENTS_DIR, componentName, `${componentName}.scss`),
  );

  const decorator =
    custom?.decorator ??
    `(Story) => {
      return <Story />;
    }`;

  // Each story references its fixture by name at runtime so extractShownFixtures
  // can transform it. The index lookup is intentionally avoided — name-based
  // lookup means stories stay correct even if govuk-frontend reorders fixtures.
  const storyExports = visibleFixtures
    .map((fixture) => {
      const exportName = toExportName(fixture.name);
      return [
        `export const ${exportName}: Story = {`,
        `  name: "${fixture.name}",`,
        `  args: { ...examplesFromFixtures.find((f) => f.name === "${fixture.name}")?.options },`,
        `};`,
      ].join("\n");
    })
    .join("\n\n");

  return [
    `// THIS FILE IS AUTO-GENERATED — do not edit manually.`,
    `// Source: node_modules/govuk-frontend/dist/govuk/components/${fixtureName}/fixtures.json`,
    `// Regenerate: npm run generate-stories`,
    ``,
    `import React from "react";`,
    hasScss ? `import "./${componentName}.scss";` : null,
    `import ${componentName} from "./${componentName}";`,
    `import { Meta, StoryObj } from "@storybook/react-vite";`,
    `import fixtures from "govuk-frontend/dist/govuk/components/${fixtureName}/fixtures.json";`,
    `import { extractShownFixtures } from "../../utils/ProcessExampleData";`,
    `import { ComponentFixture } from "../../dynamics";`,
    custom?.extraImports ?? null,
    custom?.extraSetup ?? null,
    `const meta: Meta<typeof ${componentName}> = {`,
    `  title: "GOVUK Design System/${componentName}",`,
    `  component: ${componentName},`,
    `  decorators: [${decorator}],`,
    `  tags: ["autodocs"],`,
    `};`,
    ``,
    `export default meta;`,
    `type Story = StoryObj<typeof ${componentName}>;`,
    ``,
    `// extractShownFixtures transforms raw govuk-frontend fixture data into`,
    `// React-compatible props (e.g. text → children, classes → className).`,
    `const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);`,
    ``,
    storyExports,
  ]
    .filter((line) => line !== null)
    .join("\n")
    .replace(/\n{3,}/g, "\n\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
const targetArg = process.argv.find((a) => a.startsWith("--component="));
const targetComponent = targetArg?.split("=")[1];

const srcComponentNames = fs
  .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((name) => !targetComponent || name === targetComponent);

const govukComponentKebabs = getAllGovukComponents();

const srcKebabToFolder = Object.fromEntries(
  srcComponentNames.map((name) => [resolveFixtureName(name), name]),
);

const notImplemented = govukComponentKebabs.filter(
  (kebab) => !srcKebabToFolder[kebab],
);

const results = { generated: [], skipped: [], noFixtures: [] };

for (const componentName of srcComponentNames) {
  const fixtures = getVisibleFixtures(componentName);
  const fixtureName = resolveFixtureName(componentName);

  if (!fixtures) {
    results.noFixtures.push({ componentName, fixtureName });
    continue;
  }

  if (fixtures.length === 0) {
    results.skipped.push({ componentName, reason: "all fixtures are hidden" });
    continue;
  }

  const outputPath = path.join(
    COMPONENTS_DIR,
    componentName,
    `${componentName}.stories.tsx`,
  );

  fs.writeFileSync(outputPath, generateFile(componentName, fixtures), "utf8");
  results.generated.push({ componentName, count: fixtures.length });
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------
console.log("\n📖 Story generation report\n");

if (results.generated.length) {
  console.log("✅ Generated:");
  results.generated.forEach(({ componentName, count }) =>
    console.log(
      `   ${componentName}.stories.tsx  (${count} ${count === 1 ? "story" : "stories"})`,
    ),
  );
}

if (results.skipped.length) {
  console.log("\n⚠️  Skipped (fixtures exist but all are hidden):");
  results.skipped.forEach(({ componentName, reason }) =>
    console.log(`   ${componentName}  — ${reason}`),
  );
}

if (results.noFixtures.length) {
  console.log(
    "\n⬜ No govuk-frontend fixtures (custom components — expected):",
  );
  results.noFixtures.forEach(({ componentName, fixtureName }) =>
    console.log(
      `   ${componentName}  →  looked for: ${fixtureName}/fixtures.json`,
    ),
  );
  console.log(
    "\n   💡 If any of the above should have fixtures, add an entry to",
    "\n      FIXTURE_NAME_OVERRIDES in scripts/generateStories.mjs",
  );
}

if (notImplemented.length && !targetComponent) {
  console.log(
    "\n🆕 govuk-frontend components not yet in src/components/ (consider implementing):",
  );
  notImplemented.forEach((kebab) =>
    console.log(
      `   ${kebab}  →  suggested folder name: ${toPascalCase(kebab)}`,
    ),
  );
  console.log(
    "\n   💡 These are govuk-frontend components that exist upstream but have",
    "\n      no matching folder in src/components/. Create the component folder",
    "\n      and re-run this script to generate its stories automatically.",
  );
}

console.log(
  `\nDone — ${results.generated.length} generated, ${results.skipped.length} skipped, ` +
    `${results.noFixtures.length} have no govuk-frontend fixtures, ` +
    `${notImplemented.length} govuk-frontend component(s) not yet implemented.\n`,
);
