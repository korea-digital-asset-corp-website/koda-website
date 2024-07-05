import { PageRendererProps } from "gatsby";
import React, { Component } from "react";

import SEO from "src/components/SEO";
import EthicalManagementPage from "src/components/page/EthicalManagementPage";

type Props = PageRendererProps;

class EthicalManagement extends Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <SEO />
        <EthicalManagementPage />
      </React.Fragment>
    );
  }
}

export default EthicalManagement;
