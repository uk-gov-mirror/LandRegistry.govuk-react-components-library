// src/components/Header/Header.config.tsx
export async function ConfigureOverallHeader($scope?: Document | Element) {
  const govukFrontend = await import("govuk-frontend");

  if ("Header" in govukFrontend) {
    const { createAll } = govukFrontend;
    const { Header } = govukFrontend as typeof govukFrontend & {
      Header: new (...args: unknown[]) => unknown;
    };
    createAll(Header, undefined, $scope);
  } else {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "ConfigureOverallHeader is a no-op in govuk-frontend v5+. " +
          "The Header menu toggle no longer requires JavaScript initialisation. " +
          "This call can be safely removed.",
      );
    }
  }
}
