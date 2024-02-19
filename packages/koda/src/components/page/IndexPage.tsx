import React, { useState } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import Layout from "src/components/Layout";
import { colors } from "src/styles/colors";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import IntroSection from "src/components/section/IntroSection";
import PartnerSection from "src/components/section/PartnerSection";
import { media } from "src/utils/media";
import KodaModal from "src/components/modal/KodaModal";
import KBBankSection from "src/components/section/KBBankSection";
import ConsignmentSection from "src/components/section/ConsignmentSection";
import DealingSection from "src/components/section/DealingSection";
import ProceedingSection from "src/components/section/ProceedingSection";
import StructureSection from "src/components/section/StructureSection";
import QASection from "src/components/section/QASection";
import NewsSection from "src/components/section/NewsSection";
import ServiceADSection from "src/components/section/ServiceADSection";
import ISMSSection from "src/components/section/ISMSSection";
import NoticeModal from "src/components/modal/NoticeModal";
import { storage } from "src/configs/localStorage";

type Props = any;

const Container = styled(Layout)`
  background-color: ${colors.white};
  overflow: hidden;
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 1168px;
  margin: auto;
  align-items: center;
  background-color: ${colors.white};
`;

const ElementView = styled(Element)`
  display: flex;
  flex-direction: column;
`;

const IndexPage = (props: Props) => {
  const [isOpen, setOpen] = useState(storage().showFirstKodaPopup());

  const onClose = () => {
    setOpen(false);
  };

  const onDontShowPopup = () => {
    setOpen(false);
    storage().readFirstKodaPopup();
  };

  return (
    <React.Fragment>
      <Container id="outer-container">
        <Header />
        <Content id="page-box">
          <ElementView id="intro" name="intro">
            <IntroSection />
            <PartnerSection />
          </ElementView>
          <ElementView id="services" name="services">
            <ConsignmentSection />
            <ProceedingSection />
            <StructureSection />
            <ISMSSection />
          </ElementView>
          <ElementView id="qa" name="qa">
            <QASection />
          </ElementView>
          <ElementView id="news" name="news">
            <NewsSection />
          </ElementView>
          <ServiceADSection />
          <Footer />
        </Content>
      </Container>
      <NoticeModal isOpen={isOpen} onSubmit={onClose} />
    </React.Fragment>
  );
};

export default IndexPage;
