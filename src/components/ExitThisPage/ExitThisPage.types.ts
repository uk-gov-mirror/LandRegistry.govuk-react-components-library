import { HTMLAttributes, ReactNode } from "react";

export interface ExitThisPageProps extends HTMLAttributes<HTMLDivElement> {
  /** Button label — defaults to "Exit this page". Maps from fixture `text`/`html` via processExampleData → children */
  children?: ReactNode;
  /** Additional CSS classes for the wrapper div. Maps from fixture `classes` → className */
  className?: string;
  /** URL the button links to. Defaults to "https://www.bbc.co.uk/weather" */
  redirectUrl?: string;
  /** i18n: text announced when the page exit is activated */
  activatedText?: string;
  /** i18n: text announced when the keyboard shortcut times out */
  timedOutText?: string;
  /** i18n: text announced when the shortcut still needs two more presses */
  pressTwoMoreTimesText?: string;
  /** i18n: text announced when the shortcut needs one more press */
  pressOneMoreTimeText?: string;
}
