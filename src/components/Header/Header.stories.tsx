// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/header/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Header.scss";
import Header from "./Header";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/header/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof Header> = {
  title: "GOVUK Design System/Header",
  component: Header,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithServiceName: Story = {
  name: "with service name",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with service name")
      ?.options,
  },
};

export const WithServiceNameButNoServiceUrl: Story = {
  name: "with service name but no service url",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "with service name but no service url",
    )?.options,
  },
};

export const WithNavigation: Story = {
  name: "with navigation",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with navigation")?.options,
  },
};

export const WithCustomMenuButtonText: Story = {
  name: "with custom menu button text",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "with custom menu button text",
    )?.options,
  },
};

export const WithServiceNameAndNavigation: Story = {
  name: "with service name and navigation",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "with service name and navigation",
    )?.options,
  },
};

export const WithLargeNavigation: Story = {
  name: "with large navigation",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with large navigation")
      ?.options,
  },
};

export const WithProductName: Story = {
  name: "with product name",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with product name")
      ?.options,
  },
};

export const FullWidth: Story = {
  name: "full width",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "full width")?.options,
  },
};

export const FullWidthWithNavigation: Story = {
  name: "full width with navigation",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "full width with navigation")
      ?.options,
  },
};

export const WithFullWidthBorder: Story = {
  name: "with full width border",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with full width border")
      ?.options,
  },
};

export const NavigationItemWithHtml: Story = {
  name: "navigation item with html",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "navigation item with html")
      ?.options,
  },
};

export const NavigationItemWithTextWithoutLink: Story = {
  name: "navigation item with text without link",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "navigation item with text without link",
    )?.options,
  },
};

export const WithStEdwardSCrown: Story = {
  name: "with St. Edward's Crown",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with St. Edward's Crown")
      ?.options,
  },
};
