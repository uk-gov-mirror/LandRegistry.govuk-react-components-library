// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/error-summary/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./ErrorSummary.scss";
import ErrorSummary from "./ErrorSummary";
import { Meta, StoryObj } from "@storybook/react";
import fixtures from "govuk-frontend/dist/govuk/components/error-summary/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
import { ConfigureOverallErrorSummary } from "./ErrorSummary.config";

let configured = false;
const meta: Meta<typeof ErrorSummary> = {
  title: "GOVUK Design System/Error summary",
  component: ErrorSummary,
  decorators: [
    (Story, { parameters }) => {
      React.useEffect(() => {
        const isDocsMode = window.location.search.includes(
          "path=/docs/govuk-design-system-error-summary--docs",
        );
        if (isDocsMode && !configured && parameters.initializeConfigurations) {
          void ConfigureOverallErrorSummary();
          configured = true;
        } else if (!isDocsMode) {
          void ConfigureOverallErrorSummary();
        }
      }, []);
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ErrorSummary>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithoutLinks: Story = {
  name: "without links",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "without links")?.options,
  },
};

export const MixedWithAndWithoutLinks: Story = {
  name: "mixed with and without links",
  args: {
    ...examplesFromFixtures.find(
      (f) => f.name === "mixed with and without links",
    )?.options,
  },
};

export const WithDescriptionOnly: Story = {
  name: "with description only",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with description only")
      ?.options,
  },
};

export const WithEverything: Story = {
  name: "with everything",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with everything")?.options,
  },
};
