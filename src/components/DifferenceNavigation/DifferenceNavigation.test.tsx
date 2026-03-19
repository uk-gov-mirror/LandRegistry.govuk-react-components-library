import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DifferenceNavigation from "./DifferenceNavigation";

describe("DifferenceNavigation Component", () => {
  const mockSetDifferenceFocus = jest.fn();

  test("renders the navigation buttons and the correct difference info", () => {
    render(
      <DifferenceNavigation
        differenceId={2}
        setDifferenceFocus={mockSetDifferenceFocus}
        totalDifferences={5}
        keyword="change"
        plural="changes"
      />,
    );

    const previousButton = screen.getByTestId("previous-change");
    const nextButton = screen.getByTestId("next-change");
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(screen.getByText("Change 2 of 5")).toBeInTheDocument();
  });

  test("disables previous button on the first difference", () => {
    render(
      <DifferenceNavigation
        differenceId={1}
        setDifferenceFocus={mockSetDifferenceFocus}
        totalDifferences={5}
      />,
    );
    expect(screen.getByTestId("previous-variation")).toBeDisabled();
  });

  test("disables next button on the last difference", () => {
    render(
      <DifferenceNavigation
        differenceId={5}
        setDifferenceFocus={mockSetDifferenceFocus}
        totalDifferences={5}
      />,
    );
    expect(screen.getByTestId("next-variation")).toBeDisabled();
  });

  test("calls setDifferenceFocus with the correct value on button click", () => {
    render(
      <DifferenceNavigation
        differenceId={3}
        setDifferenceFocus={mockSetDifferenceFocus}
        totalDifferences={5}
      />,
    );

    fireEvent.click(screen.getByTestId("previous-variation"));
    expect(mockSetDifferenceFocus).toHaveBeenCalledWith(2);

    fireEvent.click(screen.getByTestId("next-variation"));
    expect(mockSetDifferenceFocus).toHaveBeenCalledWith(4);
  });

  test("shows 'No variations found' when totalDifferences is 0", () => {
    render(
      <DifferenceNavigation
        differenceId={0}
        setDifferenceFocus={mockSetDifferenceFocus}
        totalDifferences={0}
      />,
    );
    expect(screen.getByText("No variations found")).toBeInTheDocument();
  });

  test("applies app-difference-navigation-button class to both buttons", () => {
    render(
      <DifferenceNavigation
        differenceId={2}
        setDifferenceFocus={mockSetDifferenceFocus}
        totalDifferences={5}
      />,
    );
    expect(screen.getByTestId("previous-variation")).toHaveClass(
      "app-difference-navigation-button",
    );
    expect(screen.getByTestId("next-variation")).toHaveClass(
      "app-difference-navigation-button",
    );
  });

  test("does not set a style attribute on buttons when no colour props are provided", () => {
    render(
      <DifferenceNavigation
        differenceId={2}
        setDifferenceFocus={mockSetDifferenceFocus}
        totalDifferences={5}
      />,
    );
    expect(
      screen.getByTestId("previous-variation").getAttribute("style"),
    ).toBeNull();
    expect(
      screen.getByTestId("next-variation").getAttribute("style"),
    ).toBeNull();
  });

  test("sets --diff-nav-button-colour on both buttons when buttonColour is provided", () => {
    render(
      <DifferenceNavigation
        differenceId={2}
        setDifferenceFocus={mockSetDifferenceFocus}
        totalDifferences={5}
        buttonColour="#005ea5"
      />,
    );
    expect(
      screen.getByTestId("previous-variation").getAttribute("style"),
    ).toContain("--diff-nav-button-colour: #005ea5");
    expect(
      screen.getByTestId("next-variation").getAttribute("style"),
    ).toContain("--diff-nav-button-colour: #005ea5");
  });

  test("sets all colour custom properties on both buttons when all colour props are provided", () => {
    render(
      <DifferenceNavigation
        differenceId={2}
        setDifferenceFocus={mockSetDifferenceFocus}
        totalDifferences={5}
        buttonColour="#0f7a52"
        buttonTextColour="#ffffff"
        buttonShadowColour="#083d29"
        buttonHoverColour="#ffdd00"
        buttonHoverTextColour="#0b0c0c"
      />,
    );

    ["previous-variation", "next-variation"].forEach((testId) => {
      const style = screen.getByTestId(testId).getAttribute("style");
      expect(style).toContain("--diff-nav-button-colour: #0f7a52");
      expect(style).toContain("--diff-nav-button-text-colour: #ffffff");
      expect(style).toContain("--diff-nav-button-shadow-colour: #083d29");
      expect(style).toContain("--diff-nav-button-hover-colour: #ffdd00");
      expect(style).toContain("--diff-nav-button-hover-text-colour: #0b0c0c");
    });
  });

  test("colour props work correctly with a custom keyword", () => {
    render(
      <DifferenceNavigation
        differenceId={2}
        setDifferenceFocus={mockSetDifferenceFocus}
        totalDifferences={5}
        keyword="change"
        plural="changes"
        buttonColour="#4c2c92"
      />,
    );
    expect(
      screen.getByTestId("previous-change").getAttribute("style"),
    ).toContain("--diff-nav-button-colour: #4c2c92");
    expect(screen.getByTestId("next-change").getAttribute("style")).toContain(
      "--diff-nav-button-colour: #4c2c92",
    );
  });
});
