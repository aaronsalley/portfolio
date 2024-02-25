import SiteFooter from '../components/organisms/SiteFooter';
import SiteHeader from '../components/organisms/SiteHeader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
