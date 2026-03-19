// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/breadcrumbs/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Breadcrumbs.scss";
import Breadcrumbs from "./Breadcrumbs";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import fixtures from "govuk-frontend/dist/govuk/components/breadcrumbs/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof Breadcrumbs> = {
  title: "GOVUK Design System/Breadcrumbs",
  component: Breadcrumbs,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithOneLevel: Story = {
  name: "with one level",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with one level")?.options,
  },
};

export const WithoutTheHomeSection: Story = {
  name: "without the home section",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "without the home section")
      ?.options,
  },
};

export const WithLastBreadcrumbAsCurrentPage: Story = {
  name: "with last breadcrumb as current page",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "with last breadcrumb as current page",
    )?.options,
  },
};

export const WithCollapseOnMobile: Story = {
  name: "with collapse on mobile",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with collapse on mobile")
      ?.options,
  },
};

export const Inverse: Story = {
  name: "inverse",
  args: { ...examplesFromFixtures.find((f) => f.name === "inverse")?.options },
};
