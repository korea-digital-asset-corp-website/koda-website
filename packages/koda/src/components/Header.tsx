import { navigate } from "gatsby";
import _ from "lodash";
import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import Scroll, { Link } from "react-scroll";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

import images from "src/images";
import zIndex from "src/styles/zIndexes";
import { media, desktopWidth, mobileWidth } from "src/utils/media";
import { GNBCSS, button2CSS, Body2 } from "src/components/Typography";
import { gTagTracking } from "src/decorators/analyticsTracking";
import { CategoryType, ActionType, gTagEvent } from "src/configs/analytics";
import TypeformButton from "src/components/button/TypeformButton";
import PrimaryButton from "src/components/button/PrimaryButton";
import DropDownMenu from "src/components/menu/DropDownMenu";
import { typeformUri } from "src/utils/uri";
import FloatingButton from "./button/FloatingButton";

type Props = WithTranslation;

type States = {
  isShowSubmitButton: boolean;
  isMenuOpen: boolean;
  hash: string | null;
};

const Events = Scroll.Events;

const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 107px;
  background-color: #fff;
  transform: translate3d(0, 0, 0);
  z-index: ${zIndex.hundred};
  ${media.mobile`
    height: 56px;
  `}
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  width: 1168px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  ${media.mobile`
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    justify-content: space-between;
  `}
`;

const LeftView = styled.div`
  position: absolute;
  top: 0px;
  display: flex;
  height: 107px;
  flex-direction: row;
  align-items: center;
  ${media.mobile`
    position: static;
    height: 56px;
  `}
`;

const LogoLink = styled(Link)``;

const Logo = styled.img`
  width: 158.39px;
  height: 36px;
  margin-top: 4px;
  cursor: pointer;
  ${media.mobile`
    width: 98px;
    height: 22px;
  `}
`;

const MenuItems = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-right: 48px;
  transition: all 0.15s linear 0s;
  cursor: pointer;
`;

const LastMenuItem = styled(MenuItem)`
  margin-right: 72px;
`;

const MenuItemText = styled(Body2)<{ $active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #060607;
  text-align: center;
  ${({ $active }) =>
    $active
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.4;
        `}
`;

const LinkButton = styled(TypeformButton)``;

const ServiceButton = styled(PrimaryButton)`
  ${button2CSS}
  padding: 12px 16px;
`;

const DropDownMenuView = styled(DropDownMenu)<{ $isMenuOpen: boolean }>`
  ${({ $isMenuOpen }) =>
    $isMenuOpen
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
  ${media.desktop`
    display: none;
  `}
`;

const HamburgerIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const SHOW_FLOATING_BUTTON_START = 740 - 107;

const SHOW_FLOATING_BUTTON_END = 6000;

class Header extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isShowSubmitButton: false,
      isMenuOpen: false,
      hash: null,
    };
  }

  public componentDidMount() {
    if (typeof window === "undefined") {
      return;
    }
    window.addEventListener("scroll", this.onScroll);
    Events.scrollEvent.register("end", this.onScrollEnd);
  }

  public componentWillUnmount() {
    if (typeof window === "undefined") {
      return;
    }
    window.removeEventListener("scroll", this.onScroll);
    Events.scrollEvent.remove("end");
  }

  public render() {
    const { isMenuOpen, isShowSubmitButton } = this.state;

    return (
      <>
        <Container>
          <Inner>
            <LeftView>
              <MediaQuery minWidth={desktopWidth}>
                <LogoLink to="main" smooth={true} spy={true} hashSpy={true}>
                  <Logo
                    alt="KODA"
                    src={images.kodaLogoSrc}
                    srcSet={images.kodaLogo}
                    onClick={this.onLogoClick}
                  />
                </LogoLink>
              </MediaQuery>
              <MediaQuery maxWidth={mobileWidth}>
                <LogoLink to="main" smooth={true} spy={true} hashSpy={true}>
                  <Logo
                    alt="KODA"
                    src={images.kodaLogoSrc}
                    srcSet={images.kodaLogo}
                    onClick={this.onLogoClick}
                  />
                </LogoLink>
              </MediaQuery>
            </LeftView>
            <MediaQuery minWidth={desktopWidth}>
              {this.renderMenuItems}
            </MediaQuery>
            <MediaQuery maxWidth={mobileWidth}>
              {isMenuOpen ? (
                <HamburgerIcon
                  alt={"hamburger"}
                  src={images.hamburgerCloseSrc}
                  onClick={_.partial(this.onToggleMenuOpen, false)}
                />
              ) : (
                <HamburgerIcon
                  alt={"hamburger"}
                  src={images.hamburgerSrc}
                  onClick={_.partial(this.onToggleMenuOpen, true)}
                />
              )}
            </MediaQuery>
            <MediaQuery maxWidth={mobileWidth}>
              <DropDownMenuView
                $isMenuOpen={isMenuOpen}
                onMenuClick={this.onMenuClick}
              />
            </MediaQuery>
          </Inner>
        </Container>
        <MediaQuery maxWidth={mobileWidth}>
          <AnimatePresence>
            {isShowSubmitButton && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FloatingButton />
              </motion.div>
            )}
          </AnimatePresence>
        </MediaQuery>
      </>
    );
  }

  private onToggleMenuOpen = (isMenuOpen: boolean) => {
    this.setState({
      isMenuOpen,
    });
  };

  private get renderMenuItems() {
    const { t } = this.props;
    const { hash } = this.state;
    const emptyHash = _.isEmpty(hash);
    return (
      <MenuItems>
        <MenuItem
          activeClass="active-menu-item"
          to="intro"
          smooth={true}
          spy={true}
          hashSpy={true}
          isDynamic={true}
          onClick={_.partial(this.onMenuClick, ActionType.Intro)}
        >
          <MenuItemText $active={emptyHash} className="active-text">
            소개
          </MenuItemText>
        </MenuItem>
        <MenuItem
          activeClass="active-menu-item"
          to="services"
          smooth={true}
          spy={true}
          hashSpy={true}
          isDynamic={true}
          onClick={_.partial(this.onMenuClick, ActionType.Service)}
        >
          <MenuItemText $active={emptyHash} className="active-text">
            서비스
          </MenuItemText>
        </MenuItem>
        <MenuItem
          activeClass="active-menu-item"
          to="qa"
          smooth={true}
          spy={true}
          hashSpy={true}
          isDynamic={true}
          onClick={_.partial(this.onMenuClick, ActionType.QA)}
        >
          <MenuItemText $active={emptyHash} className="active-text">
            자주 묻는 질문
          </MenuItemText>
        </MenuItem>
        <LastMenuItem
          activeClass="active-menu-item"
          to="news"
          smooth={true}
          spy={true}
          hashSpy={true}
          isDynamic={true}
          onClick={_.partial(this.onMenuClick, ActionType.News)}
        >
          <MenuItemText $active={emptyHash} className="active-text">
            언론보도
          </MenuItemText>
        </LastMenuItem>
        <LinkButton typeformUri={typeformUri} onClick={this.onLink}>
          <ServiceButton name={"문의하기"} />
        </LinkButton>
      </MenuItems>
    );
  }

  private toggleMenuOpen = () => {
    this.setState((prevState) => {
      return {
        isMenuOpen: !prevState.isMenuOpen,
      };
    });
  };

  @gTagTracking((__, ___, args) => {
    const action: ActionType = args[0];
    return {
      category: CategoryType.GNB,
      action,
    };
  })
  private onMenuClick = (action: ActionType) => {
    // NOTHING
  };

  private onLink = () => {
    gTagEvent({
      category: CategoryType.GNB,
      action: ActionType.CTA,
    });
  };

  // @gTagTracking<Props, any>((props, __, ___) => {
  //   const { i18n } = props;
  //   const label = i18n.language === "ko" ? "ENG" : "KOR";
  //   return {
  //     category: CategoryType.GNB,
  //     action: ActionType.Language,
  //     label,
  //   };
  // })
  // private changeLocales = () => {
  //   const { i18n } = this.props;
  //   if (i18n.language === "ko") {
  //     i18n.changeLanguage("en");
  //     navigate("/en");
  //     return;
  //   }
  //   i18n.changeLanguage("ko");
  //   navigate("/ko");
  // };

  private onLogoClick = () => {
    navigate("/");
  };

  private onScrollEnd = (to: string) => {
    if (!to) {
      return;
    }
    this.setState({
      isMenuOpen: false,
      hash: `#${to}`,
    });
  };

  private onScroll = () => {
    const { isShowSubmitButton } = this.state;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    this.setState({
      hash: window.location.hash,
    });
    if (
      SHOW_FLOATING_BUTTON_START < scrollTop &&
      scrollTop < SHOW_FLOATING_BUTTON_END &&
      !isShowSubmitButton
    ) {
      this.setState({
        isShowSubmitButton: true,
      });
    }
    if (
      (SHOW_FLOATING_BUTTON_END <= scrollTop ||
        scrollTop <= SHOW_FLOATING_BUTTON_START) &&
      isShowSubmitButton
    ) {
      this.setState({
        isShowSubmitButton: false,
      });
    }
  };
}

export default withTranslation()(Header);
