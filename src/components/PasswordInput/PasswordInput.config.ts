import { PasswordInput, createAll } from "govuk-frontend";

export function ConfigureOverallPasswordInput($scope?: Document | Element) {
  createAll(PasswordInput, {}, $scope);
}
