// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/password-input/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./PasswordInput.scss";
import PasswordInput from "./PasswordInput";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/password-input/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof PasswordInput> = {
  title: "GOVUK Design System/PasswordInput",
  component: PasswordInput,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithHintText: Story = {
  name: "with hint text",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with hint text")?.options,
  },
};

export const WithErrorMessage: Story = {
  name: "with error message",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with error message")
      ?.options,
  },
};

export const WithLabelAsPageHeading: Story = {
  name: "with label as page heading",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with label as page heading")
      ?.options,
  },
};

export const WithInputWidthClass: Story = {
  name: "with input width class",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with input width class")
      ?.options,
  },
};
