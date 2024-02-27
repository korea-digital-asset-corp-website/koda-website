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
            thumnailImage={images.news10Src}
            title={
              <React.Fragment>
                {`인터넷컴퓨터 코리아허브(ICP.Hub Korea), 코다와 가상자산 생태계 신뢰도를 높히기 위한 업무협약 체결`}
              </React.Fragment>
            }
            caption={"토큰포스트, 2024.01"}
            uri={"https://www.tokenpost.kr/article-161939"}
            onClick={_.partial(
              onLink,
              `인터넷컴퓨터 코리아허브(ICP.Hub Korea), 코다와 가상자산 생태계 신뢰도를 높히기 위한 업무협약 체결"`
            )}
          />
          <CardItem
            thumnailImage={images.news11Src}
            title={
              <React.Fragment>
                {`아이피버스, 한국디지털에셋과 가상자산 수탁 협약 체결`}
              </React.Fragment>
            }
            caption={"아이비티즈, 2024.01"}
            uri={"https://www.it-b.co.kr/news/articleView.html?idxno=73412"}
            onClick={_.partial(
              onLink,
              `아이피버스, 한국디지털에셋과 가상자산 수탁 협약 체결`
            )}
          />
          <LastCardItem
            thumnailImage={images.news12Src}
            title={`캐리버스, 한국디지털에셋와 파트너십 체결 "안전성+투명성 제고"`}
            caption={"머니투데이, 2024.01"}
            uri={"https://news.mt.co.kr/mtview.php?no=2024012217022690953"}
            onClick={_.partial(
              onLink,
              `캐리버스, 한국디지털에셋와 파트너십 체결 "안전성+투명성 제고"`
            )}
          />
        </Content>
        <Content>
          <CardItem
            thumnailImage={images.news5Src}
            title={
              <React.Fragment>
                {`한국디지털에셋(KODA), 폴리곤랩스와 맞손…커스터디 서비스 제공`}
              </React.Fragment>
            }
            caption={"한경닷컴, 2023.04"}
            uri={"https://www.hankyung.com/finance/article/202304248119B"}
            onClick={_.partial(
              onLink,
              `한국디지털에셋(KODA), 폴리곤랩스와 맞손…커스터디 서비스 제공`
            )}
          />
          <CardItem
            thumnailImage={images.news4Src}
            title={
              <React.Fragment>
                {`팬시토큰(fanC), 한국디지털에셋(KODA)과 커스터디 계약 체결"`}
              </React.Fragment>
            }
            caption={"아시아경제, 2023.02"}
            uri={"https://www.asiae.co.kr/article/2023020315140699312"}
            onClick={_.partial(
              onLink,
              `팬시토큰(fanC), 한국디지털에셋(KODA)과 커스터디 계약 체결"`
            )}
          />
          <LastCardItem
            thumnailImage={images.news6Src}
            title={`KODA, 쟁글과 투명한 가상자산 거래 위한 업무협약`}
            caption={"공감언론 뉴시스, 2022.03"}
            uri={
              "https://mobile.newsis.com/view.html?ar_id=NISX20220302_0001778723#_PA"
            }
            onClick={_.partial(
              onLink,
              "KODA, 쟁글과 투명한 가상자산 거래 위한 업무협약"
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
              `가상자산 1500억 보유 위메이드 "KODA에 맡겨 관리"`
            )}
          />
          <CardItem
            thumnailImage={images.news2Src}
            title={`국내 기업도 테슬라처럼...비트코인 투자 길 열렸다`}
            caption={"서울경제, 2021.05"}
            uri={"https://www.sedaily.com/NewsView/22M7T2LDX9"}
            onClick={_.partial(
              onLink,
              `국내 기업도 테슬라처럼...비트코인 투자 길 열렸다`
            )}
          />
          <LastCardItem
            thumnailImage={images.news3Src}
            title={`국민은행, 은행권 첫 ‘디지털 자산 보관사업’ 시동`}
            caption={"한국경제, 2020.11"}
            uri={"https://www.hankyung.com/economy/article/2020112662211"}
            onClick={_.partial(
              onLink,
              "국민은행, 은행권 첫 ‘디지털 자산 보관사업’ 시동"
            )}
          />
        </Content>
      </Inner>
    </Container>
  );
};

export default withTranslation()(NewsSection);
