// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/radios/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Radios.scss";
import Radios from "./Radios";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import fixtures from "govuk-frontend/dist/govuk/components/radios/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
import { ConfigureOverallRadios } from "./Radios.config";

let configured = false;
const meta: Meta<typeof Radios> = {
  title: "GOVUK Design System/Radios",
  component: Radios,
  decorators: [
    (Story, { parameters }) => {
      React.useEffect(() => {
        const isDocsMode = window.location.search.includes(
          "path=/docs/govuk-design-system-radios--docs",
        );
        if (isDocsMode && !configured && parameters.initializeConfigurations) {
          ConfigureOverallRadios();
          configured = true;
        } else if (!isDocsMode) {
          ConfigureOverallRadios();
        }
      }, []);
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Radios>;

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

export const Inline: Story = {
  name: "inline",
  args: { ...examplesFromFixtures.find((f) => f.name === "inline")?.options },
};

export const WithLegendAsPageHeading: Story = {
  name: "with legend as page heading",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "with legend as page heading",
    )?.options,
  },
};

export const WithADivider: Story = {
  name: "with a divider",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with a divider")?.options,
  },
};

export const WithHintsOnItems: Story = {
  name: "with hints on items",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with hints on items")
      ?.options,
  },
};

export const WithoutFieldset: Story = {
  name: "without fieldset",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "without fieldset")?.options,
  },
};

export const WithFieldsetAndErrorMessage: Story = {
  name: "with fieldset and error message",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "with fieldset and error message",
    )?.options,
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

export const WithConditionalItemChecked: Story = {
  name: "with conditional item checked",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "with conditional item checked",
    )?.options,
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

export const SmallInline: Story = {
  name: "small inline",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "small inline")?.options,
  },
};

export const SmallWithADivider: Story = {
  name: "small with a divider",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "small with a divider")
      ?.options,
  },
};

export const WithConditionalItemsAndPreCheckedValue: Story = {
  name: "with conditional items and pre-checked value",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "with conditional items and pre-checked value",
    )?.options,
  },
};
