import React from "react";
import { DifferenceNavigationProps } from "./DifferenceNavigation.types";
import { Button } from "../Button";
import { titleCase } from "../../utils/TitleCase";
import { Label } from "../Label";

const DifferenceNavigation: React.FC<DifferenceNavigationProps> = ({
  differenceId,
  setDifferenceFocus,
  totalDifferences,
  keyword = "variation",
  plural = "variations",
  buttonColour,
  buttonTextColour,
  buttonShadowColour,
  buttonHoverColour,
  buttonHoverTextColour,
}) => {
  if (totalDifferences === 0) {
    return (
      <p className="govuk-body govuk-!-font-size-20 govuk-!-text-align-centre">
        No {`${plural}`} found
      </p>
    );
  }

  // CSS custom properties set directly on each <button> element via Button's
  // ...attributes spread, so they sit on the same element that
  // .app-difference-navigation-button targets — no inheritance from a parent
  // div needed. Only written when a prop is explicitly provided.
  const inlineVars = {
    ...(buttonColour && { "--diff-nav-button-colour": buttonColour }),
    ...(buttonTextColour && {
      "--diff-nav-button-text-colour": buttonTextColour,
    }),
    ...(buttonShadowColour && {
      "--diff-nav-button-shadow-colour": buttonShadowColour,
    }),
    ...(buttonHoverColour && {
      "--diff-nav-button-hover-colour": buttonHoverColour,
    }),
    ...(buttonHoverTextColour && {
      "--diff-nav-button-hover-text-colour": buttonHoverTextColour,
    }),
  } as React.CSSProperties;

  const hasInlineVars = Object.keys(inlineVars).length > 0;

  const isPreviousDisabled = differenceId <= 1;
  const isNextDisabled = differenceId === totalDifferences;

  const renderButton = (
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
      className="app-difference-navigation-button"
      {...(hasInlineVars && { style: inlineVars })}
    >
      {content}
    </Button>
  );

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-third">
        <div className="govuk-!-text-align-left">
          {renderButton(
            `previous-${keyword}`,
            () => setDifferenceFocus(differenceId - 1),
            isPreviousDisabled,
            <>
              {" "}
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
              &nbsp;Previous{" "}
            </>,
          )}
        </div>
      </div>

      <div className="govuk-grid-column-one-third">
        <Label className="govuk-!-text-align-centre">
          {titleCase(keyword)} {differenceId} of {totalDifferences}
        </Label>
      </div>

      <div className="govuk-grid-column-one-third">
        <div className="govuk-!-text-align-right">
          {renderButton(
            `next-${keyword}`,
            () => setDifferenceFocus(differenceId + 1),
            isNextDisabled,
            <>
              {" "}
              Next
              <svg
                className="govuk-button__start-icon back-button"
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
    </div>
  );
};

export default DifferenceNavigation;
