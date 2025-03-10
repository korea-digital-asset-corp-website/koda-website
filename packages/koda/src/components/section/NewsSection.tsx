import _ from "lodash";
import React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import images from "src/images";
import { media, desktopWidth, mobileWidth } from "src/utils/media";
import { H2, H2Pre, Body1Pre, H3 } from "src/components/Typography";
import { translate } from "src/locales";
import { colors } from "src/styles/colors";
import NewsCard from "src/components/card/NewsCard";
import { gTagEvent, ActionType, CategoryType } from "src/configs/analytics";

type Props = WithTranslation;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 2580px;
  padding-top: 217px;
  padding-bottom: 220px;
  ${media.mobile`
    min-width: auto;
    padding-top: 66px;
    padding-bottom: 34px;
  `}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 1168px;
  margin: auto;
  ${media.mobile`
    height: auto;
  `}
`;

const Title = styled(H3)`
  color: ${colors.text1.dark};
  margin-bottom: 70px;
  ${media.mobile`
    width: 327px;
    margin-bottom: 40px;
    align-self: center;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 30px;
  // align-items: stretch;
  // flex-wrap: nowrap;
  // overflow-x: auto;
  // overflow-y: hidden;
  ${media.mobile`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

const CardItem = styled(NewsCard)`
  margin-right: 32px;
  ${media.mobile`
    margin-right: 0px;
    margin-bottom: 32px;
  `}
`;

const LastCardItem = styled(CardItem)`
  margin-right: 0px;
`;

const NewsSection = (props: Props) => {
  const { i18n, t } = props;

  const onLink = (uri: string) => {
    gTagEvent({
      category: CategoryType.Media,
      action: ActionType.News,
      label: uri.substring(0, 30),
    });
  };

  return (
    <Container>
      <Inner>
        <Title>{`언론 보도`}</Title>
        <Content>
          <CardItem
            thumnailImage={images.news18Src}
            title={
              <React.Fragment>
                {`에덤-KODA 전략적 MOU체결, 교육분야 가상자산의 보안성 강화 협력`}
              </React.Fragment>
            }
            caption={"매일경제, 2025.03"}
            uri={"https://www.mk.co.kr/news/business/11257685"}
            onClick={_.partial(
              onLink,
              `에덤-KODA 전략적 MOU체결, 교육분야 가상자산의 보안성 강화 협력`,
            )}
          />
          <CardItem
            thumnailImage={images.news15Src}
            title={
              <React.Fragment>
                {`KODA, 가상자산사업자 갱신신고 수리 완료…커스터디 기업 최초`}
              </React.Fragment>
            }
            caption={"뉴스1, 2025.02"}
            uri={"https://www.news1.kr/finance/blockchain-fintech/5704266"}
            onClick={_.partial(
              onLink,
              `KODA, 가상자산사업자 갱신신고 수리 완료…커스터디 기업 최초`,
            )}
          />
          <LastCardItem
            thumnailImage={images.news17Src}
            title={
              <React.Fragment>
                {`KODA, 국내 최초 가상자산 이용자 보호법 보안 기준 충족`}
              </React.Fragment>
            }
            caption={"매일경제, 2025.02"}
            uri={"https://www.mk.co.kr/news/it/11251597"}
            onClick={_.partial(
              onLink,
              `KODA, 국내 최초 가상자산 이용자 보호법 보안 기준 충족`,
            )}
          />
        </Content>
        <Content>
          <CardItem
            thumnailImage={images.news13Src}
            title={
              <React.Fragment>
                {`비트맥스-한국디지털에셋, 업무협약 체결…비트코인 전략 자산 본격화`}
              </React.Fragment>
            }
            caption={"이투데이, 2025.02"}
            uri={"https://www.etoday.co.kr/news/view/2447415"}
            onClick={_.partial(
              onLink,
              `비트맥스-한국디지털에셋, 업무협약 체결…비트코인 전략 자산 본격화`,
            )}
          />
          <CardItem
            thumnailImage={images.news21Src}
            title={
              <React.Fragment>
                {`"금융산업 경쟁력 위해 가상자산 ETF 도입해야"`}
              </React.Fragment>
            }
            caption={"뉴시스, 2024.12"}
            uri={"https://www.newsis.com/view/NISX20241220_0003005184"}
            onClick={_.partial(
              onLink,
              `금융산업 경쟁력 위해 가상자산 ETF 도입해야`,
            )}
          />
          <LastCardItem
            thumnailImage={images.news19Src}
            title={
              <React.Fragment>
                {`오덜리 네트워크, 코다와 전략적 파트너십 체결로 한국 웹3 도입 가속화`}
              </React.Fragment>
            }
            caption={"토큰포스트, 2024.11"}
            uri={"https://www.tokenpost.kr/article-206171"}
            onClick={_.partial(
              onLink,
              `오덜리 네트워크, 코다와 전략적 파트너십 체결로 한국 웹3 도입 가속화`,
            )}
          />
        </Content>
        <Content>
          <CardItem
            thumnailImage={images.news20Src}
            title={
              <React.Fragment>
                {`스틸리언, 한국디지털에셋에 보안진단서비스 수행`}
              </React.Fragment>
            }
            caption={"보안뉴스, 2024.06"}
            uri={"https://www.boannews.com/media/view.asp?idx=130295"}
            onClick={_.partial(
              onLink,
              `스틸리언, 한국디지털에셋에 보안진단서비스 수행`,
            )}
          />
          <CardItem
            thumnailImage={images.news16Src}
            title={
              <React.Fragment>
                {`가상자산 수탁 기업 '코다', 프리 시리즈 A 투자 유치`}
              </React.Fragment>
            }
            caption={"토큰포스트, 2024.05"}
            uri={"https://www.tokenpost.kr/article-179186"}
            onClick={_.partial(
              onLink,
              `가상자산 수탁 기업 '코다', 프리 시리즈 A 투자 유치`,
            )}
          />
          <LastCardItem
            thumnailImage={images.news15Src}
            title={
              <React.Fragment>
                {`KODA, 가상자산 수탁고 8조 달성…시장 점유율 80% 이상`}
              </React.Fragment>
            }
            caption={"전자신문, 2024.02"}
            uri={"https://www.etnews.com/20240222000131"}
            onClick={_.partial(
              onLink,
              `KODA, 가상자산 수탁고 8조 달성…시장 점유율 80% 이상`,
            )}
          />
        </Content>
        <Content>
          <CardItem
            thumnailImage={images.news1Src}
            title={
              <React.Fragment>
                {`가상자산 1500억 보유 위메이드 "KODA에 맡겨 관리"`}
              </React.Fragment>
            }
            caption={"파이낸셜뉴스, 2021.05"}
            uri={"https://www.fnnews.com/news/202105170917477041"}
            onClick={_.partial(
              onLink,
              `가상자산 1500억 보유 위메이드 "KODA에 맡겨 관리"`,
            )}
          />
          <CardItem
            thumnailImage={images.news14Src}
            title={`국내 기업도 테슬라처럼...비트코인 투자 길 열렸다`}
            caption={"서울경제, 2021.05"}
            uri={"https://www.sedaily.com/NewsView/22M7T2LDX9"}
            onClick={_.partial(
              onLink,
              `국내 기업도 테슬라처럼...비트코인 투자 길 열렸다`,
            )}
          />
          <LastCardItem
            thumnailImage={images.news3Src}
            title={`국민은행, 은행권 첫 ‘디지털 자산 보관사업’ 시동`}
            caption={"한국경제, 2020.11"}
            uri={"https://www.hankyung.com/economy/article/2020112662211"}
            onClick={_.partial(
              onLink,
              "국민은행, 은행권 첫 ‘디지털 자산 보관사업’ 시동",
            )}
          />
        </Content>
      </Inner>
    </Container>
  );
};

export default withTranslation()(NewsSection);
