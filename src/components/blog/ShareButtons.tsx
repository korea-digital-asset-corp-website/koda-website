'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface ShareButtonsProps {
  title: string;
}

const ICON_CLASS = 'w-5 h-5';

const LinkIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M10 14a5 5 0 0 0 7.07 0l3-3A5 5 0 0 0 13 3.93l-1.5 1.5" strokeLinecap="round" />
    <path d="M14 10a5 5 0 0 0-7.07 0l-3 3A5 5 0 0 0 11 20.07l1.5-1.5" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.23l-4.88-6.38L6.5 22H3.34l7.24-8.28L2.8 2h6.39l4.41 5.83L18.9 2Zm-1.1 18.13h1.73L7.29 3.77H5.43L17.8 20.13Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const BUTTON_CLASS =
  'flex items-center justify-center w-10 h-10 border border-gray-50 rounded-[4px] text-gray-500 hover:bg-gray-5020 transition-colors cursor-pointer';

const ShareButtons = ({ title }: ShareButtonsProps) => {
  const t = useTranslations('blog.share');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard 미지원 환경에서는 무동작
    }
  };

  const openShare = (buildUrl: (url: string) => string) => {
    const url = encodeURIComponent(window.location.href);
    window.open(buildUrl(url), '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  return (
    <div className="mt-12 lg:mt-16 pt-6 border-t border-gray-50 flex items-center gap-3">
      <button onClick={handleCopy} className={BUTTON_CLASS} aria-label={copied ? t('copied') : t('copyLink')}>
        {copied ? <CheckIcon /> : <LinkIcon />}
      </button>
      <button
        onClick={() =>
          openShare((url) => `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(title)}`)
        }
        className={BUTTON_CLASS}
        aria-label={t('shareOnX')}
      >
        <XIcon />
      </button>
      <button
        onClick={() => openShare((url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`)}
        className={BUTTON_CLASS}
        aria-label={t('shareOnFacebook')}
      >
        <FacebookIcon />
      </button>
      <button
        onClick={() => openShare((url) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`)}
        className={BUTTON_CLASS}
        aria-label={t('shareOnLinkedIn')}
      >
        <LinkedInIcon />
      </button>
    </div>
  );
};

export default ShareButtons;
