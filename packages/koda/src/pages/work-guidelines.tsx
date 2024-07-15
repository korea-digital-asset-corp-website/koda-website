import { PageRendererProps } from "gatsby";
import React, { Component } from "react";

import SEO from "src/components/SEO";
import WorkGuidelinesPage from "src/components/page/WorkGuidelinesPage";

type Props = PageRendererProps;

class WorkGuidelines extends Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <SEO />
        <WorkGuidelinesPage />
      </React.Fragment>
    );
  }
}

export default WorkGuidelines;
