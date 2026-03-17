// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/back-link/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./BackLink.scss";
import BackLink from "./BackLink";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import fixtures from "govuk-frontend/dist/govuk/components/back-link/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof BackLink> = {
  title: "GOVUK Design System/Back link",
  component: BackLink,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BackLink>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const Inverse: Story = {
  name: "inverse",
  args: { ...examplesFromFixtures.find((f) => f.name === "inverse")?.options },
};
