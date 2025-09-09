import Link from 'next/link';
import KodaLogo from '@/public/assets/icons/koda.svg';

const KodaMainLogo = () => {
  return (
    <div className="flex items-center">
      <h1>
        <Link href="/" aria-label="홈페이지로 이동">
          <KodaLogo />
        </Link>
      </h1>
    </div>
  );
};

export default KodaMainLogo;
