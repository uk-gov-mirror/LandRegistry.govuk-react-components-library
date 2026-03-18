// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/notification-banner/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./NotificationBanner.scss";
import NotificationBanner from "./NotificationBanner";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import fixtures from "govuk-frontend/dist/govuk/components/notification-banner/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
import { ConfigureOverallNotificationBanner } from "./NotificationBanner.config";

let configured = false;
const meta: Meta<typeof NotificationBanner> = {
  title: "GOVUK Design System/Notification banner",
  component: NotificationBanner,
  decorators: [(Story, { parameters }) => {
      React.useEffect(() => {
        const isDocsMode = window.location.search.includes("path=/docs/govuk-design-system-notification-banner--docs");
        if (isDocsMode && !configured && parameters.initializeConfigurations) {
          ConfigureOverallNotificationBanner();
          configured = true;
        } else if (!isDocsMode) {
          ConfigureOverallNotificationBanner();
        }
      }, []);
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NotificationBanner>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithTextAsHtml: Story = {
  name: "with text as html",
  args: { ...examplesFromFixtures.find((f) => f.name === "with text as html")?.options },
};

export const WithTypeAsSuccess: Story = {
  name: "with type as success",
  args: { ...examplesFromFixtures.find((f) => f.name === "with type as success")?.options },
};

export const WithLongHeading: Story = {
  name: "with long heading",
  args: { ...examplesFromFixtures.find((f) => f.name === "with long heading")?.options },
};

export const WithLotsOfContent: Story = {
  name: "with lots of content",
  args: { ...examplesFromFixtures.find((f) => f.name === "with lots of content")?.options },
};