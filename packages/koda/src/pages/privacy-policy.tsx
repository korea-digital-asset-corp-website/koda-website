import { PageRendererProps } from "gatsby";
import React, { Component } from "react";
import styled from "styled-components";

import Layout from "src/components/Layout";
import { colors } from "src/styles/colors";
import SEO from "src/components/SEO";
import PrivacyPolicyPage from "src/components/page/PrivacyPolicyPage";

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

class PrivacyPolicy extends Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <SEO />
        <PrivacyPolicyPage />
      </React.Fragment>
    );
  }
}

export default PrivacyPolicy;
