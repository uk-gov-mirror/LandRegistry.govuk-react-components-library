import { ExitThisPage, createAll } from "govuk-frontend";

export function ConfigureOverallExitThisPage($scope?: Document | Element) {
  createAll(ExitThisPage, {}, $scope);
}
