import { PageRendererProps } from "gatsby";
import React, { Component } from "react";
import i18n from "i18next";
import styled from "styled-components";

import Layout from "src/components/Layout";
import { colors } from "src/styles/colors";
import { storage } from "src/configs/cookieStorage";
import SEO from "src/components/SEO";
import PrivacyPolicyPage2022 from "src/components/page/PrivacyPolicyPage.20220325";

type Props = PageRendererProps;

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

class OldPrivacyPolicy20220325 extends Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <SEO />
        <PrivacyPolicyPage2022 />
      </React.Fragment>
    );
  }
}

export default OldPrivacyPolicy20220325;
