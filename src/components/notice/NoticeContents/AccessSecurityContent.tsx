import { getTranslations } from 'next-intl/server';

export default async function AccessSecurityContent() {
  const t = await getTranslations('modal.accessSecurity');

  return (
    <article className="max-w-3xl space-y-8 leading-7 break-keep">
      <div className="space-y-3">
        <p className="whitespace-pre-line">{t('greeting')}</p>
        <p>{t('intro')}</p>
      </div>
      <section className="space-y-3">
        <h2 className="text-xl font-bold">{t('systemsHeading')}</h2>
        <p>{t('systemsIntro')}</p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>{t('publicLabel')}</strong>: {t('publicText')}</li>
          <li><strong>{t('clientLabel')}</strong>: {t('clientText')}</li>
        </ul>
        <p>{t('separation')}</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-bold">{t('ipHeading')}</h2>
        <p className="whitespace-pre-line">{t('ipIntro')}</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>{t('existingIp')}</li>
          <li>{t('changedIp')}</li>
        </ul>
        <div className="rounded-lg bg-primary-50 p-4">
          <h3 className="mb-1 font-bold">{t('support')}</h3>
          <p>{t('emailLabel')}: <a className="underline underline-offset-4" href="mailto:support@kodax.com">support@kodax.com</a></p>
          <p>{t('phoneLabel')}: <a className="underline underline-offset-4" href="tel:02-561-4762">02-561-4762</a></p>
        </div>
        <p>{t('scope')}</p>
      </section>
      <div className="space-y-3">
        <p>{t('closing')}</p>
        <p>{t('thanks')}</p>
      </div>
    </article>
  );
}
