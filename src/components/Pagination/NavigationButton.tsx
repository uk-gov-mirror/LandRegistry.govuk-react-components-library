import React from "react";
import { NavigationButtonProps } from "./Pagination.types";
import { SvgIcon } from "./SvgIcon";

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  href,
  type,
  children,
  labelText,
}) => {
  const defaultText = type === "next" ? "Next" : "Previous";
  const typeClass = type === "next" ? "next" : "prev";
  const icon = (
    <SvgIcon
      type={type}
      className={`govuk-pagination__icon govuk-pagination__icon--${typeClass}`}
      focusable="false"
      aria-hidden="true"
    />
  );

  return (
    <a className="govuk-link govuk-pagination__link" href={href} rel={type}>
      {type === "previous" && icon}
      <span className="govuk-pagination__link-title">
        {children ?? defaultText}
        <span className="govuk-visually-hidden"> page</span>
      </span>
      {type === "next" && icon}
      {labelText && (
        <>
          <span className="govuk-visually-hidden">:</span>
          <span className="govuk-pagination__link-label">{labelText}</span>
        </>
      )}
    </a>
  );
};
