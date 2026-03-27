import React from "react";
import CardColumn from "./CardColumn";
import { expect, describe, test, afterEach } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";

afterEach(() => {
  cleanup();
});

describe("Card Column component", () => {
  test("displays header and body", () => {
    render(
      <BrowserRouter>
        <CardColumn link={"/test-link"} header="Test header" body="Test body" />
      </BrowserRouter>,
    );
    expect(screen.getByText("Test header")).toBeTruthy();
    expect(screen.getByText("Test body")).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Test header" }).getAttribute("href"),
    ).toContain("/test-link");
  });

  test("includes given link", () => {
    render(
      <BrowserRouter>
        <CardColumn link={"/test-link"} header="Test header" body="Test body" />
      </BrowserRouter>,
    );
    expect(screen.getByRole("link").getAttribute("href")).toContain(
      "/test-link",
    );
  });

  test("does not set colour CSS custom properties when textColor and hoverColor are omitted", () => {
    render(
      <BrowserRouter>
        <CardColumn link={"/test-link"} header="Test header" body="Test body" />
      </BrowserRouter>,
    );
    // When no colour props are passed the card element should have no inline
    // style attribute — colours come entirely from the SCSS govuk-frontend helpers.
    const card = screen.getByText("Test header").closest(".card");
    expect(card?.getAttribute("style")).toBeNull();
  });

  test("sets --card-text-color custom property when textColor prop is provided", () => {
    render(
      <BrowserRouter>
        <CardColumn
          link={"/test-link"}
          header="Test header"
          body="Test body"
          textColor="#005ea5"
        />
      </BrowserRouter>,
    );
    const card = screen.getByText("Test header").closest(".card");
    expect(card?.getAttribute("style")).toContain("--card-text-color: #005ea5");
  });

  test("sets --card-hover-color custom property when hoverColor prop is provided", () => {
    render(
      <BrowserRouter>
        <CardColumn
          link={"/test-link"}
          header="Test header"
          body="Test body"
          hoverColor="#005ea5"
        />
      </BrowserRouter>,
    );
    const card = screen.getByText("Test header").closest(".card");
    expect(card?.getAttribute("style")).toContain(
      "--card-hover-color: #005ea5",
    );
  });

  test("sets both CSS custom properties when both colour props are provided", () => {
    render(
      <BrowserRouter>
        <CardColumn
          link={"/test-link"}
          header="Test header"
          body="Test body"
          textColor="#4c2c92"
          hoverColor="#4c2c92"
        />
      </BrowserRouter>,
    );
    const card = screen.getByText("Test header").closest(".card");
    expect(card?.getAttribute("style")).toContain("--card-text-color: #4c2c92");
    expect(card?.getAttribute("style")).toContain(
      "--card-hover-color: #4c2c92",
    );
  });
});
