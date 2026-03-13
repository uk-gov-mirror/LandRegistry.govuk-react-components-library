// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/textarea/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Textarea.scss";
import Textarea from "./Textarea";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/textarea/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof Textarea> = {
  title: "GOVUK Design System/Textarea",
  component: Textarea,
  decorators: [(Story) => {
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithHint: Story = {
  name: "with hint",
  args: { ...examplesFromFixtures.find((f) => f.name === "with hint")?.options },
};

export const WithErrorMessage: Story = {
  name: "with error message",
  args: { ...examplesFromFixtures.find((f) => f.name === "with error message")?.options },
};

export const WithDefaultValue: Story = {
  name: "with default value",
  args: { ...examplesFromFixtures.find((f) => f.name === "with default value")?.options },
};

export const WithCustomRows: Story = {
  name: "with custom rows",
  args: { ...examplesFromFixtures.find((f) => f.name === "with custom rows")?.options },
};

export const WithLabelAsPageHeading: Story = {
  name: "with label as page heading",
  args: { ...examplesFromFixtures.find((f) => f.name === "with label as page heading")?.options },
};