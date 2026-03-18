// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import PDFViewer from "./PDFViewer";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
  document as Base64Document,
  sampleOfficialNumber,
} from "./testutilities/SampleBase64";
import { PDFViewerBackend } from "./PDFViewerBackend";

const meta: Meta<typeof PDFViewer> = {
  title: "ReactComponentLibrary/PDF viewer",
  component: PDFViewer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PDFViewer>;

export const DefaultExample: Story = {
  args: {
    viewerLocation: "/pdfjs-4.4.168-dist/web/viewer.html",
    iframeId: "document_iframe",
    backend: PDFViewerBackend,
    src: "/test.pdf",
    documentName: `AC1 ${sampleOfficialNumber}`,
    style: {
      width: "100%",
      height: "100vh",
    },
  },
};

export const MinimalToolbarHidePrintButton: Story = {
  args: {
    ...DefaultExample.args,
    documentName: `LCOP ${sampleOfficialNumber}`,
    toolbar: "minimalHidePrint",
  },
};

export const ShowFullToolbar: Story = {
  args: {
    ...MinimalToolbarHidePrintButton.args,
    toolbar: "full",
  },
};

export const FullToolbarWithNoDocumentNameAndAdditionalBackendAttributes: Story =
  {
    args: {
      ...ShowFullToolbar.args,
      documentName: undefined,
      additionalBackendAttributes: { documentType: "precedent" },
    },
  };

export const FullToolbarAndHidePrint: Story = {
  args: {
    ...MinimalToolbarHidePrintButton.args,
    toolbar: "fullHidePrint",
  },
};

export const FullToolbarAndDocumentNameDifferentColour: Story = {
  args: {
    ...MinimalToolbarHidePrintButton.args,
    toolbar: "fullHidePrint",
    documentNameColour: "Orange",
  },
};

export const sourceFromBase64EncodedPDFData: Story = {
  args: {
    ...ShowFullToolbar.args,
    src: Base64Document,
  },
};

export const SourceFromRemoteURL: Story = {
  args: {
    ...DefaultExample.args,
    src: "https://hmlr-adc-integration-application.s3.amazonaws.com/20251010-102416-BK480463_prec.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZMELFMEIMDJHCRPM%2F20251010%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T102417Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=12ff3c7041fc98b71571111c70ca3574d783b935ea726b5bf0a750618bdd8c4d",
    documentName: "Remote PDF Document",
  },
};

export const SourceFromRemoteURLWithAllowedOrigin: Story = {
  args: {
    ...DefaultExample.args,
    src: "https://hmlr-adc-integration-application.s3.amazonaws.com/20251010-102417-BK493635.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZMELFMEIMDJHCRPM%2F20251010%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T102417Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=78f08dca44da45a73c4d8d08399ea2bf4d43be16d7939a1c2a7bb88f55fe4fc5",
    documentName: "Remote PDF Document with Allowed Origin",
  },
};
