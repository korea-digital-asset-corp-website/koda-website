import { H2, H3, Li, Ol, P, TableContainer, Tbody, Td, Th, Thead, Tr, Ul } from '@/components/typography';
import { getTranslations } from 'next-intl/server';

const V7PrivacyPolicyContent = async () => {
  const t = await getTranslations('privacyPolicy');
  return (
    <>
      <P>{t('introduction1')}</P>
      <P>{t('introduction2')}</P>

      <Ol>
        <Li>{t('tableOfContents.item1')}</Li>
        <Li>{t('tableOfContents.item2')}</Li>
        <Li>{t('tableOfContents.item3')}</Li>
        <Li>{t('tableOfContents.item4')}</Li>
        <Li>{t('tableOfContents.item5')}</Li>
        <Li>{t('tableOfContents.item6')}</Li>
        <Li>{t('tableOfContents.item7')}</Li>
        <Li>{t('tableOfContents.item8')}</Li>
        <Li>{t('tableOfContents.item9')}</Li>
        <Li>{t('tableOfContents.item10')}</Li>
        <Li>{t('tableOfContents.item11')}</Li>
        <Li>{t('tableOfContents.item12')}</Li>
        <Li>{t('tableOfContents.item13')}</Li>
      </Ol>

      <H2 className="mt-16">{t('section1.title')}</H2>
      <P>{t('section1.introduction')}</P>

      <H3>{t('section1.serviceInquiry.title')}</H3>
      <Ul>
        <Li>{t('section1.serviceInquiry.item1')}</Li>
      </Ul>

      <H3>{t('section1.custodyService.title')}</H3>
      <Ul>
        <Li>{t('section1.custodyService.item1')}</Li>
        <Li>{t('section1.custodyService.item2')}</Li>
      </Ul>

      <H2 className="mt-16">{t('section2.title')}</H2>
      <P>{t('section2.paragraph1')}</P>
      <P>{t('section2.paragraph2')}</P>

      <H3>{t('section2.serviceInquiry.title')}</H3>
      <Ul>
        <Li>{t('section2.serviceInquiry.period')}</Li>
      </Ul>

      <H3>{t('section2.custodyService.title')}</H3>
      <Ul>
        <Li>{t('section2.custodyService.userManagement')}</Li>
        <Li>{t('section2.custodyService.serviceProvision')}</Li>
      </Ul>

      <P>{t('section2.paragraph3')}</P>

      <TableContainer>
        <Thead>
          <Tr>
            <Th>{t('section2.legalRetention.tableHeaders.category')}</Th>
            <Th>{t('section2.legalRetention.tableHeaders.law')}</Th>
            <Th>{t('section2.legalRetention.tableHeaders.period')}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{t('section2.legalRetention.records.customerDueDiligence.category')}</Td>
            <Td>{t('section2.legalRetention.records.customerDueDiligence.law')}</Td>
            <Td>{t('section2.legalRetention.records.customerDueDiligence.period')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section2.legalRetention.records.contracts.category')}</Td>
            <Td rowSpan={3}>{t('section2.legalRetention.records.contracts.law')}</Td>
            <Td rowSpan={3}>{t('section2.legalRetention.records.contracts.period')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section2.legalRetention.records.payments.category')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section2.legalRetention.records.complaints.category')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section2.legalRetention.records.loginRecords.category')}</Td>
            <Td>{t('section2.legalRetention.records.loginRecords.law')}</Td>
            <Td>{t('section2.legalRetention.records.loginRecords.period')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section2.legalRetention.records.virtualAssetTransactions.category')}</Td>
            <Td>{t('section2.legalRetention.records.virtualAssetTransactions.law')}</Td>
            <Td>{t('section2.legalRetention.records.virtualAssetTransactions.period')}</Td>
          </Tr>
        </Tbody>
      </TableContainer>

      <H2 className="mt-16">{t('section3.title')}</H2>
      <P>{t('section3.introduction')}</P>

      <P>
        {t('section3.travelRule.title')}: {t('section3.travelRule.description')}
      </P>

      <TableContainer>
        <Thead>
          <Tr>
            <Th>{t('section3.travelRule.tableHeaders.purpose')}</Th>
            <Th>{t('section3.travelRule.tableHeaders.recipient')}</Th>
            <Th>{t('section3.travelRule.tableHeaders.information')}</Th>
            <Th>{t('section3.travelRule.tableHeaders.legalBasis')}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.upbit')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.bithumb')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.coinone')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.korbit')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.hexlant')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.kdac')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.flybit')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.gopax')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.beeblock')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.pravang')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.flataexchange')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.foblgate')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.borabit')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.coredax')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.paycoin')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.oasis')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
          <Tr>
            <Td>{t('section3.travelRule.commonPurpose')}</Td>
            <Td>{t('section3.travelRule.recipients.infiniteblock')}</Td>
            <Td>{t('section3.travelRule.commonInformation')}</Td>
            <Td>{t('section3.travelRule.commonLegalBasis')}</Td>
          </Tr>
        </Tbody>
      </TableContainer>

      <P>
        <strong>{t('section3.legalProvision.title')}</strong>
      </P>
      <P>{t('section3.legalProvision.description')}</P>
      <H2 className="mt-16">{t('section4.title')}</H2>
      <P>{t('section4.paragraph1')}</P>
      <P>{t('section4.paragraph2')}</P>

      <TableContainer>
        <Thead>
          <Tr>
            <Th>{t('section4.outsourcing.tableHeaders.provider')}</Th>
            <Th>{t('section4.outsourcing.tableHeaders.purpose')}</Th>
            <Th>{t('section4.outsourcing.tableHeaders.items')}</Th>
            <Th>{t('section4.outsourcing.tableHeaders.country')}</Th>
            <Th>{t('section4.outsourcing.tableHeaders.method')}</Th>
            <Th>{t('section4.outsourcing.tableHeaders.period')}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td className="font-bold">{t('section4.outsourcing.providers.googleLLC.name')}</Td>
            <Td>{t('section4.outsourcing.providers.googleLLC.purpose')}</Td>
            <Td>{t('section4.outsourcing.providers.googleLLC.items')}</Td>
            <Td>{t('section4.outsourcing.providers.googleLLC.country')}</Td>
            <Td rowSpan={3}>{t('section4.outsourcing.commonMethod')}</Td>
            <Td>{t('section4.outsourcing.providers.googleLLC.period')}</Td>
          </Tr>
          <Tr>
            <Td className="font-bold">{t('section4.outsourcing.providers.typeForm.name')}</Td>
            <Td>{t('section4.outsourcing.providers.typeForm.purpose')}</Td>
            <Td>{t('section4.outsourcing.providers.typeForm.items')}</Td>
            <Td>{t('section4.outsourcing.providers.typeForm.country')}</Td>
            <Td>{t('section4.outsourcing.providers.typeForm.period')}</Td>
          </Tr>
          <Tr>
            <Td className="font-bold">{t('section4.outsourcing.providers.code.name')}</Td>
            <Td>{t('section4.outsourcing.providers.code.purpose')}</Td>
            <Td>{t('section4.outsourcing.providers.code.items')}</Td>
            <Td>{t('section4.outsourcing.providers.code.country')}</Td>
            <Td>{t('section4.outsourcing.providers.code.period')}</Td>
          </Tr>
        </Tbody>
      </TableContainer>
      <H2 className="mt-16">{t('section5.title')}</H2>
      <P>{t('section5.paragraph1')}</P>
      <P>{t('section5.paragraph2')}</P>
      <P>{t('section5.paragraph3')}</P>
      <P>{t('section5.paragraph4')}</P>
      <P>{t('section5.paragraph5')}</P>

      <H2 className="mt-16">{t('section6.title')}</H2>
      <P>{t('section6.introduction')}</P>

      <H3>{t('section6.serviceInquiry.title')}</H3>
      <Ul>
        <Li>{t('section6.serviceInquiry.required')}</Li>
      </Ul>

      <H3>{t('section6.custodyService.title')}</H3>
      <Ul>
        <Li>{t('section6.custodyService.required')}</Li>
        <Li className="mt-4">{t('section6.custodyService.assetTransfer')}</Li>
      </Ul>

      <H2 className="mt-16">{t('section7.title')}</H2>
      <P>{t('section7.paragraph1')}</P>
      <P>{t('section7.paragraph2')}</P>

      <Ul>
        <Li>{t('section7.legalBasis')}</Li>
        <Li>{t('section7.scope')}</Li>
        <Li>{t('section7.items')}</Li>
      </Ul>

      <P>{t('section7.paragraph3')}</P>
      <Ul>
        <Li>{t('section7.procedures')}</Li>
        <Li>{t('section7.methods')}</Li>
      </Ul>

      <H2 className="mt-16">{t('section8.title')}</H2>
      <P>{t('section8.introduction')}</P>

      <P>
        {t('section8.measure1.title')}
        <br />
        {t('section8.measure1.content')}
      </P>

      <P>
        {t('section8.measure2.title')}
        <br />
        {t('section8.measure2.content')}
      </P>

      <P>
        {t('section8.measure3.title')}
        <br />
        {t('section8.measure3.content')}
      </P>

      <P>
        {t('section8.measure4.title')}
        <br />
        {t('section8.measure4.content')}
      </P>

      <P>
        {t('section8.measure5.title')}
        <br />
        {t('section8.measure5.content')}
      </P>

      <P>
        {t('section8.measure6.title')}
        <br />
        {t('section8.measure6.content')}
      </P>

      <P>
        {t('section8.measure7.title')}
        <br />
        {t('section8.measure7.content')}
      </P>

      <P>
        {t('section8.measure8.title')}
        <br />
        {t('section8.measure8.content')}
      </P>

      <P>
        {t('section8.measure9.title')}
        <br />
        {t('section8.measure9.content')}
      </P>

      <H2 className="mt-16">{t('section9.title')}</H2>
      <P>{t('section9.paragraph1')}</P>
      <P>{t('section9.paragraph2')}</P>

      <P className="!mb-0">{t('section9.cookiePurpose')}</P>
      <Ul className="!my-0">
        <Li>{t('section9.generalCookie')}</Li>
        <Li>{t('section9.typeformCookie')}</Li>
      </Ul>

      <P className="!my-0">{t('section9.cookieRefusal')}</P>
      <P className="!my-0">{t('section9.cookieRefusalEffect')}</P>

      <H2 className="mt-16">{t('section10.title')}</H2>
      <P>{t('section10.paragraph1')}</P>

      <P>{t('section10.officer.title')}</P>
      <Ul>
        <Li>{t('section10.officer.name')}</Li>
        <Li>{t('section10.officer.position')}</Li>
        <Li>{t('section10.officer.email')}</Li>
      </Ul>

      <P>{t('section10.paragraph2')}</P>

      <H2 className="mt-16">{t('section11.title')}</H2>
      <P>{t('section11.paragraph1')}</P>

      <P>{t('section11.department.title')}</P>
      <Ul>
        <Li>{t('section11.department.name')}</Li>
        <Li>{t('section11.department.contact')}</Li>
        <Li>{t('section11.department.email')}</Li>
      </Ul>

      <H2 className="mt-16">{t('section12.title')}</H2>
      <P>{t('section12.introduction')}</P>

      <Ul>
        <Li>{t('section12.organizations.kopico')}</Li>
        <Li>{t('section12.organizations.kisa')}</Li>
        <Li>{t('section12.organizations.spo')}</Li>
        <Li>{t('section12.organizations.police')}</Li>
      </Ul>

      <H2 className="mt-16">{t('section13.title')}</H2>
      <P>{t('section13.content')}</P>
    </>
  );
};

export default V7PrivacyPolicyContent;
