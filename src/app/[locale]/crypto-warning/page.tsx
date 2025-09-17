import { Li, Ol, P, Ul } from '@/components/typography';
import { getTranslations } from 'next-intl/server';

const CryptoWarningPage = async () => {
  const t = await getTranslations('cryptoWarning');

  return (
    <section className="max-w-[1440px] w-full mt-32 mb-20 lg:mb-[180px] px-5 lg:px-[200px] mx-auto whitespace-pre-line">
      <h1 className="text-headline-sm lg:text-headline-lg mb-14 lg:mb-[120px] font-bold">{t('title')}</h1>
      <P className="mb-16">
        최근 가상자산에 대한 관심과 무리한 투자 및 관련 범죄에 대한 우려도 증가하고 있습니다. 본 고지는 고객님들이
        가상자산을 거래하거나 보유할 때 발생할 수 있는 대표적인 위험을 안내하기 위함입니다.
      </P>
      <Ol>
        <Li>가상자산은 법정화폐가 아니므로 특정 주체가 가치를 보장하지 않습니다.</Li>
        <Li>
          가상자산은 365일 24시간 전세계에서 거래되며, 시장의 수요공급, 각 가상자산의 정책, 국가별 법령 및 제도,
          네트워크 상황 등 다양한 요인으로 급격한 시세 변동이 발생할 수 있습니다.
        </Li>
        <Li>가상자산은 가격 변동폭에 제한이 없으므로 원금손실 가능성이 있음을 특히 유의하시기 바랍니다.</Li>
        <Li>가상자산은 예금자보호법의 적용을 받지 않습니다.</Li>
        <Li>&apos;전기통신금융사기, 유사수신 및 다단계, 피싱 사기&apos;를 주의하시기 바랍니다.</Li>
        <Ul>
          <Li className="list-[circle]">
            금융기관이나 수사기관을 사칭하며 송금을 요청하거나 계정 대여를 요구하는 행위, 에어드랍등을 이유로 투자를
            유인하는 행위는 전기통신금융사기, 유사수신 및 다단계에 해당할 수 있으므로 주의가 필요합니다.
          </Li>
          <Li className="list-[circle]">
            KODA는 고객의 비밀번호, OTP, SMS/ARS인증 등을 절대 요구하지 않으며, 고객을 대신해 로그인을 하지 않습니다.
          </Li>
          <Li className="list-[circle]">
            전기통신금융사기, 유사수신 및 다단계, 피싱사기 피해 예방을 위하여 각별히 주의해 주시길 당부드립니다.
          </Li>
        </Ul>
      </Ol>
      <P className="mt-16">
        위 사항들은 가상자산 거래에 수반되는 위험등에 대해 간략하게 서술한 것으로 가상자산 거래와 관련된 모든 위험을
        기술한 것은 아닙니다. 또한 본 고지내용은 국내외 관련법규 등에 우선하지 못한다는 점을 양지하여 주시기 바랍니다.
      </P>
    </section>
  );
};

export default CryptoWarningPage;
