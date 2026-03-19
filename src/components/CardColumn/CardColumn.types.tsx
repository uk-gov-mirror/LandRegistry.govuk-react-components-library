export interface CardColumnProps {
  link: string;
  header: string;
  body: string;
  /**
   * Text colour of the card header in its resting state.
   *
   * Defaults to the GOV.UK brand colour via the CSS custom property set by
   * govuk-functional-colour("brand") in the SCSS — so if you've overridden
   * $govuk-functional-colours at the Sass level, this default will follow.
   *
   * Pass an explicit value only when you need a per-instance override that
   * sits outside the govuk-frontend theming system.
   */
  textColor?: string;
  /**
   * Background colour applied to the card header on hover.
   *
   * Defaults to the GOV.UK header background colour via the CSS custom
   * property set by govuk-functional-colour("header-background") in the SCSS.
   *
   * Pass an explicit value only when you need a per-instance override.
   */
  hoverColor?: string;
}
