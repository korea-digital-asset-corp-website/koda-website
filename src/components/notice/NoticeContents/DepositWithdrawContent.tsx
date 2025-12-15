import { NoticeDetailItem, NoticeDetailList } from '../NoticeDetailItem';
import { getLocale, getTranslations } from 'next-intl/server';

const DepositWithdrawContent = async () => {
  const t = await getTranslations('modal.depositWithdraw');
  const locale = await getLocale();

  const renderNotice = (index: number) => {
    const notice = t.raw(`notices.${index}`);

    if (typeof notice === 'string') {
      return <span>{notice}</span>;
    }

    return (
      <>
        {notice.before && <span>{notice.before}</span>}
        {notice.highlight && <strong>{notice.highlight}</strong>}
        {notice.highlight1 && <strong>{notice.highlight1}</strong>}
        {notice.middle && <span>{notice.middle}</span>}
        {notice.highlight2 && <strong>{notice.highlight2}</strong>}
        {notice.after && <span>{notice.after}</span>}
        {notice.newline && <br />}
        {notice.additional && <span>{notice.additional}</span>}
      </>
    );
  };

  return (
    <>
      <NoticeDetailList>
        <NoticeDetailItem>{renderNotice(0)}</NoticeDetailItem>
        <NoticeDetailItem>{renderNotice(1)}</NoticeDetailItem>
        <NoticeDetailItem>{renderNotice(2)}</NoticeDetailItem>
        <NoticeDetailItem>{renderNotice(3)}</NoticeDetailItem>

        <NoticeDetailList>
          <NoticeDetailItem indent={2} marker="circle">
            <strong>{t('supportedNetworks.label')}</strong>: {t('supportedNetworks.value')}
          </NoticeDetailItem>
        </NoticeDetailList>
        <NoticeDetailItem>{renderNotice(4)}</NoticeDetailItem>

        <NoticeDetailList>
          <NoticeDetailItem indent={1} marker="diamond">
            <strong>{t('depositProcess.label')}</strong>: {t('depositProcess.value')}
          </NoticeDetailItem>
        </NoticeDetailList>

        <NoticeDetailList>
          <NoticeDetailItem indent={1} marker="diamond">
            <strong>{t('withdrawalProcess.label')}</strong>: {t('withdrawalProcess.value')}
          </NoticeDetailItem>
        </NoticeDetailList>
      </NoticeDetailList>

      <NoticeDetailList>
        <NoticeDetailItem>{renderNotice(5)}</NoticeDetailItem>
        <NoticeDetailItem>{renderNotice(6)}</NoticeDetailItem>
        <NoticeDetailItem>{renderNotice(7)}</NoticeDetailItem>
        <NoticeDetailItem>{renderNotice(8)}</NoticeDetailItem>
        <NoticeDetailItem>{renderNotice(9)}</NoticeDetailItem>
      </NoticeDetailList>

      <br />
      <NoticeDetailList>
        <NoticeDetailItem marker="circle">
          {t('contact.label')} :{' '}
          {locale === 'en' ? (
            <a href="mailto:support@kodax.com" className="hover:underline">
              {t('contact.value')}
            </a>
          ) : (
            <>
              가상자산 입출금 담당자
              <a href="tel:02-561-4762" className="hover:underline">
                (☏ 02-561-4762)
              </a>
            </>
          )}
        </NoticeDetailItem>
      </NoticeDetailList>
    </>
  );
};

export default DepositWithdrawContent;
