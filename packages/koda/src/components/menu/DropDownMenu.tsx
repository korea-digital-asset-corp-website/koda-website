import { navigate } from "gatsby";
import _ from "lodash";
import React, { PureComponent } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Link } from "react-scroll";
import styled from "styled-components";

import { Body1, Body1Bold } from "src/components/Typography";
import zIndex from "src/styles/zIndexes";
import { CategoryType, ActionType } from "src/configs/analytics";
import TypeformButton from "src/components/button/TypeformButton";
import { typeformUri } from "src/utils/uri";

type Props = {
  className?: string;
  onMenuClick: (action: ActionType) => void;
} & WithTranslation;

const Container = styled.div`
  position: fixed;
  top: 56px;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  z-index: ${zIndex.ten};
`;

const Inner = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-right: 0px;
  padding-bottom: 0px;
`;

const MenuItem = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 4px;
`;

const MenuTitle = styled(Body1Bold)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 46px;
  padding-left: 20px;
  padding-right: 20px;
  color: #3a4044;
  transition: all 0.15s linear 0s;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const MenuTypeformItem = styled(TypeformButton)`
  margin-bottom: 10px;
`;

class DropDownMenu extends PureComponent<Props> {
  public render() {
    const { className, onMenuClick, t } = this.props;

    return (
      <Container className={className}>
        <Inner>
          <MenuItem
            activeClass="active-dropdown-menu-item"
            to="intro"
            smooth={true}
            spy={true}
            hashSpy={true}
            isDynamic={true}
            onClick={_.partial(onMenuClick, ActionType.Intro)}
          >
            <MenuTitle>소개</MenuTitle>
          </MenuItem>
          <MenuItem
            activeClass="active-dropdown-menu-item"
            to="services"
            smooth={true}
            spy={true}
            hashSpy={true}
            isDynamic={true}
            onClick={_.partial(onMenuClick, ActionType.Service)}
          >
            <MenuTitle>서비스</MenuTitle>
          </MenuItem>
          <MenuItem
            activeClass="active-dropdown-menu-item"
            to="qa"
            smooth={true}
            spy={true}
            hashSpy={true}
            isDynamic={true}
            onClick={_.partial(onMenuClick, ActionType.QA)}
          >
            <MenuTitle>자주 묻는 질문</MenuTitle>
          </MenuItem>
          <MenuItem
            activeClass="active-dropdown-menu-item"
            to="news"
            smooth={true}
            spy={true}
            hashSpy={true}
            isDynamic={true}
            onClick={_.partial(onMenuClick, ActionType.News)}
          >
            <MenuTitle>언론보도</MenuTitle>
          </MenuItem>
          <MenuTypeformItem typeformUri={typeformUri}>
            <MenuTitle>문의하기</MenuTitle>
          </MenuTypeformItem>
        </Inner>
      </Container>
    );
  }
}

export default withTranslation()(DropDownMenu);
