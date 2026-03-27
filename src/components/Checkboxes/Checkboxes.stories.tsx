// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/checkboxes/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Checkboxes.scss";
import Checkboxes from "./Checkboxes";
import { Meta, StoryObj } from "@storybook/react";
import fixtures from "govuk-frontend/dist/govuk/components/checkboxes/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
import { ConfigureOverallCheckboxes } from "./Checkboxes.config";

let configured = false;
const meta: Meta<typeof Checkboxes> = {
  title: "GOVUK Design System/Checkboxes",
  component: Checkboxes,
  decorators: [
    (Story, { parameters }) => {
      React.useEffect(() => {
        const isDocsMode = window.location.search.includes(
          "path=/docs/govuk-design-system-checkboxes--docs",
        );
        if (isDocsMode && !configured && parameters.initializeConfigurations) {
          void ConfigureOverallCheckboxes();
          configured = true;
        } else if (!isDocsMode) {
          void ConfigureOverallCheckboxes();
        }
      }, []);
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkboxes>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithHint: Story = {
  name: "with hint",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with hint")?.options,
  },
};

export const WithPreCheckedValues: Story = {
  name: "with pre-checked values",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with pre-checked values")
      ?.options,
  },
};

export const WithDividerAndNone: Story = {
  name: "with divider and None",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with divider and None")
      ?.options,
  },
};

export const WithDividerNoneAndConditionalItems: Story = {
  name: "with divider, None and conditional items",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "with divider, None and conditional items",
    )?.options,
  },
};

export const WithHintsOnItems: Story = {
  name: "with hints on items",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with hints on items")
      ?.options,
  },
};

export const WithLegendAsAPageHeading: Story = {
  name: "with legend as a page heading",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "with legend as a page heading",
    )?.options,
  },
};

export const WithErrorMessage: Story = {
  name: "with error message",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with error message")
      ?.options,
  },
};

export const WithVeryLongOptionText: Story = {
  name: "with very long option text",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with very long option text")
      ?.options,
  },
};

export const WithConditionalItems: Story = {
  name: "with conditional items",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with conditional items")
      ?.options,
  },
};

export const WithOptionalFormGroupClassesShowingGroupError: Story = {
  name: "with optional form-group classes showing group error",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "with optional form-group classes showing group error",
    )?.options,
  },
};

export const Small: Story = {
  name: "small",
  args: { ...examplesFromFixtures.find((f) => f.name === "small")?.options },
};

export const SmallWithLongText: Story = {
  name: "small with long text",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "small with long text")
      ?.options,
  },
};

export const SmallWithError: Story = {
  name: "small with error",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "small with error")?.options,
  },
};

export const SmallWithHint: Story = {
  name: "small with hint",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "small with hint")?.options,
  },
};

export const SmallWithConditionalReveal: Story = {
  name: "small with conditional reveal",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "small with conditional reveal",
    )?.options,
  },
};

export const SmallWithDividerAndNone: Story = {
  name: "small with divider and None",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "small with divider and None",
    )?.options,
  },
};
