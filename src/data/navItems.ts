interface NavItem {
  key: string;
  href: string;
}

export const navItems: NavItem[] = [
  { key: 'about', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'notice', href: '/notice' },
  { key: 'faq', href: '/faq' },
  { key: 'press', href: '/press' },
];
