import { Li, Ol, P, Ul } from '@/components/typography';
import { getTranslations } from 'next-intl/server';

const CryptoWarningPage = async () => {
  const t = await getTranslations('cryptoWarning');

  return (
    <section className="max-w-[1440px] w-full mt-32 mb-20 lg:mb-[180px] px-5 lg:px-[200px] mx-auto whitespace-pre-line">
      <h1 className="text-headline-sm lg:text-headline-lg mb-14 lg:mb-[120px] font-bold">{t('title')}</h1>

      <P className="mb-16">{t('introduction')}</P>

      <Ol>
        {Array.from({ length: 4 }).map((_, index) => (
          <Li key={index}>{t(`risks.${index}`)}</Li>
        ))}

        <Li>
          {t('fraud.warning')}
          <Ul>
            {Array.from({ length: 3 }).map((_, index) => (
              <Li key={index} className="list-[circle]">
                {t(`fraud.details.${index}`)}
              </Li>
            ))}
          </Ul>
        </Li>
      </Ol>

      <P className="mt-16">{t('disclaimer')}</P>
    </section>
  );
};

export default CryptoWarningPage;
