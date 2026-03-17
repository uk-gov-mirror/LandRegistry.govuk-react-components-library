// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/date-input/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./DateInput.scss";
import DateInput from "./DateInput";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import fixtures from "govuk-frontend/dist/govuk/components/date-input/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof DateInput> = {
  title: "GOVUK Design System/DateInput",
  component: DateInput,
  decorators: [(Story) => {
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DateInput>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const DayAndMonth: Story = {
  name: "day and month",
  args: { ...examplesFromFixtures.find((f) => f.name === "day and month")?.options },
};

export const MonthAndYear: Story = {
  name: "month and year",
  args: { ...examplesFromFixtures.find((f) => f.name === "month and year")?.options },
};

export const WithErrorsOnly: Story = {
  name: "with errors only",
  args: { ...examplesFromFixtures.find((f) => f.name === "with errors only")?.options },
};

export const WithErrorsAndHint: Story = {
  name: "with errors and hint",
  args: { ...examplesFromFixtures.find((f) => f.name === "with errors and hint")?.options },
};

export const WithErrorOnDayInput: Story = {
  name: "with error on day input",
  args: { ...examplesFromFixtures.find((f) => f.name === "with error on day input")?.options },
};

export const WithErrorOnMonthInput: Story = {
  name: "with error on month input",
  args: { ...examplesFromFixtures.find((f) => f.name === "with error on month input")?.options },
};

export const WithErrorOnYearInput: Story = {
  name: "with error on year input",
  args: { ...examplesFromFixtures.find((f) => f.name === "with error on year input")?.options },
};

export const WithItems: Story = {
  name: "with items",
  args: { ...examplesFromFixtures.find((f) => f.name === "with items")?.options },
};