// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/skip-link/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./SkipLink.scss";
import SkipLink from "./SkipLink";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import fixtures from "govuk-frontend/dist/govuk/components/skip-link/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
import { ConfigureOverallSkipLink } from "./SkipLink.config";

let configured = false;
const meta: Meta<typeof SkipLink> = {
  title: "GOVUK Design System/Skip link",
  component: SkipLink,
  decorators: [(Story, { parameters }) => {
      React.useEffect(() => {
        const isDocsMode = window.location.search.includes("path=/docs/govuk-design-system-skip-link--docs");
        if (isDocsMode && !configured && parameters.initializeConfigurations) {
          ConfigureOverallSkipLink();
          configured = true;
        } else if (!isDocsMode) {
          ConfigureOverallSkipLink();
        }
      }, []);
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithFocus: Story = {
  name: "with focus",
  args: { ...examplesFromFixtures.find((f) => f.name === "with focus")?.options },
};