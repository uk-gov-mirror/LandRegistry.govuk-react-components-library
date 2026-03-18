// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/label/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Label.scss";
import Label from "./Label";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import fixtures from "govuk-frontend/dist/govuk/components/label/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof Label> = {
  title: "GOVUK Design System/Label",
  component: Label,
  decorators: [(Story) => {
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithBoldText: Story = {
  name: "with bold text",
  args: { ...examplesFromFixtures.find((f) => f.name === "with bold text")?.options },
};

export const StyledAsXlText: Story = {
  name: "styled as xl text",
  args: { ...examplesFromFixtures.find((f) => f.name === "styled as xl text")?.options },
};

export const StyledAsLargeText: Story = {
  name: "styled as large text",
  args: { ...examplesFromFixtures.find((f) => f.name === "styled as large text")?.options },
};

export const StyledAsMediumText: Story = {
  name: "styled as medium text",
  args: { ...examplesFromFixtures.find((f) => f.name === "styled as medium text")?.options },
};

export const StyledAsSmallText: Story = {
  name: "styled as small text",
  args: { ...examplesFromFixtures.find((f) => f.name === "styled as small text")?.options },
};

export const AsPageHeadingXl: Story = {
  name: "as page heading xl",
  args: { ...examplesFromFixtures.find((f) => f.name === "as page heading xl")?.options },
};

export const AsPageHeadingL: Story = {
  name: "as page heading l",
  args: { ...examplesFromFixtures.find((f) => f.name === "as page heading l")?.options },
};

export const AsPageHeadingM: Story = {
  name: "as page heading m",
  args: { ...examplesFromFixtures.find((f) => f.name === "as page heading m")?.options },
};

export const AsPageHeadingS: Story = {
  name: "as page heading s",
  args: { ...examplesFromFixtures.find((f) => f.name === "as page heading s")?.options },
};

export const AsPageHeadingWithoutClass: Story = {
  name: "as page heading without class",
  args: { ...examplesFromFixtures.find((f) => f.name === "as page heading without class")?.options },
};