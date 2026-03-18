// src/types/govuk-frontend.d.ts

declare module "govuk-frontend/dist/govuk/components/accordion/accordion" {
  export interface AccordionTranslations {
    hideAllSections?: string;
    hideSection?: string;
    hideSectionAriaLabel?: string;
    showAllSections?: string;
    showSection?: string;
    showSectionAriaLabel?: string;
  }
  export interface AccordionConfig {
    i18n?: AccordionTranslations;
    rememberExpanded?: boolean;
  }
}
declare module "govuk-frontend/dist/govuk/components/button/button" {
  export interface ButtonConfig {
    preventDoubleClick?: boolean;
  }
}
declare module "govuk-frontend/dist/govuk/components/character-count/character-count" {
  export interface CharacterCountConfig {
    threshold?: number;
  }
}
declare module "govuk-frontend/dist/govuk/components/error-summary/error-summary" {
  export interface ErrorSummaryConfig {
    disableAutoFocus?: boolean;
  }
}
declare module "govuk-frontend/dist/govuk/components/notification-banner/notification-banner" {
  export interface NotificationBannerConfig {
    disableAutoFocus?: boolean;
  }
}
