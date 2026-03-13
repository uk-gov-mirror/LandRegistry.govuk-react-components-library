// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/character-count/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./CharacterCount.scss";
import CharacterCount from "./CharacterCount";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/character-count/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof CharacterCount> = {
  title: "GOVUK Design System/CharacterCount",
  component: CharacterCount,
  decorators: [(Story) => {
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CharacterCount>;

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

export const WithHintAndError: Story = {
  name: "with hint and error",
  args: { ...examplesFromFixtures.find((f) => f.name === "with hint and error")?.options },
};

export const WithDefaultValue: Story = {
  name: "with default value",
  args: { ...examplesFromFixtures.find((f) => f.name === "with default value")?.options },
};

export const WithDefaultValueExceedingLimit: Story = {
  name: "with default value exceeding limit",
  args: { ...examplesFromFixtures.find((f) => f.name === "with default value exceeding limit")?.options },
};

export const WithCustomRows: Story = {
  name: "with custom rows",
  args: { ...examplesFromFixtures.find((f) => f.name === "with custom rows")?.options },
};

export const WithLabelAsPageHeading: Story = {
  name: "with label as page heading",
  args: { ...examplesFromFixtures.find((f) => f.name === "with label as page heading")?.options },
};

export const WithWordCount: Story = {
  name: "with word count",
  args: { ...examplesFromFixtures.find((f) => f.name === "with word count")?.options },
};

export const WithThreshold: Story = {
  name: "with threshold",
  args: { ...examplesFromFixtures.find((f) => f.name === "with threshold")?.options },
};