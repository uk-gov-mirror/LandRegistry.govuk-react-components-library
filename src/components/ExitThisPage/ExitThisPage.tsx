import React from "react";
import { ExitThisPageProps } from "./ExitThisPage.types";

const ExitThisPage: React.FC<ExitThisPageProps> = ({
  children = "Exit this page",
  className,
  redirectUrl = "https://www.bbc.co.uk/weather",
  activatedText,
  timedOutText,
  pressTwoMoreTimesText,
  pressOneMoreTimeText,
  ...attributes
}) => {
  const i18nProps: Record<string, string> = {};
  if (activatedText) i18nProps["data-i18n.activated"] = activatedText;
  if (timedOutText) i18nProps["data-i18n.timed-out"] = timedOutText;
  if (pressTwoMoreTimesText)
    i18nProps["data-i18n.press-two-more-times"] = pressTwoMoreTimesText;
  if (pressOneMoreTimeText)
    i18nProps["data-i18n.press-one-more-time"] = pressOneMoreTimeText;

  return (
    <div
      {...attributes}
      {...i18nProps}
      className={`govuk-exit-this-page${className ? ` ${className}` : ""}`}
      data-module="govuk-exit-this-page"
    >
      <a
        href={redirectUrl}
        role="button"
        draggable={false}
        className="govuk-button govuk-button--warning govuk-exit-this-page__button govuk-js-exit-this-page-button"
        data-module="govuk-button"
        rel="nofollow noreferrer"
      >
        <span className="govuk-visually-hidden">Emergency</span> {children}
      </a>
    </div>
  );
};

ExitThisPage.displayName = "ExitThisPage";

export default ExitThisPage;
