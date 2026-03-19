import React from "react";
import { DataNavigationProps } from "./DataNavigation.types";
import { Button } from "../Button";
import { Label } from "../Label";

const DataNavigation: React.FC<DataNavigationProps> = ({
  dataId,
  setDataFocus,
  previousText = "Previous",
  previousCondition,
  nextText = "Next",
  nextCondition,
  dataDescription,
  buttonColour,
  buttonTextColour,
  buttonShadowColour,
  buttonHoverColour,
  buttonHoverTextColour,
}) => {
  // CSS custom properties set directly on each <button> element via Button's
  // ...attributes spread, so they sit on the same element that
  // .app-data-navigation-button targets — no inheritance from a parent div needed.
  const inlineVars = {
    ...(buttonColour && { "--data-nav-button-colour": buttonColour }),
    ...(buttonTextColour && {
      "--data-nav-button-text-colour": buttonTextColour,
    }),
    ...(buttonShadowColour && {
      "--data-nav-button-shadow-colour": buttonShadowColour,
    }),
    ...(buttonHoverColour && {
      "--data-nav-button-hover-colour": buttonHoverColour,
    }),
    ...(buttonHoverTextColour && {
      "--data-nav-button-hover-text-colour": buttonHoverTextColour,
    }),
  } as React.CSSProperties;

  const hasInlineVars = Object.keys(inlineVars).length > 0;

  const renderNavButton = (
    id: string,
    onClick: () => void,
    disabled: boolean,
    content: React.ReactNode,
  ) => (
    <Button
      id={id}
      onClick={onClick}
      data-testid={id}
      disabled={disabled}
      className="app-data-navigation-button"
      {...(hasInlineVars && { style: inlineVars })}
    >
      {content}
    </Button>
  );

  return (
    <div className="govuk-grid-row">
      {/* Previous Button */}
      <div className="govuk-grid-column-one-third govuk-!-text-align-left">
        {renderNavButton(
          "previous-data",
          () => setDataFocus(dataId - 1),
          previousCondition,
          <>
            <svg
              className="govuk-button__start-icon back-button"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              transform="rotate(180)"
            >
              <path
                fill="currentColor"
                d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"
              />
            </svg>
            &nbsp;{previousText}
          </>,
        )}
      </div>

      {/* Data Description Label */}
      <div className="govuk-grid-column-one-third govuk-!-text-align-centre">
        <Label>{dataDescription}</Label>
      </div>

      {/* Next Button */}
      <div className="govuk-grid-column-one-third govuk-!-text-align-right">
        {renderNavButton(
          "next-data",
          () => setDataFocus(dataId + 1),
          nextCondition,
          <>
            {nextText}
            <svg
              className="govuk-button__start-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"
              />
            </svg>
          </>,
        )}
      </div>
    </div>
  );
};

export default DataNavigation;
