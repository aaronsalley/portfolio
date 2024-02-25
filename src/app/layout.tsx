import SiteFooter from '../components/organisms/Footer';
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
