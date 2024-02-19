import { PageRendererProps } from "gatsby";
import React, { Component } from "react";
import i18n from "i18next";
import styled from "styled-components";

import Layout from "src/components/Layout";
import { colors } from "src/styles/colors";
import { storage } from "src/configs/cookieStorage";
import SEO from "src/components/SEO";
import PrivacyPolicyPageOld from "src/components/page/PrivacyPolicyPage.20210101";

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

class OldPrivacyPolicy20210101 extends Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <SEO />
        <PrivacyPolicyPageOld />
      </React.Fragment>
    );
  }
}

export default OldPrivacyPolicy20210101;
