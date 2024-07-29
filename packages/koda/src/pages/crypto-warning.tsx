import { PageRendererProps } from "gatsby";
import React, { Component } from "react";

import SEO from "src/components/SEO";
import CryptoWarningPage from "src/components/page/CryptoWarningPage";

type Props = PageRendererProps;

class CryptoWarning extends Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <SEO />
        <CryptoWarningPage />
      </React.Fragment>
    );
  }
}

export default CryptoWarning;
