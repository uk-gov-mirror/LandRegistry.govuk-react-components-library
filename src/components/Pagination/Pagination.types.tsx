export interface PaginationItemProps {
  /** Page number or label (e.g. 1, "one"). Omit when ellipsis is true. */
  number?: number | string;
  href?: string;
  current?: boolean;
  ellipsis?: boolean;
}

export interface PaginationNavProps {
  href: string;
  /** Override the default "Previous" / "Next" link text.
   *  Populated automatically from fixture `text` by ProcessExampleData (text → children). */
  children?: React.ReactNode;
  /** Secondary label rendered below the link title (block-layout mode). */
  labelText?: string;
}

export interface PaginationProps {
  previous?: PaginationNavProps;
  next?: PaginationNavProps;
  items?: PaginationItemProps[];
  className?: string;
}

// ---------------------------------------------------------------------------
// Sub-component prop types (internal)
// ---------------------------------------------------------------------------

export interface SvgIconProps {
  type: string;
}

export interface NavigationButtonProps {
  href: string;
  type: "next" | "previous";
  /** Overrides the default "Previous" / "Next" label (from fixture `text` → `children`). */
  children?: React.ReactNode;
  /** Optional secondary label shown beneath the link title. */
  labelText?: string;
}
