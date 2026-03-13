// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/exit-this-page/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./ExitThisPage.scss";
import ExitThisPage from "./ExitThisPage";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/exit-this-page/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof ExitThisPage> = {
  title: "GOVUK Design System/ExitThisPage",
  component: ExitThisPage,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ExitThisPage>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};
