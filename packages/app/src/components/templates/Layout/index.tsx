import SiteFooter from '@/src/components/organisms/SiteFooter';
import SiteHeader from '@/src/components/organisms/SiteHeader';
import Sidebar from '@/src/components/organisms/SiteSidebar';
import { useEffect, useState } from 'react';
import Footer from '../../organisms/Footer';

export default function Layout({ children }: any) {
  const [headerData, setHeaderData] = useState({});
  const [footerData, setFooterData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const fetchHeader = await fetch(
        process.env.WP_GRAPH_URL ?? 'http://aarons-macbook-pro.local/graph',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
                query HeaderQuery {
                  generalSettings {
                    title
                  }
                  menu_items: menuItems(where: {location: SITE_NAV}) {
                    nodes {
                      label
                      uri
                    }
                  }                
                }
              `,
          }),
        }
      );
      const headerRes = await fetchHeader.json();
      const menu_items = headerRes.data?.menu_items?.nodes;
      setHeaderData({ ...headerRes.data?.generalSettings, menu_items });

      const fetchFooter = await fetch(
        process.env.WP_GRAPH_URL ?? 'http://aarons-macbook-pro.local/graph',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
                query FooterQuery {
                  blog: posts(where: {categoryName: "blog"}) {
                    nodes {
                      title
                      uri
                    }
                  }
                }
              `,
          }),
        }
      );
      const footerRes = await fetchFooter.json();
      const blog = footerRes.data?.blog?.nodes;
      setFooterData({ ...footerRes.data, blog });
    };

    fetchData();
  }, []);

  return (
    <>
      <SiteHeader {...(headerData as any)} />
      {children}
      <Footer {...(footerData as any)} />
      <Sidebar />
      <SiteFooter />
    </>
  );
}
