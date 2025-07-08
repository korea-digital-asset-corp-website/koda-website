import { PageRendererProps } from "gatsby";
import React, { Component } from "react";
import SEO from "src/components/SEO";
import PrivacyPolicyPage20250225 from "src/components/page/PrivacyPolicyPage.20250225";

type Props = PageRendererProps;

class PrivacyPolicy extends Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <SEO />
        <PrivacyPolicyPage20250225 />
      </React.Fragment>
    );
  }
}

export default PrivacyPolicy;
