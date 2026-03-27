import React from "react";
import "./CardColumn.scss";
import { Link } from "react-router";
import Card from "react-bootstrap/Card";
import { CardColumnProps } from "./CardColumn.types";

// The default colours come from the SCSS via govuk-functional-colour(), which
// resolves the govuk-frontend CSS custom properties (--govuk-colour-brand,
// --govuk-colour-header-background). We only need to set inline CSS variables
// here when the consumer explicitly overrides them via props.
const CardColumn: React.FC<CardColumnProps> = (props: CardColumnProps) => {
  const { body, header, link, textColor, hoverColor } = props;

  const inlineVars =
    textColor || hoverColor
      ? ({
          ...(textColor && { "--card-text-color": textColor }),
          ...(hoverColor && { "--card-hover-color": hoverColor }),
        } as React.CSSProperties)
      : undefined;

  return (
    <div className="col">
      <Card className="card-styles" style={inlineVars}>
        <Link to={link}>
          <Card.Header className="card-header govuk-!-font-size-27 govuk-!-font-weight-bold">
            {header}
          </Card.Header>
        </Link>
        <Card.Body className="govuk-!-font-size-19">{body}</Card.Body>
      </Card>
    </div>
  );
};

export default CardColumn;
