import React from "react";
import Collapsible, { CollapsibleProps } from "react-collapsible";

type Props = CollapsibleProps & { children: React.ReactNode };

const Accordion = (props: Props) => {
  const { children, ...rest } = props;
  return <Collapsible {...rest}>{children}</Collapsible>;
};

export default Accordion;
