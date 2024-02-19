import { PageRendererProps } from "gatsby";
import React, { Component } from "react";
import i18n from "i18next";

import IndexPage from "src/components/page/IndexPage";
import { storage } from "src/configs/cookieStorage";
import SEO from "src/components/SEO";

type Props = PageRendererProps;

class HomePage extends Component<Props> {
  public componentDidMount() {
    i18n.changeLanguage("en");
    storage().saveLanguage("en");
  }

  public render() {
    return (
      <React.Fragment>
        <SEO />
        <IndexPage {...this.props} />
      </React.Fragment>
    );
  }
}

export default HomePage;
