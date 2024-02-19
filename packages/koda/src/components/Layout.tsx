import React, { PureComponent } from "react";
import styled from "styled-components";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const Container = styled.div``;

class Layout extends PureComponent<Props> {
  public render() {
    const { id, className, children } = this.props;
    return (
      <Container id={id} className={className}>
        {children}
      </Container>
    );
  }
}

export default Layout;
