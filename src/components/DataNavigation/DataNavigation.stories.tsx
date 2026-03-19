// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import "./DataNavigation.scss";
import { Meta } from "@storybook/react-vite";
import DataNavigation from "./DataNavigation";
import { action } from "storybook/actions";

export default {
  title: "React Component Library/Data navigation",
  component: DataNavigation,
  tags: ["autodocs"],
  args: { setDataFocus: action("setDataFocus") },
  argTypes: {
    buttonColour: {
      control: "color",
      description:
        "Button background colour. Omit to use govuk-functional-colour('brand') (#1d70b8).",
    },
    buttonTextColour: {
      control: "color",
      description:
        "Button text colour. Omit to use govuk-colour('white') (#ffffff).",
    },
    buttonShadowColour: {
      control: "color",
      description:
        "Button shadow colour. Omit to use govuk-colour('black') (#0b0c0c).",
    },
    buttonHoverColour: {
      control: "color",
      description:
        "Button hover background colour. Omit to use govuk-functional-colour('focus') (#ffdd00).",
    },
    buttonHoverTextColour: {
      control: "color",
      description:
        "Button hover text colour. Omit to use govuk-functional-colour('focus-text') (#0b0c0c).",
    },
  },
} as Meta<typeof DataNavigation>;

// No colour props — uses govuk-frontend SCSS defaults throughout
export const DefaultExample = {
  args: {
    dataId: 8,
    dataDescription: "Data Properties",
  },
};

export const MonthDataNavigator = {
  args: {
    dataId: 9,
    dataDescription: "September 2004",
    nextText: "Next Month",
    previousText: "Previous Month",
  },
};

export const DisabledPrevious = {
  args: {
    ...MonthDataNavigator.args,
    dataId: 10,
    dataDescription: "October 2004",
    previousCondition: true,
  },
};

export const DisabledNext = {
  args: {
    ...MonthDataNavigator.args,
    dataId: 11,
    dataDescription: "November 2004",
    nextCondition: true,
  },
};

// Legacy hardcoded colours from the original CardColumn — shown for reference
export const LegacyColours = {
  args: {
    dataId: 8,
    dataDescription: "Data Properties",
    buttonColour: "#005ea5",
    buttonTextColour: "#ffffff",
    buttonShadowColour: "#003078",
    buttonHoverColour: "#005ea5",
    buttonHoverTextColour: "#f8f8f8",
  },
};

// Per-instance custom brand colour — GOV.UK green (success colour)
export const CustomColours = {
  args: {
    dataId: 8,
    dataDescription: "Data Properties",
    buttonColour: "#0f7a52",
    buttonTextColour: "#ffffff",
    buttonShadowColour: "#083d29",
    buttonHoverColour: "#ffdd00",
    buttonHoverTextColour: "#0b0c0c",
  },
};
