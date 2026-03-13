// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/select/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Select.scss";
import Select from "./Select";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/select/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof Select> = {
  title: "GOVUK Design System/Select",
  component: Select,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithHintTextAndErrorMessage: Story = {
  name: "with hint text and error message",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "with hint text and error message",
    )?.options,
  },
};

export const WithLabelAsPageHeading: Story = {
  name: "with label as page heading",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with label as page heading")
      ?.options,
  },
};

export const WithFullWidthOverride: Story = {
  name: "with full width override",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with full width override")
      ?.options,
  },
};
