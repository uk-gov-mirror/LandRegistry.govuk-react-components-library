// THIS FILE IS AUTO-GENERATED — do not edit manually.
// Source: node_modules/govuk-frontend/dist/govuk/components/tag/fixtures.json
// Regenerate: npm run generate-stories

import React from "react";
import "./Tag.scss";
import Tag from "./Tag";
import { Meta, StoryObj } from "@storybook/react-vite";
import fixtures from "govuk-frontend/dist/govuk/components/tag/fixtures.json";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import { ComponentFixture } from "../../dynamics";
const meta: Meta<typeof Tag> = {
  title: "GOVUK Design System/Tag",
  component: Tag,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tag>;

// extractShownFixtures transforms raw govuk-frontend fixture data into
// React-compatible props (e.g. text → children, classes → className).
const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

export const Default: Story = {
  name: "default",
  args: { ...examplesFromFixtures.find((f) => f.name === "default")?.options },
};

export const Grey: Story = {
  name: "grey",
  args: { ...examplesFromFixtures.find((f) => f.name === "grey")?.options },
};

export const LightBlue: Story = {
  name: "light blue",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "light blue")?.options,
  },
};

export const Turquoise: Story = {
  name: "turquoise",
  args: {
    ...examplesFromFixtures.find((f) => f.name === "turquoise")?.options,
  },
};

export const Green: Story = {
  name: "green",
  args: { ...examplesFromFixtures.find((f) => f.name === "green")?.options },
};

export const Purple: Story = {
  name: "purple",
  args: { ...examplesFromFixtures.find((f) => f.name === "purple")?.options },
};

export const Pink: Story = {
  name: "pink",
  args: { ...examplesFromFixtures.find((f) => f.name === "pink")?.options },
};

export const Red: Story = {
  name: "red",
  args: { ...examplesFromFixtures.find((f) => f.name === "red")?.options },
};

export const Orange: Story = {
  name: "orange",
  args: { ...examplesFromFixtures.find((f) => f.name === "orange")?.options },
};

export const Yellow: Story = {
  name: "yellow",
  args: { ...examplesFromFixtures.find((f) => f.name === "yellow")?.options },
};
