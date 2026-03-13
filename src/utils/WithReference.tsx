import React, { useEffect, useRef, FC, createRef, useMemo } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { InfoSectionProps, WithRefProps } from "./WithReference.types";

// Component to handle refs for a single element
const WithRef: FC<WithRefProps> = ({ Component, ...restProps }) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      console.log("DOM Ref: ", ref.current);
    }
  }, []);

  // React 19: ref is a regular prop — no forwardRef wrapper needed
  return (
    <>
      <Component {...restProps} ref={ref} />
      <InfoSection refName="ref" Component={Component} restProps={restProps} />
    </>
  );
};

// Component to handle refs for multiple elements
const WithItemRefs: FC<WithRefProps> = ({ Component, ...restProps }) => {
  const refs = useMemo<React.RefObject<HTMLElement | null>[]>(
    () => restProps?.items?.map(() => createRef<HTMLElement>()) ?? [],
    [restProps.items],
  );

  useEffect(() => {
    refs.forEach((ref, index) => {
      if (ref.current) {
        console.log(`DOM Ref for item ${index + 1}: `, ref.current);
      }
    });
  }, [refs]);

  const modifiedProps = {
    ...restProps,
    items: restProps?.items?.map((item: unknown, index: number) => ({
      ...(item as object),
      ref: refs[index],
    })),
  };

  return (
    <>
      <Component {...modifiedProps} />
      <p className="govuk-body">
        Each individual item now has a <code>ref</code> which references the DOM
        element. Check devtools for details.
      </p>
    </>
  );
};

// Reusable section to display ref usage instructions
const InfoSection: FC<InfoSectionProps> = ({
  refName,
  Component,
  restProps,
}) => {
  const jsxString = reactElementToJSXString(
    <Component {...restProps} refName="exampleRef" />,
  ).replace('refName="exampleRef"', `ref={${refName}}`);

  return (
    <>
      <p className="govuk-body">
        To access the DOM element, assign a <code>{refName}</code> prop. Check{" "}
        <a href="https://react.dev/reference/react/forwardRef">React Docs</a>{" "}
        for more details.
      </p>
      <code>
        <pre>
          {`const ${refName} = useRef();`}
          <br />
          {jsxString}
        </pre>
      </code>
      <p className="govuk-body">
        The ref will contain the DOM element. In simple cases like the{" "}
        <code>Button</code> component, the top-level element will be referenced.
        More complex components may have different behavior.
      </p>
    </>
  );
};

export { WithRef, WithItemRefs };
