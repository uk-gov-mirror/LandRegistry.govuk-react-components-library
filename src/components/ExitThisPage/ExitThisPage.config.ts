import { ExitThisPage, createAll } from "govuk-frontend";

export function ConfigureExitThisPage($scope?: Document | Element) {
  createAll(ExitThisPage, {}, $scope);
}
