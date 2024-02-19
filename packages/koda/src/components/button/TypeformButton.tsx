import React, { useCallback } from "react";
import * as typeformEmbed from "@typeform/embed";
import styled from "styled-components";

type Props = {
  className?: string;
  typeformUri: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Container = styled.div``;

const TypeformButton = (props: Props) => {
  const { className, children, typeformUri, onClick } = props;
  const onTypeformClick = useCallback(() => {
    const typeformInstance = typeformEmbed.makePopup(typeformUri, {
      autoClose: 1000,
      hideFooter: true,
      hideHeaders: true,
      mode: "drawer_right",
    });
    typeformInstance.open();
    onClick?.();
  }, [typeformUri, onClick]);

  return (
    <Container className={className} onClick={onTypeformClick}>
      {children}
    </Container>
  );
};

export default TypeformButton;
