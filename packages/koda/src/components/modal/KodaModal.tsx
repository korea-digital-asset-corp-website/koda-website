import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import images from "src/images";
import { media, desktopWidth, mobileWidth } from "src/utils/media";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const Container = styled(Modal)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Inner = styled.div`
  position: relative;
  width: 1100px;
  ${media.mobile`
    width: 320px;
  `}
`;

const Content = styled.img`
  width: 100%;
`;

const CloseButtonView = styled.div`
  position: absolute;
  top: 46px;
  right: 46px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
  ${media.mobile`
    top: 26px;
    right: 26px;
    width: 20px;
    height: 20px;
  `}
`;

const SubmitButtonView = styled.div`
  position: absolute;
  bottom: 125px;
  left: 33px;
  width: 370px;
  height: 60px;
  background-color: transparent;
  cursor: pointer;
  ${media.mobile`
    bottom: 75px;
    left: 20px;
    width: 280px;
    height: 40px;
  `}
`;

const customStyles: any = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.40)",
    zIndex: 10,
  },
  content: {
    outline: 0,
  },
};

const KodaModal = (props: Props) => {
  const { isOpen, onClose, onSubmit } = props;

  return (
    <React.Fragment>
      <Container
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onClose}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "unset")}
      >
        <MediaQuery minWidth={desktopWidth}>
          <Inner>
            <Content alt={"kodaA"} src={images.kodaA} />
            <SubmitButtonView onClick={onSubmit} />
            <CloseButtonView onClick={onClose} />
          </Inner>
        </MediaQuery>
        <MediaQuery maxWidth={mobileWidth}>
          <Inner>
            <Content alt={"mobileKodaA"} src={images.mobileKodaA} />
            <SubmitButtonView onClick={onSubmit} />
            <CloseButtonView onClick={onClose} />
          </Inner>
        </MediaQuery>
      </Container>
    </React.Fragment>
  );
};

export default KodaModal;
