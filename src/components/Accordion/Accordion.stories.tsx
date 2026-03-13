// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/accordion/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Accordion.scss";
import Accordion from "./Accordion";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/accordion/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
import { ConfigureOverallAccordion } from "./Accordion.config";

let configured = false;
const meta: Meta<typeof Accordion> = {
  title: "GOVUK Design System/Accordion",
  component: Accordion,
  decorators: [(Story, { parameters }) => {
      React.useEffect(() => {
        const isDocsMode = window.location.search.includes("viewMode=docs");
        if (isDocsMode && !configured && parameters.initializeConfigurations) {
          ConfigureOverallAccordion();
          configured = true;
        } else if (!isDocsMode) {
          ConfigureOverallAccordion();
        }
      }, []);
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithAdditionalDescriptions: Story = {
  name: "with additional descriptions",
  args: { ...examplesFromFixtures.find((f) => f.name === "with additional descriptions")?.options },
};

export const WithLongContentAndDescription: Story = {
  name: "with long content and description",
  args: { ...examplesFromFixtures.find((f) => f.name === "with long content and description")?.options },
};

export const WithAllSectionsAlreadyOpen: Story = {
  name: "with all sections already open",
  args: { ...examplesFromFixtures.find((f) => f.name === "with all sections already open")?.options },
};