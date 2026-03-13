import { PasswordInput, createAll } from "govuk-frontend";

export function ConfigurePasswordInput($scope?: Document | Element) {
  createAll(PasswordInput, {}, $scope);
}
