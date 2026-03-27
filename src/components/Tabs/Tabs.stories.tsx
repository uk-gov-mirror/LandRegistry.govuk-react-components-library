// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/tabs/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Tabs.scss";
import Tabs from "./Tabs";
import { Meta, StoryObj } from "@storybook/react";
import fixtures from "govuk-frontend/dist/govuk/components/tabs/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
import { ConfigureOverallTabs } from "./Tabs.config";

let configured = false;
const meta: Meta<typeof Tabs> = {
  title: "GOVUK Design System/Tabs",
  component: Tabs,
  decorators: [
    (Story, { parameters }) => {
      React.useEffect(() => {
        const isDocsMode = window.location.search.includes(
          "path=/docs/govuk-design-system-tabs--docs",
        );
        if (isDocsMode && !configured && parameters.initializeConfigurations) {
          void ConfigureOverallTabs();
          configured = true;
        } else if (!isDocsMode) {
          void ConfigureOverallTabs();
        }
      }, []);
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const TabsWithAnchorInPanel: Story = {
  name: "tabs-with-anchor-in-panel",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "tabs-with-anchor-in-panel")
      ?.options,
  },
};
