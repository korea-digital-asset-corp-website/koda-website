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
  margin-bottom: 120px;
  ${media.mobile`
    margin-bottom: 80px;
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
  counter-increment: item;
  ol > li:first-child {
    counter-reset: item;
  }
  ol > li::marker {
    display: none;
    content: counters(item, ".") ". ";
  }
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

const EthicalManagementPage = (props: Props) => {
  return (
    <React.Fragment>
      <Container id="outer-container">
        <OtherHeader />
        <Content id="page-box">
          <ContentHeader>
            <Title>윤리경영 방침</Title>
            <Description>
              {`(주)한국디지털에셋(이하 “회사”)은 윤리경영의 중요성을 강조하며, 윤리헌장의 정신을 반영한 윤리강령을 제정하였습니다. 모든 임직원이 지켜야 할 올바른 윤리적 판단 기준과 직무윤리를 제시하고 성실히 실천할 것을 다짐합니다.`}
            </Description>
          </ContentHeader>
          <Section>
            <SubTitle>{`제 1장 총칙`}</SubTitle>
            <DescriptionTitle>{`제 1조 (목적)`}</DescriptionTitle>
            <Description>
              {`이 윤리강령(이하 “강령”이라 한다)은 「특정 금융거래정보의 보고 및 이용 등에 관한 법률」제 2조 제1호 하목에 따른 가상자산사업자의 윤리경영 실천 및 임직원의 올바른 윤리적 의사결정 및 윤리적 판단 기준을 임직원에게 제공하고, 가상자산사업의 종사자로서 책임과 의무를 성실히 하여 고객보호 및 기업가치 증대를 통하여 사회 발전에 기여함을 목적으로 한다.`}
            </Description>
            <Divider32 />
            <DescriptionTitle>{`제 2조 (적용범위)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`강령은 회사에 속한 모든 임직원(계약직 및 임시직원 등을 포함)에 대하여 적용한다.`}</ListItem>
              <ListItem>{`회사와 임직원은 본 강령을 준수하기 위해서 노력하고, 준수에 필요한 세부사항은 내규 등에 의해 구체화 될 수 있다.`}</ListItem>
            </OrderedList>
          </Section>
          <Section>
            <SubTitle>{`제 2장 고객에 대한 윤리`}</SubTitle>
            <DescriptionTitle>{`제 1조 (고객우선)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 고객이 모든 행동의 최우선 기준임을 인식하고 항상 고객의 입장에서 생각하고 행동하며, 고객에게 보다 나은 가상자산서비스를 제공하기 위해 노력하여야 한다.`}</ListItem>
            </OrderedList>
            <Divider32 />
            <DescriptionTitle>{`제 2조 (고객보호)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 고객의 재산과 고객정보를 안전하게 보호하고, 고객의 권익을 침해하는 어떠한 비도덕적·비윤리적 행위를 하지 않는다.`}</ListItem>
            </OrderedList>
            <Divider32 />
            <DescriptionTitle>{`제 3조 (고객존중)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`모든 임직원은 고객의 의견과 제안사항을 항상 경청하고 겸허하게 수용하며, 고객의 불만사항에 대해서는 최대한 신속하고 공정하게 처리하여야 한다.`}</ListItem>
            </OrderedList>
          </Section>
          <Section>
            <SubTitle>{`제 3장 주주와 투자자에 대한 윤리`}</SubTitle>
            <DescriptionTitle>{`제 1조 (주주 및 투자자의 권리·이익 보호)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 주주와 투자자의 권리를 보호하고 회사의 가치제고를 위한 투명하고 합리적인 의사결정 과정과 절차를 준수함으로써 회계자료의 정확성과 신뢰성을 유지한다.`}</ListItem>
              <ListItem>{`회사는 주주와 투자자의 정당한 요구와 제안을 존중하며 필요한 정보는 관련 법규와 내규에 따라 적시에 정확하게 제공하여 합리적인 의사결정을 할 수 있도록 한다.`}</ListItem>
              <ListItem>{`회사는 모든 주주를 공정하고 평등하게 대우하며, 전체 주주의 이익을 고려하여 경영의사를 결정함으로써 주주의 이익이나 권리가 부당하게 침해되지 않도록 한다.`}</ListItem>
            </OrderedList>
          </Section>
          <Section>
            <SubTitle>{`제 4장 국가와 사회에 대한 윤리`}</SubTitle>
            <DescriptionTitle>{`제 1조 (국가 경제 및 사회발전 기여)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 국가 및 지역사회의 일원으로서 경제성장과 일자리 창출을 위해 노력하고 지역사회와 그 구성원들의 사회·경제적 가치에 기여하는 다양한 사업을 추진하여 사회적 책임을 다한다.`}</ListItem>
              <ListItem>{`회사와 모든 임직원은 지속적인 기술 혁신 및 사업의 고도화 등을 통해 편리하고 효율적인 서비스를 구현하고, 합리적이고 책임 있는 경영을 통해 고객의 삶의 질을 향상시켜 사회 발전에 이바지하여야 한다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 2조 (재해예방 및 환경보호)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 환경문제를 중요한 경영 요소로 인식하고 국내외 환경관련 법규를 준수하며 안전에 관한 제반 법규와 기준을 준수하여 재해·위험 예방관리에 최선을 다해야 한다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 3조 (정치 참여 금지)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 특정 정당이나 후보를 지지하는 의견을 표명하거나 지원하는 행동으로 정치적 중립을 침해하는 행위를 하지 않으며, 각종 정치 또는 자선단체 기부금은 반드시 관련 법령을 준수하여 기부한다.`}</ListItem>
              <ListItem>{`모든 임직원은 근무시간 중 정치활동을 하지 않으며, 회사의 인력 및 재산을 정치적 목적으로 이용하지 않아야 한다.`}</ListItem>
              <ListItem>{`모든 임직원 개개인의 참정권과 정치적 견해는 존중되어야 하나, 각자의 정치적 견해 및 관여가 회사의 입장으로 오해받지 않도록 해야 한다.`}</ListItem>
            </OrderedList>
          </Section>
          <Section>
            <SubTitle>{`제 5장 경쟁사 및 거래업체에 대한 윤리`}</SubTitle>
            <DescriptionTitle>{`제 1조 (국내외 법규 준수)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 국가 및 지역사회의 일원으로 부패·뇌물·자금세탁의 방지 등과 관련된 각종 법규를 준수할 뿐만 아니라, 국제사회의 구성원으로서 국제협약·규정 등 국제적으로 통용되는 제반 규약과 현지국의 법규 및 문화·관습을 존중한다.`}</ListItem>
            </OrderedList>
            <Divider32 />
            <DescriptionTitle>{`제 2조 (공정한 경쟁·거래)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 자유경쟁의 원칙에 따라 공정하고 자유로운 시장경제 질서를 존중하고 다른 동종회사와는 상호존중을 기반으로 정당하게 경쟁하며 공정 거래 관련 법규를 준수한다.`}</ListItem>
              <ListItem>{`회사는 공정하고 투명한 업무수행을 통해 거래업체와 상호신뢰 및 협력 관계를 구축함으로써 공동의 발전을 추구한다. 또한, 우월적 지위를 이용하여 어떠한 형태의 부당한 요구도 하지 않으며, 청렴 계약을 체결하고 준수한다.`}</ListItem>
            </OrderedList>
          </Section>
          <Section>
            <SubTitle>{`제 6장 임직원에 대한 윤리`}</SubTitle>
            <DescriptionTitle>{`제 1조 (존중과 공정한 대우)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 모든 임직원의 기본적 인권과 사생활을 존중하고, 성별 · 학력 · 지연 · 혈연 · 학연 · 종교 · 연령 · 장애 · 혼인 등을 이유로 부당한 차별대우를 하지 않으며, 개인의 능력과 자질에 따라 균등한 기회를 부여하고, 공정하게 평가한 성과에 의해 합리적으로 보상한다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 2조 (인재육성 및 지원)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 모든 임직원 개개인의 자율과 창의성을 존중하고, 능력을 향상시킬 수 있는 직무 기회를 공정하게 부여함으로써 직무 만족도를 높이고 인재를 육성함과 동시에 임직원의 자아실현을 지원한다.`}</ListItem>
              <ListItem>{`회사는 모든 임직원의 목표 달성을 지원하고 업무 수행에 필요한 교육 기회를 적극적으로 제공하며, 능력이 충분히 발휘되는 업무환경 및 조직문화 형성을 위하여 노력하여야 한다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 3조 (삶의 질 향상)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 모든 임직원을 회사의 가장 소중한 자산으로 여기고, 정당한 방법으로 직무를 수행할 수 있도록 제도를 확립하여 쾌적한 근무 환경을 조성할 수 있도록 노력하여야 한다.`}</ListItem>
              <ListItem>{`회사는 모든 임직원의 독립적 인격과 기본권을 존중하며, 상호신뢰를 바탕으로 자유로운 제안과 건의를 할 수 있는 성숙한 조직문화를 만들기 위해 노력하여야 한다.`}</ListItem>
            </OrderedList>
          </Section>
          <Section>
            <SubTitle>{`제 7장 임직원의 근무윤리`}</SubTitle>

            <DescriptionTitle>{`제 1조 (기본윤리 및 법규준수)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`모든 임직원은 회사의 경영이념과 비전을 공유하고 회사가 추구하는 목표와 가치 실현을 위해 각자에게 부여된 사명을 성실히 수행하여야 한다.`}</ListItem>
              <ListItem>{`모든 임직원은 정직과 신뢰를 가장 중요한 가치관으로 삼고 신의성실의 원칙에 입각하여 맡은 업무를 충실히 수행하여야 한다.`}</ListItem>
              <ListItem>{`모든 임직원은 회사의 품위나 사회적 신뢰를 훼손할 수 있는 일체의 행위를 하여서는 안되며, 경영환경 변화에 유연하게 적응하기 위하여 창의적 사고를 바탕으로 끊임없이 자기혁신에 힘써야 한다.`}</ListItem>
              <ListItem>{`모든 임직원은 업무와 관련된 제반 법규를 준수하고, 사회의 기본가치 및 양심을 지키며 맡은 바 임무를 성실히 수행한다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 2조 (이해상충행위 금지)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`모든 임직원은 임직원 개인과 회사의 이해 또는 회사 내 부서간의 이해가 상충될 경우에는 회사의 이익을 우선하여 행동하여야 한다.`}</ListItem>
              <ListItem>{`모든 임직원은 임직원으로 근무하던 중 발견하게 된 사업기회는 회사에 우선적으로 귀속시켜야 한다.`}</ListItem>
              <ListItem>{`모든 임직원은 업무를 수행함에 있어 개인적인 이해관계가 회사, 주주 또는 고객의 이해와 상충되지 않도록 하며, 이해관계의 상충이 예상되는 경우에는 사전에 이해 상충과 관련된 모든 사실을 회사에 밝혀야 한다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 3조 (내부자 거래 등 불공정거래 금지)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`모든 임직원은 업무수행 과정에서 알게 된 내부정보를 이용하여 유가증권 및 가상자산의 매매, 시세조종 등 개인적인 이익을 위한 불공정 거래를 하지 않는다.`}</ListItem>
              <ListItem>{`모든 임직원은 적법한 절차에 의하지 아니하고 주가 및 가상자산의 시세에 영향을 미칠 수 있는 미공개 중요정보를 제3자에게 제공하지 않는다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 4조 (회사 재산의 보호)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`모든 임직원은 회사의 유·무형 모든 자산을 회사의 가치증대를 위한 업무목적으로만 사용하여야 하며 사적이익을 추구하여서는 아니 된다.`}</ListItem>
              <ListItem>{`모든 임직원은 회사의 자금 및 자산을 규정된 용도에 따라 회사가 승인한 목적만을 위해 합리적이고 투명하게 사용하여야 한다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 5조 (정보의 보호 및 보안 유지)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`모든 임직원은 업무수행 과정에서 알게 된 회사의 정보 또는 공개되지 않은 정보를 적법하지 않는 방법으로 외부에 제공하여서는 안되며, 정보 접근 권한이 없는 제3자에게 유출되지 않도록 정보보안의 책임과 의무를 다하여야 한다.`}</ListItem>
              <ListItem>{`모든 임직원은 신문, 방송 등 언론기관에 정보를 제공할 경우에는 적법한 절차를 거쳐 정당한 권한을 부여 받은 임직원을 통해서 제공하여야 한다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 6조 (직장 내 성희롱 및 괴롭힘 등 금지)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`모든 임직원은 상대방이 원하지 않는 성적 접촉, 성적 농담, 성적 수치심을 느끼게 하는 말과 행동을 하지 않는다.`}</ListItem>
              <ListItem>{`모든 임직원은 상호간 존중하고 배려하여야 하며, 언어적·신체적·정신적 공격을 통해 수치심·모욕감·위협감 등을 야기하는 행동을 하지 않는다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 7조 (윤리규범 준수)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`모든 임직원은 제반 윤리규범을 성실히 준수하여야 하며, 이를 위반할 경우에는 해당 행위에 책임을 진다.`}</ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 8조 (대외활동 기준)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>
                {`모든 임직원은 외부강연이나 기고, 언론매체 접촉, Social Network Service(SNS) 등 전자통신수단을 이용한 대외활동을 하는 경우 다음 각 호의 사항을 준수하여야 한다.`}
                <OrderedList>
                  <ListItem>{`모회사의 공식의견이 아닌 사견임을 명확히 표현하여야 한다.`}</ListItem>
                  <ListItem>{`대외활동으로 인하여 회사의 주된 업무수행에 지장을 주어서는 아니된다.`}</ListItem>
                  <ListItem>{`공정한 시장질서를 유지하고 건전한 투자문화 조성을 위해 최대한 노력하여야 한다.`}</ListItem>
                  <ListItem>{`불확실한 사항을 단정적으로 표현하거나 다른 가상자산사업자를 비방하여서는 아니된다.`}</ListItem>
                </OrderedList>
              </ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 9조 (고용계약 종료 후의 의무)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`모든 임직원은 회사를 퇴직하는 경우 업무관련 자료의 반납 등 적절한 후속 조치를 취하여야 하며, 퇴직 이후에도 회사와 고객의 이익을 해하는 행위를 하여서는 아니 된다.`}</ListItem>
            </OrderedList>
          </Section>

          <Section>
            <SubTitle>{`제 8장 가상자산 수탁업자로서의 윤리`}</SubTitle>

            <DescriptionTitle>{`제 1조 (수탁자산의 안전한 보관)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>
                {`회사는 위험관리 및 사고 예방을 위해 각 호의 사항을 준수하여야 한다.`}
                <OrderedList>
                  <ListItem>{`고객의 가상자산은 인터넷과 완전히 분리되어 오프라인 상태인 월렛(이하”콜드월렛”)에 안전하게 100% 보관한다.`}</ListItem>
                  <ListItem>{`콜드월렛은 물리적으로 차단된 장소에 안전하게 보관하여야 하며,  콜드월렛 운영 등 모든 절차는 관련 내부 규정에 따른다.`}</ListItem>
                  <ListItem>{`콜드월렛은 화재 등 자연적·환경적 위협 및 비인가자에 의한 접근·도난 등으로부터 안전하게 관리될 수 있도록  관련 내부 규정에 따른다.`}</ListItem>
                </OrderedList>
              </ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 2조 (이해상충 방지)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>
                {`회사는 수탁업자의 책임을 충실히 이행함에 있어 이해상충 가능성을 최소화하기 위해 아래 각 호의 사항을 준수하여야 한다.`}
                <OrderedList>
                  <ListItem>{`회사는 이해상충 발생 가능성이 있는 경우 준법감시인과 사전에 협의하여 고객 보호 등에 문제가 발생하지 않도록 확인·점검하여야 한다.`}</ListItem>
                  <ListItem>{`준법감시인은 직무를 수행함에 있어 업무 수행 절차와 적용 기준 등이 법규 또는 내부 규정 등을 위반 할 가능성이 없는지 확인·점검 하여야 한다.`}</ListItem>
                </OrderedList>
              </ListItem>
            </OrderedList>
            <Divider32 />

            <DescriptionTitle>{`제 3조 (수탁자산의 재위탁 금지)`}</DescriptionTitle>
            <OrderedList>
              <ListItem>{`회사는 위탁받은 고객의 가상자산과 동일한 종류와 수량의 가상자산을 실질적으로 보유 하여야 하며, 다른 기관에 재위탁을 하여서는 아니 된다.`}</ListItem>
            </OrderedList>
            <Divider32 />
          </Section>

          <FooterView />
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default EthicalManagementPage;
