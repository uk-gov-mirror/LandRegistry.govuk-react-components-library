import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { BrowserRouter } from "react-router";
import CardLayout from "./CardLayout";
import { CardLayoutProps } from "./CardLayout.types";

const meta: Meta<typeof CardLayout> = {
  title: "React Component Library/Card layout",
  component: CardLayout,
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof CardLayout> = (args) => (
  <BrowserRouter>
    <CardLayout {...args} />
  </BrowserRouter>
);

const data: CardLayoutProps = {
  cardColumns: [
    {
      link: "#choose-scanner",
      header: "Scan agricultural credit documents",
      body: "Before you scan, you'll need to record the document on the agricultural credits system.",
    },
    {
      link: "#upload-document",
      header: "Upload agricultural credit documents",
      body: "Before you Upload, you'll need to record the document on the agricultural credits system.",
    },
    {
      link: "#search",
      header: "Find agricultural credit documents",
      body: "You'll need the official number.",
    },
    {
      link: "#find-land-charges-oversized-plan",
      header: "Find oversized land charge plans",
      body: "You'll need the registration date and number.",
    },
  ],
};

// No colour props — all cards use govuk-frontend SCSS defaults
export const DefaultExample = {
  render: Template,
  args: data,
};

export const TwoCardColumnInLayout = {
  render: Template,
  args: { ...data, numberOfGridColumns: 2 },
};

// Each card can carry its own textColor / hoverColor independently
export const CustomColours = {
  render: Template,
  args: {
    ...data,
    cardColumns: data.cardColumns.map((card) => ({
      ...card,
      textColor: "#4c2c92",
      hoverColor: "#4c2c92",
    })),
  },
};

// Each card has its own individual colours — demonstrates per-card customisation
export const IndividualColours = {
  render: Template,
  args: {
    cardColumns: [
      {
        ...data.cardColumns[0],
        textColor: "#005ea5",
        hoverColor: "#005ea5",
      },
      {
        ...data.cardColumns[1],
        textColor: "#4c2c92",
        hoverColor: "#4c2c92",
      },
      {
        ...data.cardColumns[2],
        textColor: "#0f7a52",
        hoverColor: "#0f7a52",
      },
      {
        ...data.cardColumns[3],
        // no colours — falls back to govuk-frontend defaults
      },
    ],
  },
};

// Original hardcoded colours from the initial CardColumn.scss
export const LegacyColours = {
  render: Template,
  args: {
    ...data,
    cardColumns: data.cardColumns.map((card) => ({
      ...card,
      textColor: "#005ea5",
      hoverColor: "#005ea5",
    })),
  },
};
