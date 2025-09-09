import ContactInfo from './ContactInfo';
import SupportMenu from './SupportMenu';
import TermsMenu from './TermsMenu';

const FooterMenus = () => {
  return (
    <div className="order-2 lg:order-none flex flex-col lg:flex-row gap-6 lg:gap-8 text-body-sm lg:text-body-md">
      <TermsMenu />
      <SupportMenu />
      <ContactInfo />
    </div>
  );
};

export default FooterMenus;
