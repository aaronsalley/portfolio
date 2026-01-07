import type { Metadata } from "next";
import "@/assets/global.css";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { GoogleTagManagerScript, GTM_no_script } from "@/lib/gtm";

export const metadata: Metadata = {
  title: "Aaron Salley | Digital Creative Studio",
  description:
    "Boutique studio crafting client-tailored digital solutions via high-end creative, execution, and strategy services. Intention. Integration. Illumination.",
  keywords: [
    "Go-to-market Strategy",
    "End-to-end Product Management",
    "UI/UX Design & Development services",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManagerScript />
      <link
        rel="stylesheet"
        href="https://use.typekit.net/ijb2wkg.css"
        precedence="default"
      ></link>
      <body className="flex min-h-screen flex-col bg-salley-light">
        <GTM_no_script />
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
