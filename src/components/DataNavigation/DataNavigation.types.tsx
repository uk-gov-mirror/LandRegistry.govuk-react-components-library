export interface DataNavigationProps {
  dataId: number;
  setDataFocus: (id: number) => void;
  previousText?: string;
  previousCondition: boolean;
  nextText?: string;
  nextCondition: boolean;
  dataDescription?: string;
  /**
   * Background colour of the navigation buttons in their resting state.
   * Defaults to govuk-functional-colour("brand") (#1d70b8).
   */
  buttonColour?: string;
  /**
   * Text colour of the navigation buttons in their resting state.
   * Defaults to govuk-colour("white") (#ffffff).
   */
  buttonTextColour?: string;
  /**
   * Shadow colour of the navigation buttons.
   * Defaults to govuk-colour("black") (#0b0c0c).
   */
  buttonShadowColour?: string;
  /**
   * Background colour of the navigation buttons on hover.
   * Defaults to govuk-functional-colour("focus") (#ffdd00).
   */
  buttonHoverColour?: string;
  /**
   * Text colour of the navigation buttons on hover.
   * Defaults to govuk-functional-colour("focus-text") (#0b0c0c).
   */
  buttonHoverTextColour?: string;
}
