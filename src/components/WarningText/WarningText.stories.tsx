// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/warning-text/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./WarningText.scss";
import WarningText from "./WarningText";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/warning-text/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof WarningText> = {
  title: "GOVUK Design System/WarningText",
  component: WarningText,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WarningText>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const MultipleLines: Story = {
  name: "multiple lines",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "multiple lines")?.options,
  },
};
