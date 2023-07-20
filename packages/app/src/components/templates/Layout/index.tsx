import SiteFooter from '@/src/components/organisms/SiteFooter';
import SiteHeader from '@/src/components/organisms/SiteHeader';
import Sidebar from '@/src/components/organisms/SiteSidebar';
import { fetchData } from '@/src/lib/wordpress';
import { useEffect, useState } from 'react';
import Footer from '../../organisms/Footer';

export default function Layout({ children }: any) {
  const [headerData, setHeaderData] = useState({});
  const [footerData, setFooterData] = useState({});
  const [socialData, setSocialData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const res = await fetchData();
      const navItems = res.data?.navItems?.nodes;
      const socialItems = res.data?.socialItems?.nodes;
      const blog = res.data?.blog?.nodes;

      setHeaderData({ ...res.data?.generalSettings, menu_items: navItems });
      setSocialData({ menu_items: socialItems });
      setFooterData({ blog });
    };

    loadData();
  }, []);

  return (
    <>
      <SiteHeader {...(headerData as any)} />
      {children}
      <Footer {...(footerData as any)} />
      <Sidebar {...(socialData as any)} />
      <SiteFooter />
    </>
  );
}
