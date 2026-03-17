// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/error-message/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./ErrorMessage.scss";
import ErrorMessage from "./ErrorMessage";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import fixtures from "govuk-frontend/dist/govuk/components/error-message/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof ErrorMessage> = {
  title: "GOVUK Design System/ErrorMessage",
  component: ErrorMessage,
  decorators: [(Story) => {
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const Translated: Story = {
  name: "translated",
  args: { ...examplesFromFixtures.find((f) => f.name === "translated")?.options },
};