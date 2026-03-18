// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/header/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Header.scss";
import Header from "./Header";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import fixtures from "govuk-frontend/dist/govuk/components/header/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
import { ConfigureOverallHeader } from "./Header.config";

let configured = false;
const meta: Meta<typeof Header> = {
  title: "GOVUK Design System/Header",
  component: Header,
  decorators: [(Story, { parameters }) => {
      React.useEffect(() => {
        const isDocsMode = window.location.search.includes("path=/docs/govuk-design-system-header--docs");
        if (isDocsMode && !configured && parameters.initializeConfigurations) {
          ConfigureOverallHeader();
          configured = true;
        } else if (!isDocsMode) {
          ConfigureOverallHeader();
        }
      }, []);
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithServiceName: Story = {
  name: "with service name",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "with service name")
      ?.options,
  },
};

export const WithProductName: Story = {
  name: "with product name",
  args: { ...examplesFromFixtures.find((f) => f.name === "with product name")?.options },
};

export const FullWidth: Story = {
  name: "full width",
  args: { ...examplesFromFixtures.find((f) => f.name === "full width")?.options },
};