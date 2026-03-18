export interface PasswordInputLabelProps {
  children?: React.ReactNode;
  className?: string;
  isPageHeading?: boolean;
  [key: string]: unknown;
}

export interface PasswordInputProps {
  /** Additional CSS classes for the `<input>` element. Maps from fixture `classes` → className */
  className?: string;
  /** Pre-existing aria-describedby value to prepend */
  "aria-describedby"?: string;
  /** Error message sub-object — `{ children }` after processExampleData transforms `text` */
  errorMessage?: { children?: React.ReactNode; [key: string]: unknown };
  /** Wrapper div options */
  formGroup?: { className?: string; [key: string]: unknown };
  /** Hint sub-object — `{ children }` after processExampleData transforms `text` */
  hint?: { children?: React.ReactNode; [key: string]: unknown };
  /** Label sub-object — `{ children, className, isPageHeading }` */
  label?: PasswordInputLabelProps;
  /** Input name attribute */
  name?: string;
  /** Input id attribute — also used to link label and aria-describedby */
  id?: string;
  /** autocomplete attribute — defaults to "current-password" */
  autoComplete?: string;
  /** i18n: label for the show-password button (default: "Show") */
  showPasswordText?: string;
  /** i18n: label for the hide-password button (default: "Hide") */
  hidePasswordText?: string;
  /** i18n: aria-label for the show-password button */
  showPasswordAriaLabelText?: string;
  /** i18n: aria-label for the hide-password button */
  hidePasswordAriaLabelText?: string;
  /** i18n: text announced when the password becomes visible */
  passwordShownAnnouncementText?: string;
  /** i18n: text announced when the password is hidden */
  passwordHiddenAnnouncementText?: string;
  /** Allow pass-through of any other HTML input attributes */
  [key: string]: unknown;
}
