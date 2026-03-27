// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/exit-this-page/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./ExitThisPage.scss";
import ExitThisPage from "./ExitThisPage";
import { Meta, StoryObj } from "@storybook/react";
import fixtures from "govuk-frontend/dist/govuk/components/exit-this-page/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
import { ConfigureOverallExitThisPage } from "./ExitThisPage.config";

let configured = false;
const meta: Meta<typeof ExitThisPage> = {
  title: "GOVUK Design System/Exit this page",
  component: ExitThisPage,
  decorators: [
    (Story, { parameters }) => {
      React.useEffect(() => {
        const isDocsMode = window.location.search.includes(
          "path=/docs/govuk-design-system-exit-this-page--docs",
        );
        if (isDocsMode && !configured && parameters.initializeConfigurations) {
          void ConfigureOverallExitThisPage();
          configured = true;
        } else if (!isDocsMode) {
          void ConfigureOverallExitThisPage();
        }
      }, []);
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
