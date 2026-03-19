// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import "./DifferenceNavigation.scss";
import { Meta } from "@storybook/react-vite";
import DifferenceNavigation from "./DifferenceNavigation";
import { action } from "storybook/actions";

export default {
  title: "React Component Library/Difference navigation",
  component: DifferenceNavigation,
  tags: ["autodocs"],
  args: { setDifferenceFocus: action("setDifferenceFocus") },
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
} as Meta<typeof DifferenceNavigation>;

// No colour props — uses govuk-frontend SCSS defaults throughout
export const DefaultExample = {
  args: {
    differenceId: 2,
    totalDifferences: 5,
  },
};

export const ifDifferenceIs1ThenPreviousButtonIsDisable = {
  args: {
    ...DefaultExample.args,
    differenceId: 1,
  },
};

export const ifDifferenceIsLastThenNextButtonIsDisable = {
  args: {
    ...DefaultExample.args,
    differenceId: 5,
  },
};

export const DifferenceTotalIsZero = {
  args: {
    differenceId: 0,
    totalDifferences: 0,
  },
};

export const NameOfNavigationChanges = {
  args: {
    differenceId: 3,
    totalDifferences: 5,
    keyword: "change",
    plural: "changes",
  },
};

// Custom brand colour — GOV.UK green
export const CustomColours = {
  args: {
    differenceId: 2,
    totalDifferences: 5,
    buttonColour: "#0f7a52",
    buttonTextColour: "#ffffff",
    buttonShadowColour: "#083d29",
    buttonHoverColour: "#ffdd00",
    buttonHoverTextColour: "#0b0c0c",
  },
};

// Legacy hardcoded colours from the original CardColumn for reference
export const LegacyColours = {
  args: {
    differenceId: 2,
    totalDifferences: 5,
    buttonColour: "#005ea5",
    buttonTextColour: "#ffffff",
    buttonShadowColour: "#003078",
    buttonHoverColour: "#005ea5",
    buttonHoverTextColour: "#f8f8f8",
  },
};
