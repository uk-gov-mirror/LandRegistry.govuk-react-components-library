// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/input/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Input.scss";
import Input from "./Input";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import fixtures from "govuk-frontend/dist/govuk/components/input/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof Input> = {
  title: "GOVUK Design System/Input",
  component: Input,
  decorators: [(Story) => {
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithHintText: Story = {
  name: "with hint text",
  args: { ...examplesFromFixtures.find((f) => f.name === "with hint text")?.options },
};

export const WithErrorMessage: Story = {
  name: "with error message",
  args: { ...examplesFromFixtures.find((f) => f.name === "with error message")?.options },
};

export const WithErrorAndHint: Story = {
  name: "with error and hint",
  args: { ...examplesFromFixtures.find((f) => f.name === "with error and hint")?.options },
};

export const WithWidth2Class: Story = {
  name: "with width-2 class",
  args: { ...examplesFromFixtures.find((f) => f.name === "with width-2 class")?.options },
};

export const WithWidth3Class: Story = {
  name: "with width-3 class",
  args: { ...examplesFromFixtures.find((f) => f.name === "with width-3 class")?.options },
};

export const WithWidth4Class: Story = {
  name: "with width-4 class",
  args: { ...examplesFromFixtures.find((f) => f.name === "with width-4 class")?.options },
};

export const WithWidth5Class: Story = {
  name: "with width-5 class",
  args: { ...examplesFromFixtures.find((f) => f.name === "with width-5 class")?.options },
};

export const WithWidth10Class: Story = {
  name: "with width-10 class",
  args: { ...examplesFromFixtures.find((f) => f.name === "with width-10 class")?.options },
};

export const WithWidth20Class: Story = {
  name: "with width-20 class",
  args: { ...examplesFromFixtures.find((f) => f.name === "with width-20 class")?.options },
};

export const WithWidth30Class: Story = {
  name: "with width-30 class",
  args: { ...examplesFromFixtures.find((f) => f.name === "with width-30 class")?.options },
};

export const WithLabelAsPageHeading: Story = {
  name: "with label as page heading",
  args: { ...examplesFromFixtures.find((f) => f.name === "with label as page heading")?.options },
};

export const WithPrefix: Story = {
  name: "with prefix",
  args: { ...examplesFromFixtures.find((f) => f.name === "with prefix")?.options },
};

export const WithSuffix: Story = {
  name: "with suffix",
  args: { ...examplesFromFixtures.find((f) => f.name === "with suffix")?.options },
};

export const WithPrefixAndSuffix: Story = {
  name: "with prefix and suffix",
  args: { ...examplesFromFixtures.find((f) => f.name === "with prefix and suffix")?.options },
};

export const WithPrefixAndSuffixAndError: Story = {
  name: "with prefix and suffix and error",
  args: { ...examplesFromFixtures.find((f) => f.name === "with prefix and suffix and error")?.options },
};

export const WithPrefixAndSuffixAndWidthModifier: Story = {
  name: "with prefix and suffix and width modifier",
  args: { ...examplesFromFixtures.find((f) => f.name === "with prefix and suffix and width modifier")?.options },
};

export const WithExtraLetterSpacing: Story = {
  name: "with extra letter spacing",
  args: { ...examplesFromFixtures.find((f) => f.name === "with extra letter spacing")?.options },
};