import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DataNavigation from "./DataNavigation";

describe("DataNavigation Component", () => {
  const mockSetDataFocus = jest.fn();

  const defaultProps = {
    dataId: 1,
    setDataFocus: mockSetDataFocus,
    previousText: "Previous",
    previousCondition: false,
    nextText: "Next",
    nextCondition: false,
    dataDescription: "Data Navigation",
  };

  beforeEach(() => {
    mockSetDataFocus.mockClear();
  });

  it("renders the previous button with correct label", () => {
    const { getByTestId } = render(<DataNavigation {...defaultProps} />);
    expect(getByTestId("previous-data")).toHaveTextContent("Previous");
  });

  it("renders the next button with correct label", () => {
    const { getByTestId } = render(<DataNavigation {...defaultProps} />);
    expect(getByTestId("next-data")).toHaveTextContent("Next");
  });

  it("renders the data description correctly", () => {
    const { getByText } = render(<DataNavigation {...defaultProps} />);
    expect(getByText("Data Navigation")).toBeInTheDocument();
  });

  it("disables previous button when previousCondition is true", () => {
    const { getByTestId } = render(
      <DataNavigation {...defaultProps} previousCondition={true} />,
    );
    expect(getByTestId("previous-data")).toBeDisabled();
  });

  it("disables next button when nextCondition is true", () => {
    const { getByTestId } = render(
      <DataNavigation {...defaultProps} nextCondition={true} />,
    );
    expect(getByTestId("next-data")).toBeDisabled();
  });

  it("triggers setDataFocus with correct id when previous button is clicked", () => {
    const { getByTestId } = render(<DataNavigation {...defaultProps} />);
    fireEvent.click(getByTestId("previous-data"));
    expect(mockSetDataFocus).toHaveBeenCalledWith(0);
  });

  it("triggers setDataFocus with correct id when next button is clicked", () => {
    const { getByTestId } = render(<DataNavigation {...defaultProps} />);
    fireEvent.click(getByTestId("next-data"));
    expect(mockSetDataFocus).toHaveBeenCalledWith(2);
  });

  it("applies app-data-navigation-button class to both buttons", () => {
    const { getByTestId } = render(<DataNavigation {...defaultProps} />);
    expect(getByTestId("previous-data")).toHaveClass(
      "app-data-navigation-button",
    );
    expect(getByTestId("next-data")).toHaveClass("app-data-navigation-button");
  });

  it("does not set a style attribute on buttons when no colour props are provided", () => {
    const { getByTestId } = render(<DataNavigation {...defaultProps} />);
    expect(getByTestId("previous-data").getAttribute("style")).toBeNull();
    expect(getByTestId("next-data").getAttribute("style")).toBeNull();
  });

  it("sets --data-nav-button-colour directly on both buttons when buttonColour is provided", () => {
    const { getByTestId } = render(
      <DataNavigation {...defaultProps} buttonColour="#005ea5" />,
    );
    expect(getByTestId("previous-data").getAttribute("style")).toContain(
      "--data-nav-button-colour: #005ea5",
    );
    expect(getByTestId("next-data").getAttribute("style")).toContain(
      "--data-nav-button-colour: #005ea5",
    );
  });

  it("sets --data-nav-button-text-colour directly on both buttons when buttonTextColour is provided", () => {
    const { getByTestId } = render(
      <DataNavigation {...defaultProps} buttonTextColour="#ffffff" />,
    );
    expect(getByTestId("previous-data").getAttribute("style")).toContain(
      "--data-nav-button-text-colour: #ffffff",
    );
    expect(getByTestId("next-data").getAttribute("style")).toContain(
      "--data-nav-button-text-colour: #ffffff",
    );
  });

  it("sets all colour custom properties directly on both buttons when all colour props are provided", () => {
    const { getByTestId } = render(
      <DataNavigation
        {...defaultProps}
        buttonColour="#0f7a52"
        buttonTextColour="#ffffff"
        buttonShadowColour="#083d29"
        buttonHoverColour="#ffdd00"
        buttonHoverTextColour="#0b0c0c"
      />,
    );

    ["previous-data", "next-data"].forEach((testId) => {
      const style = getByTestId(testId).getAttribute("style");
      expect(style).toContain("--data-nav-button-colour: #0f7a52");
      expect(style).toContain("--data-nav-button-text-colour: #ffffff");
      expect(style).toContain("--data-nav-button-shadow-colour: #083d29");
      expect(style).toContain("--data-nav-button-hover-colour: #ffdd00");
      expect(style).toContain("--data-nav-button-hover-text-colour: #0b0c0c");
    });
  });
});
