// src/utils/WithReference.types.tsx
import React from "react";

type RefAcceptingComponent = React.ComponentType<
  Record<string, unknown> & { ref?: React.Ref<HTMLElement> }
>;

export interface WithRefProps {
  Component: RefAcceptingComponent;
  items?: unknown[];
  [key: string]: unknown;
}

export interface InfoSectionProps {
  refName: string;
  Component: RefAcceptingComponent;
  restProps: Record<string, unknown>;
}
