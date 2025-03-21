import { PageRendererProps } from "gatsby";
import React, { Component } from "react";
import SEO from "src/components/SEO";
import PrivacyPolicyPage from "src/components/page/PrivacyPolicyPage";

type Props = PageRendererProps;

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
