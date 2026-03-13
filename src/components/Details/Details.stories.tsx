// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/details/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Details.scss";
import Details from "./Details";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/details/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof Details> = {
  title: "GOVUK Design System/Details",
  component: Details,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Details>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const Expanded: Story = {
  name: "expanded",
  args: { ...examplesFromFixtures.find((f) => f.name === "expanded")?.options },
};

export const WithHtml: Story = {
  name: "with html",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with html")?.options,
  },
};
