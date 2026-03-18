import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { expect, describe, test, afterEach } from "@jest/globals";
import ExitThisPage from "./ExitThisPage";
import { extractShownFixtures } from "../../utils/ProcessExampleData";
import fixtures from "govuk-frontend/dist/govuk/components/exit-this-page/fixtures.json";
import { ComponentFixture } from "../../dynamics";

const examplesFromFixtures: Array<ComponentFixture> =
  extractShownFixtures(fixtures);

describe("ExitThisPage component", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders default button text", () => {
    render(<ExitThisPage />);
    expect(
      screen.getByRole("button", { name: /exit this page/i }),
    ).toBeInTheDocument();
  });

  test("renders custom button text via children", () => {
    render(<ExitThisPage>Leave now</ExitThisPage>);
    expect(
      screen.getByRole("button", { name: /leave now/i }),
    ).toBeInTheDocument();
  });

  test("renders with custom redirectUrl", () => {
    render(<ExitThisPage redirectUrl="https://example.com" />);
    expect(
      screen.getByRole("button", { name: /exit this page/i }).closest("a"),
    ).toHaveAttribute("href", "https://example.com");
  });

  test("defaults redirectUrl to BBC Weather", () => {
    render(<ExitThisPage />);
    expect(
      screen.getByRole("button", { name: /exit this page/i }).closest("a"),
    ).toHaveAttribute("href", "https://www.bbc.co.uk/weather");
  });

  test("applies data-module attribute for govuk-frontend JS", () => {
    const { container } = render(<ExitThisPage />);
    expect(container.firstChild).toHaveAttribute(
      "data-module",
      "govuk-exit-this-page",
    );
  });

  test("applies custom className", () => {
    const { container } = render(<ExitThisPage className="my-custom-class" />);
    expect(container.firstChild).toHaveClass(
      "govuk-exit-this-page",
      "my-custom-class",
    );
  });

  test("sets i18n data attributes when translation props are provided", () => {
    const { container } = render(
      <ExitThisPage
        activatedText="Activated"
        timedOutText="Timed out"
        pressTwoMoreTimesText="Press 2 more"
        pressOneMoreTimeText="Press 1 more"
      />,
    );
    expect(container.firstChild).toHaveAttribute(
      "data-i18n.activated",
      "Activated",
    );
    expect(container.firstChild).toHaveAttribute(
      "data-i18n.timed-out",
      "Timed out",
    );
    expect(container.firstChild).toHaveAttribute(
      "data-i18n.press-two-more-times",
      "Press 2 more",
    );
    expect(container.firstChild).toHaveAttribute(
      "data-i18n.press-one-more-time",
      "Press 1 more",
    );
  });

  Object.values(examplesFromFixtures).forEach((example) => {
    test(`Test Fixture for ExitThisPage called "${example.name}"`, () => {
      render(<ExitThisPage {...example.options} />);
      expect(
        screen.getByRole("button", { name: /exit this page/i }),
      ).toBeInTheDocument();
    });
  });
});
