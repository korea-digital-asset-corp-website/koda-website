import CompanyInfo from './CompanyInfo';
import FooterMenus from './FooterMenus';
import Copyright from './Copyright';

const Footer = async () => {
  return (
    <footer className="bg-black w-full border-t text-gray-200 h-[995px] lg:h-[571px]" role="contentinfo">
      <div className="max-w-[1440px] mt-[120px] mb-[80px] mx-auto px-[20px] lg:px-[40px]">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0">
          <CompanyInfo />
          <FooterMenus />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
