# GOVUK React Components Library v1.0.1

We're excited to announce the first release of our GOVUK React Components Library! This library provides a collection of React components built based on the Government Digital Service (GDS) specifications, aimed at creating consistent and accessible user experiences for UK government digital services.

## Key Features:

1. **GDS Compliant Components**: Our library includes a set of React components that adhere to the [GDS Design System](https://design-system.service.gov.uk/) specifications, ensuring consistency with UK government digital services.

2. **Accessibility Focus**: All components are designed with accessibility in mind, following WCAG guidelines to ensure inclusive user experiences.

3. **Easy Integration**: Built on top of the [govuk-frontend](https://frontend.design-system.service.gov.uk/) library, our components can be easily integrated into existing React applications.

4. **TypeScript Support**: The library is written in TypeScript, providing strong typing and better developer experience.

5. **Storybook Integration**: Each component comes with Storybook stories, allowing developers to interact with and understand the components in isolation.

6. **Comprehensive Testing**: All components are thoroughly tested using Jest, ensuring reliability and stability.

7. **Customizable Styles**: While adhering to GDS design principles, components can be customized to fit specific project needs.

## Components Included in this Release:

- Accordion
- Boolean
- Breadcrumbs
- Button
- CharacterCount
- CheckBoxes
- CookieBanner
- DateInput
- Details
- ErrorMessage
- ErrorSummary
- Fieldset
- FileUpload
- Footer
- Header
- Hint
- Input
- InsetText
- Label
- NotificationBanner
- Pagination
- Panel
- PhaseBanner
- Radios
- Select
- ServiceNavigation
- SkipLink
- SummaryList
- Table
- Tabs
- Tag
- TaskList
- Textarea
- WarningText

There are Also Several components that can be used for error processing and other functionality like dashboard display:

- CardColumn
- CardLayout
- DataNavigation
- DifferenceNavigation
- ErrorBoundary
- Landing
- NotFoundPage
- PDFViewer
- PDFViewerCanvas
- ProblemWithService
- WarningInfo

There are also some useful components :

- ActionLink
- BackLink
- LinkWithRef
- Loading
- Main

## Getting Started:

To start using the GDS React Components Library in your project:

1. Install the package:

   ```
   npm install @hmlr/govuk-react-components-library
   ```

2. Import and use the components in your React application:

   ```jsx
   import { Panel } from "@hmlr/govuk-react-component-library";

   export default function SuccessPanel() {
     return (
       <Panel titleChildren="Application complete">
         Your reference number: HDJ2123F
       </Panel>
     );
   }
   ```

3. Refer to our comprehensive documentation for detailed usage instructions and examples for each component.

## Future Plans:

This library **May** be expanded with additional components and features in future releases. Feedback and contributions from the community are welcome to help improve and grow this project.

Thank you for choosing our GOVUK React Components Library. We hope it helps you build great, accessible government digital services more efficiently!
