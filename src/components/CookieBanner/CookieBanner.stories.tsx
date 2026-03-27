// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/cookie-banner/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./CookieBanner.scss";
import CookieBanner from "./CookieBanner";
import { Meta, StoryObj } from "@storybook/react";
import fixtures from "govuk-frontend/dist/govuk/components/cookie-banner/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof CookieBanner> = {
  title: "GOVUK Design System/Cookie banner",
  component: CookieBanner,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CookieBanner>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const AcceptedConfirmationBanner: Story = {
  name: "accepted confirmation banner",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "accepted confirmation banner",
    )?.options,
  },
};

export const RejectedConfirmationBanner: Story = {
  name: "rejected confirmation banner",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "rejected confirmation banner",
    )?.options,
  },
};

export const WithHtml: Story = {
  name: "with html",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with html")?.options,
  },
};
