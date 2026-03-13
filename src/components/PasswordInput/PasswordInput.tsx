import React, { JSX, Ref } from "react";
import Label from "../Label/Label";
import Hint from "../Hint/Hint";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { PasswordInputProps } from "./PasswordInput.types";

const PasswordInput: React.FC<
  PasswordInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = React.forwardRef(
  (props: PasswordInputProps, ref: Ref<HTMLInputElement>) => {
    const {
      className,
      "aria-describedby": describedBy,
      errorMessage,
      formGroup,
      hint,
      label,
      name,
      id,
      autoComplete = "current-password",
      showPasswordText = "Show",
      hidePasswordText = "Hide",
      showPasswordAriaLabelText = "Show password",
      hidePasswordAriaLabelText = "Hide password",
      passwordShownAnnouncementText,
      passwordHiddenAnnouncementText,
      ...attributes
    } = props;

    let describedByValue: string = describedBy || "";
    let hintComponent: JSX.Element | null = null;
    let errorMessageComponent: JSX.Element | null = null;

    if (hint) {
      const hintId = `${id}-hint`;
      describedByValue += ` ${hintId}`;
      hintComponent = <Hint {...hint} id={hintId} />;
    }

    if (errorMessage) {
      const errorId = id ? `${id}-error` : "";
      describedByValue += ` ${errorId}`;
      errorMessageComponent = <ErrorMessage {...errorMessage} id={errorId} />;
    }

    // Build i18n data attributes for the govuk-frontend JS module
    const i18nProps: Record<string, string> = {};
    if (showPasswordText)
      i18nProps["data-i18n.show-password"] = showPasswordText;
    if (hidePasswordText)
      i18nProps["data-i18n.hide-password"] = hidePasswordText;
    if (showPasswordAriaLabelText)
      i18nProps["data-i18n.show-password-aria-label"] =
        showPasswordAriaLabelText;
    if (hidePasswordAriaLabelText)
      i18nProps["data-i18n.hide-password-aria-label"] =
        hidePasswordAriaLabelText;
    if (passwordShownAnnouncementText)
      i18nProps["data-i18n.password-shown-announcement"] =
        passwordShownAnnouncementText;
    if (passwordHiddenAnnouncementText)
      i18nProps["data-i18n.password-hidden-announcement"] =
        passwordHiddenAnnouncementText;

    // Label handles isPageHeading internally — no extra wrapper needed here
    const labelEl = <Label {...label} htmlFor={id} />;

    return (
      <div
        className={`govuk-form-group${formGroup?.className ? ` ${formGroup.className}` : ""}${errorMessage ? " govuk-form-group--error" : ""} govuk-password-input`}
        data-module="govuk-password-input"
        {...i18nProps}
      >
        {labelEl}
        {hintComponent}
        {errorMessageComponent}
        <div className="govuk-input__wrapper govuk-password-input__wrapper">
          <input
            ref={ref}
            id={id}
            className={`govuk-input govuk-password-input__input govuk-js-password-input-input${className ? ` ${className}` : ""}${errorMessage ? " govuk-input--error" : ""}`}
            name={name || id}
            type="password"
            spellCheck={false}
            autoComplete={autoComplete}
            autoCapitalize="none"
            aria-describedby={describedByValue.trim() || undefined}
            {...attributes}
          />
          {/* The toggle button is hidden by default; govuk-frontend JS manages its visibility */}
          <button
            type="button"
            className="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle"
            data-module="govuk-button"
            aria-controls={id}
            aria-label={showPasswordAriaLabelText}
            hidden
          >
            {showPasswordText}
          </button>
        </div>
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
