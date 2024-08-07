import React from "react";
import styled from "styled-components";

import Layout from "src/components/Layout";
import { colors } from "src/styles/colors";
import OtherHeader from "src/components/OtherHeader";
import Footer from "src/components/Footer";
import { H3, H4, H5, Body2Pre, Body2Li } from "src/components/Typography";
import { media } from "src/utils/media";

type Props = any;

const Container = styled(Layout)`
  background-color: ${colors.white};
  overflow: hidden;
  ${media.mobile`
    padding-left: 24px;
    padding-right: 24px;
  `}
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 1168px;
  margin: auto;
  padding-top: 227px;
  background-color: ${colors.white};
  ${media.mobile`
    max-width: 375px;
    flex-direction: column;
    padding-top: 112px;
  `}
`;

const ContentHeader = styled.div`
  margin-bottom: 60px;
  ${media.mobile`
    margin-bottom: 40px;
  `}
`;

const Title = styled(H3)`
  color: ${colors.text1.dark};
  margin-bottom: 60px;
  ${media.mobile`
    margin-bottom: 40px;
  `}
`;

const SubTitle = styled(H4)`
  color: ${colors.text1.dark};
  margin-bottom: 24px;
  ${media.mobile`
    margin-bottom: 20px;
  `}
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 60px;
  ${media.mobile`
    margin-bottom: 56px;
  `}
`;

const DescriptionTitle = styled(H5)`
  color: ${colors.text2.dark};
  margin-bottom: 8px;
`;

const Description = styled(Body2Pre)`
  color: ${colors.text2.dark};
  word-break: keep-all;
  ${media.mobile`
  word-break: break-all;
  `}
`;

const OrderedList = styled.ol`
  margin: 0;
  ${media.mobile`
    padding-left: 30px;
  `}
`;
const ListItem = styled(Body2Li)`
  color: ${colors.text2.dark};
  word-break: keep-all;
`;
const UnorderedList = styled.ul`
  list-style-type: none;
  padding-left: 20px;

  ${media.mobile`
    padding-left: 15px;
  `}
`;

const Divider32 = styled.div`
  width: 100%;
  height: 32px;
`;

const FooterView = styled(Footer)`
  min-width: auto;
  margin-top: 176px;
  ${media.mobile`
    margin-top: -8px;
    .inner-footer {
      padding-left: 0px;
    }
  `}
`;

const WorkGuidelinesPage = (props: Props) => {
  return (
    <React.Fragment>
      <Container id="outer-container">
        <OtherHeader />
        <Content id="page-box">
          <ContentHeader>
            <Title>주요 업무지침</Title>
          </ContentHeader>
          <Section>
            <SubTitle>{`1. 위험관리 및 사고예방 업무지침(내부통제 및 감사지침)`}</SubTitle>
            <DescriptionTitle>{`(위험관리위원회)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 위험관리위원회를 설치할 수 있다.`}</ListItem>
              <ListItem>
                {`전항에 따라 회사가 위험관리위원회를 설치하는 경우, 위험관리위원회는 다음 각 호에 관한 사항을 심의·의결한다.`}
                <UnorderedList>
                  <ListItem>{`① 위험관리의 기본방침 및 전략 수립`}</ListItem>
                  <ListItem>{`② 신규수탁 가상자산에 대한 심의 및 승인`}</ListItem>
                  <ListItem>{`③ 위험관리기준의 제정 및 개정`}</ListItem>
                  <ListItem>{`④ 그 밖에 위험관리에 필요한 사항`}</ListItem>
                </UnorderedList>
              </ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`(위험관리기준)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 가상자산 또는 고유자산의 운용이나 업무의 수행, 그 밖의 각종 거래에서 발생하는 위험을 제때에 인식·평가·감시·통제하는 등 위험 관리를 위한 기준 및 절차(이하 “위험관리기준”)를 마련할 수 있다.`}</ListItem>
              <ListItem>
                {`위험관리기준에서 정하여야 할 세부적인 사항과 그 밖에 필요한 사항은 다음의 각 호를 포함할 수 있다.`}
                <UnorderedList>
                  <ListItem>{`① 위험관리의 기본방침`}</ListItem>
                  <ListItem>{`② 위험관리를 전담하는 조직의 구조 및 업무 분장`}</ListItem>
                  <ListItem>{`③ 임직원이 업무를 수행할 때 준수하여야 하는 위험관리 절차`}</ListItem>
                  <ListItem>{`④ 임직원의 위험관리기준 준수 여부를 확인하는 절차·방법`}</ListItem>
                  <ListItem>{`⑤ 위험관리기준의 제정이나 변경`}</ListItem>
                  <ListItem>{`⑥ 위험관리책임자의 임면`}</ListItem>
                  <ListItem>{`⑦ 가상자산 관련 사고 등 우발상황에 대한 위험관리 비상계획`}</ListItem>
                  <ListItem>{`⑧ 내부적인 보고 및 승인체계`}</ListItem>
                </UnorderedList>
              </ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`(위험관리위원회 구성원 등)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 자산의 운용이나 업무의 수행, 그 밖의 각종 거래에서 발생하는 위험을 점검하고 관리하는 위험관리책임자를 1명 이상 둘 수 있다.`}</ListItem>
              <ListItem>{`위험관리책임자의 임면, 임기 등에 관하여는 별도 규정을 둔다. 이 경우 “준법 감시인”은  “위험관리책임자”로본다.`}</ListItem>
              <ListItem>{`위험관리위원회의 구성원은 이사회 맴버로 한다.`}</ListItem>
              <ListItem>
                {`회사는 위험관리업무가 효율적으로 수행될 수 있도록 충분한 경험과 능력을 갖춘 적절한 수의 인력으로 위험관리를 전담하는 조직을 구성·유지하여 다음 각 호에 해당하는 위험관리책임자의 직무수행을 지원할 수 있다.`}
                <UnorderedList>
                  <ListItem>{`① 위험한도의 운영상황 점검 및 분석`}</ListItem>
                  <ListItem>{`② 위험관리위원회, 임원에 대한 위험관리정보의 적시 제공`}</ListItem>
                  <ListItem>{`③ 그 밖에 위험관리에 필요한 사항`}</ListItem>
                </UnorderedList>
              </ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`(사고예방_업무검사의 목적)`}</DescriptionTitle>
            <Description>
              {`내부통제절차 준수여부를 스스로 진단하고 모니터링하여 업무수행 과정에서 발생된 미비점의 즉시적 발견 및 시정을 통하여 합리적인 업무처리, 사고의 예방 및 발생된 사고의 조기발견에 기여한다.`}
            </Description>
            <OrderedList>
              <ListItem>
                {`용어의 정의`}
                <UnorderedList>
                  <ListItem>{`① 업무점검 : 당사에서 처리한 제반업무에 대하여 대외 법령, 규정, 지침, 매뉴얼 및 각종 지시사항 등의 준수여부를 내부통제자 총괄하에 자체적으로 점검하는 것으로 일일검사와 월별검사로 구분한다.`}</ListItem>
                  <ListItem>{`② 지적사항 : 업무점검 실시과정에서 대외법령,규정·지침·매뉴얼 등을 준수하지 않은 경우를 발견한 것으로 시정조치가 필요하다고 판단되는 사항을 말한다.`}</ListItem>
                  <ListItem>{`③ 지도사항 : 업무점검 실시과정에서 대외법령,규정·지침·매뉴얼 등을 준수하지 않은 경우를 발견한 것으로 지적사항이 경미하여 시정조치가 필요없거나, 지적일로부터 5영업일 이내에 시정조치가 완료된 사항을 말한다.`}</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                {`업무검사 원칙`}
                <UnorderedList>
                  <ListItem>{`① 업무검사자의 독립성 : 업무검사자는 내규에서 정하는 업무의 기준 및 절차에 따라 업무처리가 정당하게 이루어졌는지 여부를 독립적 입장에서 성실히 점검하여야 한다.`}</ListItem>
                  <ListItem>{`② 업무검사자의 서류제출 요구권 : 업무검사자는 점검업무 수행과정에 필요한 각종 서류제출을 요구할 수 있다.`}</ListItem>
                  <ListItem>{`③ 업무검사 대상업무 담당자의 서류제출 의무 : 업무담당자는 자점검사자의 자료제출요구가 있는 경우 이에 응하여야 하며, 담당업무가 자점검사 대상이 되는 경우 자점검사 관련 자료를 성실히 제출하여야 한다.`}</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                {`사고예방 활동`}
                <UnorderedList>
                  <ListItem>{`- 내부통제 체크리스트(일별, 월별, 분기별) : 내부통제자가 체크리스트 기반으로 사고예방 활동을 수행하며, 준법감시인 대표이사 결재를 받는다.`}</ListItem>
                </UnorderedList>
              </ListItem>
            </OrderedList>
          </Section>

          <Section>
            <SubTitle>{`2. 이해상충 방지체계 업무지침(내부통제 규정)`}</SubTitle>
            <DescriptionTitle>{`(고객이익 우선)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`고객의 이익은 회사와 회사의 주주 및 임직원의 이익에 우선되어야 한다.`}</ListItem>
              <ListItem>{`회사의 이익은 임직원의 이익에 우선되어야 한다.`}</ListItem>
              <ListItem>{`모든 고객의 이익은 동등하게 다루어져야 한다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`(이해상충문제의 차단)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`임직원은 업무를 수행함에 있어 위법·부당한 방법으로 자신의 이익 또는 보상을 추구해서는 아니 된다.`}</ListItem>
              <ListItem>{`회사의 사전승인을 얻어 회사 업무 이외의 대외활동을 하는 경우 자신의 이익을 위하여 회사 또는 고객의 자산, 인력 및 업무상 취득한 정보 등을 이용하여서는 아니 된다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`(이해상충의 파악·평가 및 관리 등)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`임직원은 회사와 고객간 또는 고객과 고객간 이해상충의 관계에 있거나 이해상충이 우려되는 경우 준법감시인과  사전에 협의하여 고객 보호 등에 문제가 발생하지 아니하도록 조치하여야 한다.`}</ListItem>
              <ListItem>{`임직원은 이해상충 발생 가능성이 있는 거래의 경우 고객의 이익이 침해받지 아니하도록 이해상충 가능성을 최대한 낮출 수 있는 조치를 취하고, 이해상충 발생 가능성을 낮추는 것이 곤란하다고 판단되는 경우 이러한 사실을 고객에게 통지 하고 해당 거래 등을 중단하여야 한다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`(겸영업무에 따른 이해상충방지)`}</DescriptionTitle>
            <Description>{`회사는 가상자산업 이외의 다른 겸영 업무를 영위하는 경우 다음 각 호의 사항을 준수하여야 한다.`}</Description>
            <UnorderedList>
              <ListItem>{`① 영위하는 겸영업무가 이해상충 발생 가능성이 있는 경우 사무공간을 분리할 것`}</ListItem>
              <ListItem>{`② 영위하는 겸영업무 부문과 가상자산과 관련한 미공개 내부정보를 생산· 취득하는 부문의 정보교류 내역을 확인하고 관리할 것`}</ListItem>
              <ListItem>{`③ 가상자산과 관련한 미공개 내부정보가 겸영업무에 이용되지 아니하도록 관리할 것`}</ListItem>
            </UnorderedList>
          </Section>

          <Section>
            <SubTitle>{`3. 가상자산 재위탁 금지 업무지침(내부통제 규정)`}</SubTitle>
            <DescriptionTitle>{`(고객 예치 자산의 보관·관리)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 고객이 예치한 가상자산의 동일종목과 동일수량을 안전하게 보관하여야 하며, 다른 기관에 재 위탁하여서는 아니 된다.`}</ListItem>
              <ListItem>{`회사는 고객이 예치한 가상자산을 콜드월렛에 보관하도록 하는 정책을 별도로 수립·운영하여야 한다.`}</ListItem>
              <ListItem>{`회사는 고객이 예치한 가상자산의 종목, 수량의 정합성 확인을 위해 주기적 으로 회사가 보유한 전체 가상자산 내역과 고객이 보유한 가상자산 내역을 대사 하여 가상자산 보유 현황에 대한 실사 업무를 수행하여야 한다.`}</ListItem>
            </OrderedList>
          </Section>

          <Section>
            <SubTitle>{`4. 가상자산 안전 보관 업무지침(윌렛 지침)`}</SubTitle>
            <DescriptionTitle>{`(콜드월렛 운영 보안)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`콜드월렛은 물리적으로 차단된 장소에 안전하게 보관한다.`}</ListItem>
              <ListItem>{`콜드월렛에 대한 접근 및 사용이력을 남겨 안전하게 관리하고, 정기적으로 점검한다.`}</ListItem>
              <ListItem>
                {`콜드월렛은 사전에 정의된 절차 및 방법을 통해서만 출금 될 수 있도록 통제한다.`}
                <UnorderedList>
                  <ListItem>{`- 내부통제 및 승인절차, Multi-sig, MPC 등`}</ListItem>
                </UnorderedList>
              </ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`(콜드월렛 관리 보안)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`콜드월렛에 대한 안전한 백업 및 복구 대책을 수립 및 이행한다.`}</ListItem>
              <ListItem>{`콜드월렛의 도난‧분실 시 피해를 최소화할 수 있는 대책을 수립한다.`}</ListItem>
              <ListItem>{`콜드월렛 개인키의 유출, 도난, 분실을 방지할 수 있는 보안대책을 수립한다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`(가상자산 보안)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`신규 가상자산 수탁 시 별도의  절차를 통하여 가상자산의 안전성 및 신뢰도를 확인한다.`}</ListItem>
              <ListItem>{`콜드월렛의 하드웨어 구매 시 시장에서 평판과 안정적으로 알려진 제품으로 구매한다.`}</ListItem>
              <ListItem>{`콜드월렛 하드웨어는 불필요한 USB, 스피커, 마이크, 네트워크, CD 드라이버 등의 주변기기 및 인터페이스를 물리적으로 불능화 한다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`(콜드월렛 운영 절차)`}</DescriptionTitle>
            <Description>{`콜드월렛은 화재 등 자연적·환경적 위협 및 비인가자에 의한 접근·도난 등으로부터 안전하게 관리될 수 있도록 다음과 같이 안전한 상태로 보관한다.`}</Description>
            <OrderedList>
              <ListItem>{`콜드월렛은 모든 형태의 네트워크와 단절된 상태로 보관한다.`}</ListItem>
              <ListItem>{`콜드월렛은 화재 등 자연적, 환경적 위협으로부터 안전하게 보호하고 도난 및 비인가 접근을 방지할 수 있도록 관리 및  보관한다.`}</ListItem>
              <ListItem>{`콜드월렛  출입은 반드시 2명 이상의 인력이 함께 수행할 수 있도록 한다.`}</ListItem>
              <ListItem>{`콜드월렛이 보관된 장소는 핵심 통제구역으로 지정하고 강화된 출입통제 및 24시간 사각지대 없는 영상감시를 적용한다.`}</ListItem>
            </OrderedList>
          </Section>

          <FooterView />
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default WorkGuidelinesPage;
