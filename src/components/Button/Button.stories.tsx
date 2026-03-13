// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/button/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Button.scss";
import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/button/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof Button> = {
  title: "GOVUK Design System/Button",
  component: Button,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const Disabled: Story = {
  name: "disabled",
  args: { ...examplesFromFixtures.find((f) => f.name === "disabled")?.options },
};

export const Link: Story = {
  name: "link",
  args: { ...examplesFromFixtures.find((f) => f.name === "link")?.options },
};

export const Start: Story = {
  name: "start",
  args: { ...examplesFromFixtures.find((f) => f.name === "start")?.options },
};

export const Input: Story = {
  name: "input",
  args: { ...examplesFromFixtures.find((f) => f.name === "input")?.options },
};

export const Secondary: Story = {
  name: "secondary",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "secondary")?.options,
  },
};

export const Warning: Story = {
  name: "warning",
  args: { ...examplesFromFixtures.find((f) => f.name === "warning")?.options },
};

export const Inverse: Story = {
  name: "inverse",
  args: { ...examplesFromFixtures.find((f) => f.name === "inverse")?.options },
};
