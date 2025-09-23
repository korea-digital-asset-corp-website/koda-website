'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useModal } from '@/contexts/ModalContext';
import { ModalNoticeItem, ModalNoticeList } from './ModalNoticeItem';
import { ModalNoticeTable, ModalNoticeTableRow } from './ModalNoticeTable';

export const DepositWithdrawNoticeModal = () => {
  const { closeModal } = useModal();
  const t = useTranslations('modal.depositWithdraw');
  const locale = useLocale();

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
      <div className="px-12 pt-14 pb-4">
        <h2 className="text-headline-md font-bold">{t('title')}</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-12 pt-6 pb-12">
        <ModalNoticeList>
          <ModalNoticeItem>{renderNotice(0)}</ModalNoticeItem>
          <ModalNoticeItem>{renderNotice(1)}</ModalNoticeItem>
          <ModalNoticeItem>{renderNotice(2)}</ModalNoticeItem>
          <ModalNoticeItem>{renderNotice(3)}</ModalNoticeItem>
        </ModalNoticeList>

        <ModalNoticeTable>
          <ModalNoticeTableRow label={t('table.supportedNetworks.label')}>
            {t('table.supportedNetworks.value')}
          </ModalNoticeTableRow>
        </ModalNoticeTable>

        <ModalNoticeList>
          <ModalNoticeItem>{renderNotice(4)}</ModalNoticeItem>
        </ModalNoticeList>

        <ModalNoticeTable>
          <ModalNoticeTableRow label={t('table.depositProcess.label')}>
            {t('table.depositProcess.value')}
          </ModalNoticeTableRow>
          <ModalNoticeTableRow label={t('table.withdrawalProcess.label')}>
            {t('table.withdrawalProcess.value')}
          </ModalNoticeTableRow>
        </ModalNoticeTable>

        <ModalNoticeList>
          <ModalNoticeItem>{renderNotice(5)}</ModalNoticeItem>
          <ModalNoticeItem>{renderNotice(6)}</ModalNoticeItem>
          <ModalNoticeItem>{renderNotice(7)}</ModalNoticeItem>
          <ModalNoticeItem>{renderNotice(8)}</ModalNoticeItem>
          <ModalNoticeItem>{renderNotice(9)}</ModalNoticeItem>
        </ModalNoticeList>
      </div>

      <footer className="border-t border-gray-50 px-4 py-5 lg:px-12 lg:py-6">
        <div className="flex items-center justify-between">
          <address className="flex flex-row text-body-sm lg:text-body-md not-italic">
            <span className="font-bold text-[var(--color-gray-900)] mr-3 lg:mr-4">{t('contact.label')}</span>
            {locale === 'en' ? (
              <a href="mailto:support@kodax.com" className="hover:underline">
                support@kodax.com
              </a>
            ) : (
              <div>
                가상자산 입출금 담당자
                <br className="block lg:hidden" />
                <a href="tel:02-561-4762" className="hover:underline">
                  (02-561-4762)
                </a>
              </div>
            )}
          </address>
          <button
            onClick={closeModal}
            className="cursor-pointer max-w-[80px] lg:max-w-[120px] w-full px-[22px] py-3.5 border rounded-[4px] border-[var(--color-primary-700)] text-label-lg font-semibold text-[var(--color-primary-800)] hover:bg-[var(--color-primary-50)] transition-colors"
          >
            {t('buttons.confirm')}
          </button>
        </div>
      </footer>
    </>
  );
};
