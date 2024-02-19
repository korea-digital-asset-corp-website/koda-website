import React from "react";
import styled from "styled-components";

import TypeformButton from "src/components/button/TypeformButton";
import PrimaryButton from "src/components/button/PrimaryButton";
import { typeformUri } from "src/utils/uri";

const Container = styled(TypeformButton)`
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 100;
`;

const ServiceButton = styled(PrimaryButton)`
  width: 100%;
  justify-content: center;
  min-height: 64px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 28px;
  padding-bottom: calc(env(safe-area-inset-bottom) + 20px);
`;

const FloatingButton = () => {
  return (
    <Container typeformUri={typeformUri}>
      <ServiceButton name={"문의하기"} />
    </Container>
  );
};

export default FloatingButton;
