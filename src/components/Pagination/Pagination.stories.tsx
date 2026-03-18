// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/pagination/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Pagination.scss";
import Pagination from "./Pagination";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import fixtures from "govuk-frontend/dist/govuk/components/pagination/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof Pagination> = {
  title: "GOVUK Design System/Pagination",
  component: Pagination,
  decorators: [(Story) => {
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithCustomLinkAndItemText: Story = {
  name: "with custom link and item text",
  args: { ...examplesFromFixtures.find((f) => f.name === "with custom link and item text")?.options },
};

export const WithManyPages: Story = {
  name: "with many pages",
  args: { ...examplesFromFixtures.find((f) => f.name === "with many pages")?.options },
};

export const FirstPage: Story = {
  name: "first page",
  args: { ...examplesFromFixtures.find((f) => f.name === "first page")?.options },
};

export const LastPage: Story = {
  name: "last page",
  args: { ...examplesFromFixtures.find((f) => f.name === "last page")?.options },
};

export const WithPrevAndNextOnly: Story = {
  name: "with prev and next only",
  args: { ...examplesFromFixtures.find((f) => f.name === "with prev and next only")?.options },
};

export const WithPrevAndNextOnlyAndLabels: Story = {
  name: "with prev and next only and labels",
  args: { ...examplesFromFixtures.find((f) => f.name === "with prev and next only and labels")?.options },
};

export const WithPrevAndNextOnlyAndVeryLongLabels: Story = {
  name: "with prev and next only and very long labels",
  args: { ...examplesFromFixtures.find((f) => f.name === "with prev and next only and very long labels")?.options },
};

export const WithPreviousOnly: Story = {
  name: "with previous only",
  args: { ...examplesFromFixtures.find((f) => f.name === "with previous only")?.options },
};

export const WithNextOnly: Story = {
  name: "with next only",
  args: { ...examplesFromFixtures.find((f) => f.name === "with next only")?.options },
};