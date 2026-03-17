import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { expect, describe, test, afterEach } from "@jest/globals";
import Pagination from "./Pagination";
import { PaginationItemProps } from "./Pagination.types";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

/** Builds a sequential items array for pages 1..n with the given page current. */
function makeItems(
  totalPages: number,
  currentPage: number,
): PaginationItemProps[] {
  return Array.from({ length: totalPages }, (_, i) => ({
    number: i + 1,
    href: `/page/${i + 1}`,
    current: i + 1 === currentPage,
  }));
}

// const SIX_PAGE_ITEMS = makeItems(6, 1); // overridden per test below

describe("Pagination component", () => {
  afterEach(() => {
    cleanup();
  });

  // -------------------------------------------------------------------------
  // Rendering — first / middle / last page
  // -------------------------------------------------------------------------

  test("renders all page links on the first page with no previous link", () => {
    render(<Pagination next={{ href: "/page/2" }} items={makeItems(6, 1)} />);

    // All six page links present
    [1, 2, 3, 4, 5, 6].forEach((n) =>
      expect(
        screen.getByRole("link", { name: `Page ${n}` }),
      ).toBeInTheDocument(),
    );

    // Next link present, previous absent
    expect(screen.getByRole("link", { name: /next/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /previous/i })).toBeNull();
  });

  test("renders all page links on a middle page with both previous and next links", () => {
    render(
      <Pagination
        previous={{ href: "/page/2" }}
        next={{ href: "/page/4" }}
        items={makeItems(6, 3)}
      />,
    );

    [1, 2, 3, 4, 5, 6].forEach((n) =>
      expect(
        screen.getByRole("link", { name: `Page ${n}` }),
      ).toBeInTheDocument(),
    );

    expect(screen.getByRole("link", { name: /previous/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /next/i })).toBeInTheDocument();
  });

  test("renders all page links on the last page with no next link", () => {
    render(
      <Pagination previous={{ href: "/page/5" }} items={makeItems(6, 6)} />,
    );

    [1, 2, 3, 4, 5, 6].forEach((n) =>
      expect(
        screen.getByRole("link", { name: `Page ${n}` }),
      ).toBeInTheDocument(),
    );

    expect(screen.getByRole("link", { name: /previous/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /next/i })).toBeNull();
  });

  test("renders nothing when no props are provided", () => {
    const { container } = render(<Pagination />);
    expect(container.firstChild).toBeNull();
  });

  // -------------------------------------------------------------------------
  // Navigation hrefs
  // -------------------------------------------------------------------------

  test("previous link points to the correct href", () => {
    render(
      <Pagination
        previous={{ href: "/page/2" }}
        next={{ href: "/page/4" }}
        items={makeItems(6, 3)}
      />,
    );

    expect(screen.getByRole("link", { name: /previous/i })).toHaveAttribute(
      "href",
      "/page/2",
    );
  });

  test("next link points to the correct href", () => {
    render(
      <Pagination
        previous={{ href: "/page/2" }}
        next={{ href: "/page/4" }}
        items={makeItems(6, 3)}
      />,
    );

    expect(screen.getByRole("link", { name: /next/i })).toHaveAttribute(
      "href",
      "/page/4",
    );
  });

  test("page item links point to the correct hrefs", () => {
    render(<Pagination next={{ href: "/page/2" }} items={makeItems(3, 1)} />);

    [1, 2, 3].forEach((n) =>
      expect(screen.getByRole("link", { name: `Page ${n}` })).toHaveAttribute(
        "href",
        `/page/${n}`,
      ),
    );
  });

  // -------------------------------------------------------------------------
  // Current page
  // -------------------------------------------------------------------------

  test("marks the current page item with aria-current=page", () => {
    render(
      <Pagination
        previous={{ href: "/page/1" }}
        next={{ href: "/page/3" }}
        items={makeItems(3, 2)}
      />,
    );

    expect(screen.getByRole("link", { name: "Page 2" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "Page 1" })).not.toHaveAttribute(
      "aria-current",
    );
  });

  // -------------------------------------------------------------------------
  // Ellipsis
  // -------------------------------------------------------------------------

  test("renders ellipsis items", () => {
    render(
      <Pagination
        previous={{ href: "/page/9" }}
        next={{ href: "/page/11" }}
        items={[
          { number: 1, href: "/page/1" },
          { ellipsis: true },
          { number: 9, href: "/page/9" },
          { number: 10, href: "/page/10", current: true },
          { number: 11, href: "/page/11" },
          { ellipsis: true },
          { number: 40, href: "/page/40" },
        ]}
      />,
    );

    expect(screen.getAllByText("...")).toHaveLength(2);
  });

  // -------------------------------------------------------------------------
  // Custom previous / next text (children)
  // -------------------------------------------------------------------------

  test("renders custom previous text via previous.children", () => {
    render(
      <Pagination
        previous={{ href: "/page/2", children: "Back" }}
        next={{ href: "/page/4" }}
        items={makeItems(6, 3)}
      />,
    );

    expect(screen.getByRole("link", { name: /back/i })).toBeInTheDocument();
  });

  test("renders custom next text via next.children", () => {
    render(
      <Pagination
        previous={{ href: "/page/2" }}
        next={{ href: "/page/4", children: "Forward" }}
        items={makeItems(6, 3)}
      />,
    );

    expect(screen.getByRole("link", { name: /forward/i })).toBeInTheDocument();
  });

  // -------------------------------------------------------------------------
  // Label text (block layout)
  // -------------------------------------------------------------------------

  test("renders previous labelText", () => {
    render(
      <Pagination
        previous={{
          href: "/page/1",
          labelText: "Applying for a provisional lorry or bus licence",
        }}
        next={{ href: "/page/3" }}
      />,
    );

    expect(
      screen.getByText("Applying for a provisional lorry or bus licence"),
    ).toBeInTheDocument();
  });

  test("renders next labelText", () => {
    render(
      <Pagination
        previous={{ href: "/page/1" }}
        next={{
          href: "/page/3",
          labelText: "Driver CPC part 1 test: theory",
        }}
      />,
    );

    expect(
      screen.getByText("Driver CPC part 1 test: theory"),
    ).toBeInTheDocument();
  });

  // -------------------------------------------------------------------------
  // Block layout
  // -------------------------------------------------------------------------

  test("applies govuk-pagination--block when no items are passed", () => {
    render(
      <Pagination previous={{ href: "/page/1" }} next={{ href: "/page/3" }} />,
    );

    expect(screen.getByRole("navigation")).toHaveClass(
      "govuk-pagination--block",
    );
  });

  test("does not apply govuk-pagination--block when items are present", () => {
    render(
      <Pagination
        previous={{ href: "/page/1" }}
        next={{ href: "/page/3" }}
        items={makeItems(3, 2)}
      />,
    );

    expect(screen.getByRole("navigation")).not.toHaveClass(
      "govuk-pagination--block",
    );
  });

  // -------------------------------------------------------------------------
  // Accessibility
  // -------------------------------------------------------------------------

  test("navigation landmark has accessible label", () => {
    render(<Pagination next={{ href: "/page/2" }} items={makeItems(3, 1)} />);

    expect(
      screen.getByRole("navigation", { name: /pagination/i }),
    ).toBeInTheDocument();
  });

  test("renders visually hidden page text inside prev and next links", () => {
    render(
      <Pagination
        previous={{ href: "/page/1" }}
        next={{ href: "/page/3" }}
        items={makeItems(3, 2)}
      />,
    );

    const hiddenSpans = screen
      .getAllByText("page")
      .filter((el) => el.classList.contains("govuk-visually-hidden"));

    // One inside the previous link, one inside the next link
    expect(hiddenSpans).toHaveLength(2);
  });

  test("renders correct number of page list items", () => {
    render(<Pagination next={{ href: "/page/2" }} items={makeItems(5, 1)} />);

    expect(screen.getAllByRole("listitem")).toHaveLength(5);
  });
});
