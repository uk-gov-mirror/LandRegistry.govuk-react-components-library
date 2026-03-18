// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/task-list/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./TaskList.scss";
import TaskList from "./TaskList";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import fixtures from "govuk-frontend/dist/govuk/components/task-list/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof TaskList> = {
  title: "GOVUK Design System/Task list",
  component: TaskList,
  decorators: [(Story) => {
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TaskList>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const ForcedHoverState: Story = {
  name: "forced hover state",
  args: { ...examplesFromFixtures.find((f) => f.name === "forced hover state")?.options },
};

export const WithHintTextAndAdditionalStates: Story = {
  name: "with hint text and additional states",
  args: { ...examplesFromFixtures.find((f) => f.name === "with hint text and additional states")?.options },
};

export const WithAllPossibleColours: Story = {
  name: "with all possible colours",
  args: { ...examplesFromFixtures.find((f) => f.name === "with all possible colours")?.options },
};

export const WithVeryLongSingleWordTags: Story = {
  name: "with very long single word tags",
  args: { ...examplesFromFixtures.find((f) => f.name === "with very long single word tags")?.options },
};

export const WithEmptyValues: Story = {
  name: "with empty values",
  args: { ...examplesFromFixtures.find((f) => f.name === "with empty values")?.options },
};