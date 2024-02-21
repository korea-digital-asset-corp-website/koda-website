import React, { useState } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import Layout from "src/components/Layout";
import { colors } from "src/styles/colors";
import OtherHeader from "src/components/OtherHeader";
import Footer from "src/components/Footer";
import { H2, H3, H4, H5, Body2Pre, CaptionA } from "src/components/Typography";
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

const PrivacyPolicy = styled.a`
  font-size: 14px;
  &:hover {
    color: #0060B6;
  },
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
  margin-bottom: 80px;
  ${media.mobile`
    margin-bottom: 60px;
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
  word-break: break-word;
`;

const DescriptionBold = styled(Body2Pre)`
  font-weight: 900;
  color: ${colors.text2.dark};
  word-break: break-word;
`;

const DescriptionHighlight = styled(Body2Pre)`
  font-weight: 1000;
  font-size: 19px;
  color: ${colors.text2.dark};
  word-break: break-word;
`;

const Divider16 = styled.div`
  width: 100%;
  height: 16px;
`;

const Divider32 = styled.div`
  width: 100%;
  height: 32px;
`;

const DescriptionDivider = styled.div`
  width: 100%;
  height: 32px;
  ${media.mobile`
    height: 24px;
  `}
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

const PrivacyPolicyPage2023 = (props: Props) => {
  return (
    <React.Fragment>
      <Container id="outer-container">
        <OtherHeader />
        <Content id="page-box">
          <ContentHeader>
            <Title>개인정보처리방침</Title>
            <Description>
              {`(주)한국디지털에셋은 이용자의 개인정보를 매우 중요하게 생각하며, 이용자가 회사의 서비스(디지털자산 수탁서비스)를 이용하기 위해 제공한 개인정보보호에 최선을 다하고 있으며, “개인정보 보호법”등 개인정보와 관련된 법령을 준수하고 있습니다.

회사는 개인정보처리방침을 사이트에 공개함으로써, 이용자가 언제든지 쉽게 확인할 수 있도록 하고 있습니다.

1. 개인정보의 처리 목적
2. 개인정보의 처리 및 보유기간
3. 개인정보처리의 위탁
4. 이용자 및 법정대리인의 권리·의무와 행사방법
5. 처리하는 개인정보의 항목
6. 개인정보의 파기
7. 개인정보의 안전성 확보 조치
8. 개인정보 자동수집 장치의 설치·운영 및 거부에 관한 사항
9. 개인정보 보호 책임자
10. 개인정보 열람청구
11. 권익침해 구제방법
12. 개인정보 처리방침 변경`}
            </Description>
          </ContentHeader>
          <Section>
            <SubTitle>{`1. 개인정보의 처리 목적`}</SubTitle>
            <Description>
              {`회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.`}
            </Description>
            <DescriptionDivider />
            <DescriptionTitle>{`서비스 등 문의`}</DescriptionTitle>
            <Description>{`• 서비스 안내 및 맞춤형 서비스 제공`}</Description>
            <Divider32 />
            <DescriptionTitle>{`수탁서비스 등 제공`}</DescriptionTitle>
            <Description>
              {`• 이용자 식별, 이용자 정보관리
• 가상자산 수탁 거래 관계의 설정·유지·해지 등 서비스 전반에 관한 사항`}
            </Description>
          </Section>
          <Section>
            <SubTitle>{`2. 개인정보의 처리 및 보유 기간`}</SubTitle>
            <Description>
              {`① 회사는  법령에 따른 개인정보 처리·보유기간 또는 이용자로부터 개인정보를 수집 시에 동의 받은 개인정보 처리·보유기간 내에서 개인정보를 처리·보유합니다.

② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.`}
            </Description>
            <Divider32 />
            <DescriptionTitle>{`서비스 문의`}</DescriptionTitle>
            <Description>{`• 서비스 문의 목적 달성 후 지체없이 파기`}</Description>
            <Divider32 />
            <DescriptionTitle>{`수탁서비스 제공`}</DescriptionTitle>
            <Description>{`• 회원 관리 : 탈퇴시 까지
• 서비스제공 : 서비스 공급 완료 및 관련 비용정산 완료시까지`}</Description>
            <Divider32 />
            <Description>{`③ 제2항에도 불구하고, 다음 각호의 경우에는 해당 사유의 종료시까지 개인정보처리 및 보유를 할 수 있습니다.`}</Description>
            <Divider32 />
            <DescriptionTitle>{`고객 확인 기록`}</DescriptionTitle>
            <Description>{`• 관련 법률: 특정금융거래정보의 보고 및 이용 등에 관한 법률
• 보유 기간: 5년`}</Description>
            <Divider32 />
            <DescriptionTitle>{`계약 등에 관련된 기록`}</DescriptionTitle>
            <Description>{`• 관련 법률: 전자상거래 등에서의 소비자보호에 관한 법률
• 보유 기간: 5년`}</Description>
            <Divider32 />
            <DescriptionTitle>{`대금결제 및 재화 등의 공급에 관한 기록`}</DescriptionTitle>
            <Description>{`• 관련 법률: 전자상거래 등에서의 소비자보호에 관한 법률
• 보유 기간: 5년`}</Description>
            <Divider32 />
            <DescriptionTitle>{`소비자의 불만 또는 분쟁처리에 관한 기록`}</DescriptionTitle>
            <Description>{`• 관련 법률: 전자상거래 등에서의 소비자보호에 관한 법률
• 보유 기간: 3년`}</Description>
            <Divider32 />
            <DescriptionTitle>{`로그인 기록`}</DescriptionTitle>
            <Description>{`• 관련 법률: 통신비밀보호법
• 보유 기간: 3개월 이상`}</Description>
          </Section>
          <Section>
            <SubTitle>{`3. 개인정보처리의 위탁`}</SubTitle>
            <Description>{`회사는 편리하고 더 나은 서비스를 제공하기 위해 업무 중 일부를 외부 전문업체에 위탁하고 있습니다. 그리고 위탁받은 업체가 관계법령을 위반하지 않도록 관리/감독을 하고 있습니다. 또한 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.`}</Description>
            <DescriptionDivider />
            <DescriptionTitle>{`개인정보처리 수탁업체(국외)`}</DescriptionTitle>
            <Divider16 />
            <DescriptionBold>{`Google LLC.`}</DescriptionBold>
            <Description>{`• 위탁 내용: 서비스 운영을 위한 Japan Region Cloud 서비스
• 위탁 항목: 이름, 주소, 이메일, 서비스 이용 기록, 접속 로그, 접속 IP 정보
• 위탁 국가, 연락처: 일본, googlekrsupport@google.com
• 위탁 방법: 서비스 이용시, 네트워크를 통해 전송
• 이용 기간: 회원탈퇴 시 혹은 위탁계약 종료 시까지`}</Description>
            <Divider16 />
            <DescriptionBold>{`Type Form`}</DescriptionBold>
            <Description>{`• 위탁 내용: 홈페이지 설문조사
• 위탁 항목: 이름, 이메일, 핸드폰번호
• 위탁 국가, 연락처: 스페인, support@typeform.com
• 위탁 방법: 서비스 이용시, 네트워크를 통해 전송
• 이용 기간: 설문조사완료 및 위탁계약 종료시까지`}</Description>
          </Section>
          <Section>
            <SubTitle>{`4. 이용자 및 법정대리인의 권리·의무와 행사방법`}</SubTitle>
            <Description>{`① 이용자는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다. 다만, 개인정보 보호법 제35조 제4항, 제36조 제1항, 제37조 제2항 등 관계 법령에서 정하는 바에 따라 이용자의 개인정보 열람·정정·삭제·처리정지 요구 등의 권리 행사가 제한 될 수 있습니다

② 이용자의 권리 행사는  「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.

③ 제1항에 따른 권리 행사는 이용자의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출 하셔야 합니다.

④ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.

⑤ 회사는 이용자 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.`}</Description>
          </Section>
          <Section>
            <SubTitle>{`5. 처리하는 개인정보의 항목`}</SubTitle>
            <Description>{`회사는 가상자산 수탁서비스를 제공하기 위해 다음의 개인정보 항목을 수집하고 있습니다. `}</Description>
            <Divider32 />
            <DescriptionTitle>{`서비스 등 문의`}</DescriptionTitle>
            <Description>{`• 필수항목 : 이메일, 휴대전화번호, 이름, 직책, 회사명`}</Description>
            <Divider32 />
            <DescriptionTitle>{`가상자산 수탁 서비스 등 제공 `}</DescriptionTitle>
            <Description>{`• 필수항목 : 법인단체 거래신청서 및 고객거래확인서(성명(한글/영문), 생년월일, 거주지(주소), 국적, 이메일주소, 휴대전화번호), 대표자/대리인 권한 위임장(성명, 주민등록번호, 거주지(주소), 휴대폰번호), 법인인감증명서(대표자명, 대표자 주민등록번호), 주주명부(대표자명, 거주지(주소), 주민등록번호), 대표자/대리인 신분증`}</Description>
            <br></br>
            <Description>{`• 자산이동 수집항목 : 성명, 주소, 전화번호`}</Description>
          </Section>
          <Section>
            <SubTitle>{`6. 개인정보의 파기`}</SubTitle>
            <Description>{`① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.

② 이용자로 부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.

• 법령 근거: 특정금융거래정보의 보고 및 이용 등에 관한 법률
• 구분: 거래기록이 있는 탈퇴회원의 개인정보
• 수집한 개인정보 항목: 이메일, 이름, 회사명

③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.

• 파기 절차: 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
• 파기 방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.`}</Description>
          </Section>
          <Section>
            <SubTitle>{`7. 개인정보의 안전성 확보 조치`}</SubTitle>
            <Description>{`회사는 개인정보 보호법 제29조에 따라 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.

① 정기적인 자체 감사 실시
개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.

② 개인정보 취급 직원의 최소화 및 교육
개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.

③ 내부관리계획의 수립 및 시행
개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.

④ 해킹 등에 대비한 기술적 대책
회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.

⑤ 개인정보의 암호화
이용자의 개인정보와 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.

⑥ 접속기록의 보관 및 위변조 방지
개인정보처리시스템에 접속한 기록을 최소 1년 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.

⑦ 개인정보에 대한 접근 제한
개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.

⑧ 문서보안을 위한 잠금 장치 사용
개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.

⑨ 비인가자에 대한 출입 통제
개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.`}</Description>
          </Section>
          <Section>
            <SubTitle>{`8. 개인정보 자동 수집 장치의 설치︎・운영 및 거부에 관한 사항`}</SubTitle>
            <Description>
              {`① 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.

② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터 내의 하드디스크에 저장되기도 합니다.

가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
나. 쿠키의 설치·운영 및 거부 : 웹브라우저 상단의 도구 > 인터넷 옵션 > 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.
다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.`}
            </Description>
          </Section>
          <Section>
            <SubTitle>{`9. 개인정보 보호책임자`}</SubTitle>
            <Description>
              {`① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.`}
            </Description>
            <Divider32 />
            <DescriptionTitle>{`개인정보 보호책임자`}</DescriptionTitle>
            <Description>{`• 이름 : 조진석
• 직급: 이사
• 이메일: support@kodax.com`}</Description>
            <Divider32 />
            <Description>{`② 이용자가 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 이용자의 문의 사항에 대해 지체 없이 답변 및 처리해드릴 것입니다.`}</Description>
          </Section>
          <Section>
            <SubTitle>{`10. 개인정보 열람청구`}</SubTitle>
            <Description>{`이용자는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.
회사는 이용자의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.`}</Description>
            <Divider32 />
            <DescriptionTitle>{`개인정보 열람청구 접수·처리 부서`}</DescriptionTitle>
            <Description>{`• 부서명 : 내부통제
• 담당자 : 서은진
• 연락처 : 02-561-4762
• 이메일 : support@kodax.com`}</Description>
          </Section>
          <Section>
            <SubTitle>{`11. 권익침해 구제방법`}</SubTitle>
            <Description>{`개인정보 침해에 대한 피해구제, 상담 등이 필요한 경우 다음 기관에 문의하실 수 있습니다.

• 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
• 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
• 대검찰청 사이버수사과 : (국번없이) 1301 (www.spo.go.kr)
• 경찰청 사이버수사국 : (국번없이) 182 (ecrm.police.go.kr/minwon/main)`}</Description>
          </Section>
          <Section>
            <SubTitle>{`12. 개인정보 처리방침 변경`}</SubTitle>
            <Description>{`회사가 개인정보 처리방침을 변경하는 경우에는 변경 및 시행의 시기, 변경된 내용을 지속적으로 공개하며, 변경된 내용은 이용자가 쉽게 확인 할 수 있도록 변경 전·후를 비교하여 공개합니다.`}</Description>
          </Section>
          <Section>
            <DescriptionTitle>{`<부칙>`}</DescriptionTitle>
            <Description>{`(시행일) 이 개인정보처리방침은 2023년 6월 16일부터 적용됩니다.`}</Description>
            <DescriptionHighlight>{`*변경 내역: [가상자산 수탁 서비스 등 제공 관련 개인정보(대리인 포함)의 항목 추가]`}</DescriptionHighlight>
            <Description>{`
[이전 개인정보 처리방침 목록]`}</Description>
            <PrivacyPolicy href="/old-privacy-policy-20210101">{`(2021.01.01일 시행) 개인정보 처리방침 v0`}</PrivacyPolicy>
            <br></br>
            <PrivacyPolicy href="/old-privacy-policy-20220325">{`(2022.03.25일 시행) 개인정보 처리방침 v1`}</PrivacyPolicy>
          </Section>
          <FooterView />
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default PrivacyPolicyPage2023;
