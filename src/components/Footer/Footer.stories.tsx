// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/footer/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Footer.scss";
import Footer from "./Footer";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/footer/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof Footer> = {
  title: "GOVUK Design System/Footer",
  component: Footer,
  decorators: [(Story) => {
      return <Story />;
    }],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Footer>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> = extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const WithCustomHTMLContentLicenceAndCopyrightNotice: Story = {
  name: "with custom HTML content licence and copyright notice",
  args: { ...examplesFromFixtures.find((f) => f.name === "with custom HTML content licence and copyright notice")?.options },
};

export const WithCustomTextContentLicenceAndCopyrightNotice: Story = {
  name: "with custom text content licence and copyright notice",
  args: { ...examplesFromFixtures.find((f) => f.name === "with custom text content licence and copyright notice")?.options },
};

export const WithNoContentLicence: Story = {
  name: "with no content licence",
  args: { ...examplesFromFixtures.find((f) => f.name === "with no content licence")?.options },
};

export const WithCustomMeta: Story = {
  name: "with custom meta",
  args: { ...examplesFromFixtures.find((f) => f.name === "with custom meta")?.options },
};

export const WithOnlyCustomMeta: Story = {
  name: "with only custom meta",
  args: { ...examplesFromFixtures.find((f) => f.name === "with only custom meta")?.options },
};

export const WithMetaLinksAndMetaContent: Story = {
  name: "with meta links and meta content",
  args: { ...examplesFromFixtures.find((f) => f.name === "with meta links and meta content")?.options },
};

export const WithOnlyMetaLinks: Story = {
  name: "with only meta links",
  args: { ...examplesFromFixtures.find((f) => f.name === "with only meta links")?.options },
};

export const WithDefaultWidthNavigationOneColumn: Story = {
  name: "with default width navigation (one column)",
  args: { ...examplesFromFixtures.find((f) => f.name === "with default width navigation (one column)")?.options },
};

export const WithDefaultWidthNavigationTwoColumns: Story = {
  name: "with default width navigation (two columns)",
  args: { ...examplesFromFixtures.find((f) => f.name === "with default width navigation (two columns)")?.options },
};

export const WithNavigation: Story = {
  name: "with navigation",
  args: { ...examplesFromFixtures.find((f) => f.name === "with navigation")?.options },
};

export const FullGDSExample: Story = {
  name: "Full GDS example",
  args: { ...examplesFromFixtures.find((f) => f.name === "Full GDS example")?.options },
};

export const ThreeEqualColumns: Story = {
  name: "Three equal columns",
  args: { ...examplesFromFixtures.find((f) => f.name === "Three equal columns")?.options },
};