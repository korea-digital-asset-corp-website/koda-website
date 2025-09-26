import { H2, H3, Li, Ol, P } from '@/components/typography';
import { SubCircledLi, SubCircledOl } from '@/components/typography/Lists';
import { getTranslations } from 'next-intl/server';

const WorkGuideLinesPage = async () => {
  const t = await getTranslations('workGuidelines');

  return (
    <section className="max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] px-5 lg:px-[200px] mx-auto whitespace-pre-line">
      <h1 className="text-headline-sm lg:text-headline-lg mb-14 lg:mb-[120px] font-bold">{t('title')}</h1>

      {/* 1. 위험관리 및 사고예방 업무지침 */}
      <H2 className="mt-16">{t('sections.riskManagement.title')}</H2>

      {/* 위험관리위원회 */}
      <H3>{t('sections.riskManagement.committee.title')}</H3>
      <Ol>
        {t.raw('sections.riskManagement.committee.items').map((item: string, index: number) => (
          <Li key={index}>
            {item}
            {index === 1 && ( // 두 번째 항목에 서브리스트 추가
              <SubCircledOl>
                {t.raw('sections.riskManagement.committee.subItems').map((subItem: string, subIndex: number) => (
                  <SubCircledLi key={subIndex}>{subItem}</SubCircledLi>
                ))}
              </SubCircledOl>
            )}
          </Li>
        ))}
      </Ol>

      {/* 위험관리기준 */}
      <H3>{t('sections.riskManagement.standards.title')}</H3>
      <Ol>
        {t.raw('sections.riskManagement.standards.items').map((item: string, index: number) => (
          <Li key={index}>
            {item}
            {index === 1 && ( // 두 번째 항목에 서브리스트 추가
              <SubCircledOl>
                {t.raw('sections.riskManagement.standards.subItems').map((subItem: string, subIndex: number) => (
                  <SubCircledLi key={subIndex}>{subItem}</SubCircledLi>
                ))}
              </SubCircledOl>
            )}
          </Li>
        ))}
      </Ol>

      {/* 위험관리위원회 구성원 등 */}
      <H3>{t('sections.riskManagement.composition.title')}</H3>
      <Ol>
        {t.raw('sections.riskManagement.composition.items').map((item: string, index: number) => (
          <Li key={index}>
            {item}
            {index === 3 && ( // 네 번째 항목에 서브리스트 추가
              <SubCircledOl>
                {t.raw('sections.riskManagement.composition.subItems').map((subItem: string, subIndex: number) => (
                  <SubCircledLi key={subIndex}>{subItem}</SubCircledLi>
                ))}
              </SubCircledOl>
            )}
          </Li>
        ))}
      </Ol>

      {/* 사고예방 업무검사의 목적 */}
      <H3>{t('sections.riskManagement.accidentPrevention.title')}</H3>
      <P>{t('sections.riskManagement.accidentPrevention.description')}</P>

      <Ol>
        <Li>
          {t('sections.riskManagement.accidentPrevention.definitions.title')}
          <SubCircledOl>
            {t
              .raw('sections.riskManagement.accidentPrevention.definitions.items')
              .map((item: string, index: number) => (
                <SubCircledLi key={index}>{item}</SubCircledLi>
              ))}
          </SubCircledOl>
        </Li>

        <Li className="mt-0">
          {t('sections.riskManagement.accidentPrevention.principles.title')}
          <SubCircledOl>
            {t.raw('sections.riskManagement.accidentPrevention.principles.items').map((item: string, index: number) => (
              <SubCircledLi key={index}>{item}</SubCircledLi>
            ))}
          </SubCircledOl>
        </Li>

        <Li>{t('sections.riskManagement.accidentPrevention.activities.title')}</Li>
        <P className="mt-0">{t('sections.riskManagement.accidentPrevention.activities.description')}</P>
      </Ol>

      {/* 2. 이해상충 방지체계 업무지침 */}
      <H2 className="mt-16">{t('sections.conflictOfInterest.title')}</H2>

      {/* 고객이익 우선 */}
      <H3>{t('sections.conflictOfInterest.customerPriority.title')}</H3>
      <Ol>
        {t.raw('sections.conflictOfInterest.customerPriority.items').map((item: string, index: number) => (
          <Li key={index}>{item}</Li>
        ))}
      </Ol>

      {/* 이해상충문제의 차단 */}
      <H3>{t('sections.conflictOfInterest.blocking.title')}</H3>
      <Ol>
        {t.raw('sections.conflictOfInterest.blocking.items').map((item: string, index: number) => (
          <Li key={index}>{item}</Li>
        ))}
      </Ol>

      {/* 이해상충의 파악·평가 및 관리 등 */}
      <H3>{t('sections.conflictOfInterest.management.title')}</H3>
      <Ol>
        {t.raw('sections.conflictOfInterest.management.items').map((item: string, index: number) => (
          <Li key={index}>{item}</Li>
        ))}
      </Ol>

      {/* 겸영업무에 따른 이해상충방지 */}
      <H3>{t('sections.conflictOfInterest.concurrentBusiness.title')}</H3>
      <P>{t('sections.conflictOfInterest.concurrentBusiness.description')}</P>
      <SubCircledOl>
        {t.raw('sections.conflictOfInterest.concurrentBusiness.items').map((item: string, index: number) => (
          <SubCircledLi key={index}>{item}</SubCircledLi>
        ))}
      </SubCircledOl>

      {/* 3. 가상자산 재위탁 금지 업무지침 */}
      <H2 className="mt-16">{t('sections.reEntrustmentProhibition.title')}</H2>

      {/* 고객 예치 자산의 보관·관리 */}
      <H3>{t('sections.reEntrustmentProhibition.custody.title')}</H3>
      <Ol>
        {t.raw('sections.reEntrustmentProhibition.custody.items').map((item: string, index: number) => (
          <Li key={index}>{item}</Li>
        ))}
      </Ol>

      {/* 4. 가상자산 안전 보관 업무지침 */}
      <H2 className="mt-16">{t('sections.secureStorage.title')}</H2>

      {/* 콜드월렛 운영 보안 */}
      <H3>{t('sections.secureStorage.coldWalletSecurity.title')}</H3>
      <Ol>
        {t.raw('sections.secureStorage.coldWalletSecurity.items').map((item: string, index: number) => (
          <Li key={index}>
            {item}
            {index === 2 && ( // 세 번째 항목에 노트 추가
              <P className="mt-0">{t('sections.secureStorage.coldWalletSecurity.note')}</P>
            )}
          </Li>
        ))}
      </Ol>

      {/* 콜드월렛 관리 보안 */}
      <H3>{t('sections.secureStorage.coldWalletManagement.title')}</H3>
      <Ol>
        {t.raw('sections.secureStorage.coldWalletManagement.items').map((item: string, index: number) => (
          <Li key={index}>{item}</Li>
        ))}
      </Ol>

      {/* 가상자산 보안 */}
      <H3>{t('sections.secureStorage.assetSecurity.title')}</H3>
      <Ol>
        {t.raw('sections.secureStorage.assetSecurity.items').map((item: string, index: number) => (
          <Li key={index}>{item}</Li>
        ))}
      </Ol>

      {/* 콜드월렛 운영 절차 */}
      <H3>{t('sections.secureStorage.operationProcedures.title')}</H3>
      <P>{t('sections.secureStorage.operationProcedures.description')}</P>
      <Ol>
        {t.raw('sections.secureStorage.operationProcedures.items').map((item: string, index: number) => (
          <Li key={index}>{item}</Li>
        ))}
      </Ol>
    </section>
  );
};

export default WorkGuideLinesPage;
