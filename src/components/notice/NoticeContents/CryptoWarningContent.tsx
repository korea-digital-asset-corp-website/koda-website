import { NoticeDetailItem, NoticeDetailList } from '../NoticeDetailItem';
import { getTranslations } from 'next-intl/server';

const CryptoWarningContent = async () => {
  const t = await getTranslations('cryptoWarning');

  return (
    <>
      <p className="text-body-sm lg:text-body-md">{t('introduction')}</p>

      <NoticeDetailList>
        {Array.from({ length: 4 }).map((_, index) => (
          <NoticeDetailItem key={index}>{t(`risks.${index}`)}</NoticeDetailItem>
        ))}

        <NoticeDetailItem>
          {t('fraud.warning')}
          <NoticeDetailList>
            {Array.from({ length: 3 }).map((_, index) => (
              <NoticeDetailItem key={index} marker="circle">
                {t(`fraud.details.${index}`)}
              </NoticeDetailItem>
            ))}
          </NoticeDetailList>
        </NoticeDetailItem>
      </NoticeDetailList>

      <br />
      <p className="text-body-sm lg:text-body-md">{t('disclaimer')}</p>
    </>
  );
};

export default CryptoWarningContent;
