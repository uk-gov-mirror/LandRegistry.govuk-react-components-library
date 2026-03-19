// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import "./PDFViewerCanvas.scss";
import PDFViewerCanvas from "./PDFViewerCanvas";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
  document as Base64Document,
  sampleOfficialNumber,
} from "../PDFViewer/testutilities/SampleBase64";

const meta: Meta<typeof PDFViewerCanvas> = {
  title: "React Component Library/PDF viewer canvas",
  component: PDFViewerCanvas,
  tags: ["autodocs"],
  argTypes: {
    buttonColour: {
      control: "color",
      description:
        "Navigation button background colour. Omit to use govuk-functional-colour('brand') (#1d70b8).",
    },
    buttonTextColour: {
      control: "color",
      description:
        "Navigation button text colour. Omit to use govuk-colour('white') (#ffffff).",
    },
    buttonShadowColour: {
      control: "color",
      description:
        "Navigation button shadow colour. Omit to use govuk-colour('black') (#0b0c0c).",
    },
    buttonHoverColour: {
      control: "color",
      description:
        "Navigation button hover background colour. Omit to use govuk-functional-colour('focus') (#ffdd00).",
    },
    buttonHoverTextColour: {
      control: "color",
      description:
        "Navigation button hover text colour. Omit to use govuk-functional-colour('focus-text') (#0b0c0c).",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PDFViewerCanvas>;

export const DefaultExample: Story = {
  args: {
    documentName: `AC1 ${sampleOfficialNumber}`,
    src: "/document.pdf",
  },
};

export const SourceFromBase64EncodedPDFData: Story = {
  args: {
    ...DefaultExample.args,
    src: Base64Document,
  },
};

export const MultiplePagesPDF: Story = {
  args: {
    documentName: `TP1 ${sampleOfficialNumber}`,
    src: "/test.pdf",
  },
};

export const ErrorLoadingDocument: Story = {
  args: {
    documentName: `TP1 ${sampleOfficialNumber}`,
    src: "/testsomesome.pdf",
  },
};

export const MultiplePagesPDFWithNoNavigation: Story = {
  args: {
    ...MultiplePagesPDF.args,
    showNavigation: false,
  },
};

export const MultiplePagesPDFAndSpecifiedPage: Story = {
  args: {
    ...MultiplePagesPDF.args,
    pageNumber: 2,
  },
};

export const MultiplePagesPDFAndSpecifiedPageWithNoNavigation: Story = {
  args: {
    ...MultiplePagesPDFAndSpecifiedPage.args,
    showNavigation: false,
  },
};

export const MultiplePagesPDFAndLastPage: Story = {
  args: {
    ...MultiplePagesPDF.args,
    pageNumber: 4,
  },
};

// Navigation buttons use GOV.UK green instead of the default brand blue
export const MultiplePagesPDFWithCustomNavigationColours: Story = {
  args: {
    ...MultiplePagesPDF.args,
    buttonColour: "#0f7a52",
    buttonTextColour: "#ffffff",
    buttonShadowColour: "#083d29",
    buttonHoverColour: "#ffdd00",
    buttonHoverTextColour: "#0b0c0c",
  },
};
