export interface PDFViewerCanvasProps {
  src: string;
  className?: string;
  documentName?: string;
  pageNumber?: number;
  showNavigation?: boolean;
  /**
   * Background colour of the navigation buttons in their resting state.
   * Passed directly to DifferenceNavigation.
   * Defaults to govuk-functional-colour("brand") (#1d70b8).
   */
  buttonColour?: string;
  /**
   * Text colour of the navigation buttons in their resting state.
   * Passed directly to DifferenceNavigation.
   * Defaults to govuk-colour("white") (#ffffff).
   */
  buttonTextColour?: string;
  /**
   * Shadow colour of the navigation buttons.
   * Passed directly to DifferenceNavigation.
   * Defaults to govuk-colour("black") (#0b0c0c).
   */
  buttonShadowColour?: string;
  /**
   * Background colour of the navigation buttons on hover.
   * Passed directly to DifferenceNavigation.
   * Defaults to govuk-functional-colour("focus") (#ffdd00).
   */
  buttonHoverColour?: string;
  /**
   * Text colour of the navigation buttons on hover.
   * Passed directly to DifferenceNavigation.
   * Defaults to govuk-functional-colour("focus-text") (#0b0c0c).
   */
  buttonHoverTextColour?: string;
  [key: string]: unknown;
}
