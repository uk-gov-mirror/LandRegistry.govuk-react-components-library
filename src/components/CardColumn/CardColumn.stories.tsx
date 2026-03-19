import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import CardColumn from "./CardColumn";

const meta: Meta<typeof CardColumn> = {
  title: "React Component Library/Card column",
  component: CardColumn,
  tags: ["autodocs"],
  argTypes: {
    textColor: {
      control: "color",
      description:
        "Per-instance override for the header text colour. Omit to inherit from the govuk-frontend Sass theme (govuk-functional-colour('brand')).",
    },
    hoverColor: {
      control: "color",
      description:
        "Per-instance override for the header hover background. Omit to inherit from the govuk-frontend Sass theme (govuk-functional-colour('header-background')).",
    },
  },
};

export default meta;

const Template: StoryFn<typeof CardColumn> = (args) => (
  <BrowserRouter>
    <div className="row row-cols-1 row-cols-md-3 govuk-!-margin-bottom-8">
      <CardColumn {...args} />
    </div>
  </BrowserRouter>
);

// No colour props — colours come entirely from govuk-functional-colour() in SCSS
export const DefaultExample = {
  render: Template,
  args: { link: "#test-link", header: "Test header", body: "Test body" },
};

// Original hardcoded colours from the initial CardColumn.scss:
//   card-link:        #1d70b8
//   card-link:hover:  #003078
//   card-header:      #005ea5 (resting text + hover background)
//   card-header:hover color: #f8f8f8
// textColor drives both the resting header text and the link colour;
// hoverColor drives the hover background.
export const LegacyColours = {
  render: Template,
  args: {
    link: "#test-link",
    header: "Legacy colour card",
    body: "Uses the original hardcoded colours from the initial CardColumn.scss.",
    textColor: "#005ea5",
    hoverColor: "#005ea5",
  },
};

// Per-instance override using GOV.UK purple department colour
export const CustomColours = {
  render: Template,
  args: {
    link: "#test-link",
    header: "Custom colour card",
    body: "textColor and hoverColor are overridden per-instance via props.",
    textColor: "#4c2c92",
    hoverColor: "#4c2c92",
  },
};

const Template2: StoryFn<typeof CardColumn> = () => (
  <BrowserRouter>
    <div className="row row-cols-1 row-cols-md-3 govuk-!-margin-bottom-8">
      <CardColumn
        link={"#choose-scanner"}
        header="Scan agricultural credit documents"
        body="Before you scan, you'll need to record the document on the agricultural credits system."
      />
      <CardColumn
        link={"#search"}
        header="Find agricultural credit documents"
        body="You'll need the official number."
      />
      <CardColumn
        link={"#find-land-charges-oversized-plan"}
        header="Find oversized land charge plans"
        body="You'll need the registration date and number."
      />
    </div>
  </BrowserRouter>
);

export const MultipleCardsColumns = {
  render: Template2,
  args: {},
};
