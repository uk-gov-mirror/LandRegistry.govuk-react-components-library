// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/summary-list/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./SummaryList.scss";
import SummaryList from "./SummaryList";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/summary-list/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof SummaryList> = {
  title: "GOVUK Design System/SummaryList",
  component: SummaryList,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SummaryList>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithActions: Story = {
  name: "with actions",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with actions")?.options,
  },
};

export const NoBorder: Story = {
  name: "no-border",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "no-border")?.options,
  },
};

export const NoBorderOnLastRow: Story = {
  name: "no-border on last row",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "no-border on last row")
      ?.options,
  },
};

export const Extreme: Story = {
  name: "extreme",
  args: { ...examplesFromFixtures.find((f) => f.name === "extreme")?.options },
};

export const AsASummaryCardWithATextHeader: Story = {
  name: "as a summary card with a text header",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "as a summary card with a text header",
    )?.options,
  },
};

export const AsASummaryCardWithAHtmlHeader: Story = {
  name: "as a summary card with a html header",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "as a summary card with a html header",
    )?.options,
  },
};

export const AsASummaryCardWithActions: Story = {
  name: "as a summary card with actions",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "as a summary card with actions",
    )?.options,
  },
};

export const AsASummaryCardWithActionsPlusSummaryListActions: Story = {
  name: "as a summary card with actions plus summary list actions",
  args: {
    ...examplesFromFixtures.find(
      (f) =>
        f.name === "as a summary card with actions plus summary list actions",
    )?.options,
  },
};

export const AsASummaryCardExtreme: Story = {
  name: "as a summary card extreme",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "as a summary card extreme")
      ?.options,
  },
};
