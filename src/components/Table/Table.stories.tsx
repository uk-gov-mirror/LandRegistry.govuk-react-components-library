// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/table/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Table.scss";
import Table from "./Table";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/table/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof Table> = {
  title: "GOVUK Design System/Table",
  component: Table,
  decorators: [(Story) => {
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithHead: Story = {
  name: "with head",
  args: { ...examplesFromFixtures.find((f) => f.name === "with head")?.options },
};

export const WithHeadAndCaption: Story = {
  name: "with head and caption",
  args: { ...examplesFromFixtures.find((f) => f.name === "with head and caption")?.options },
};