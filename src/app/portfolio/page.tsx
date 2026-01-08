import { Metadata } from "next";
import CaseStudyGrid from "@/components/CaseStudyGrid";

export const metadata: Metadata = {
  title: "Portfolio | Aaron Salley",
  description: `Explore our portfolio of impactful digital products. See how we partner with diverse clients, applying strategic clarity, integrated design, and holistic lifecycle management to drive tangible results and sustained growth.`,
};

export default function PortfolioPage() {
  return (
    <>
      <main>
        <CaseStudyGrid />
      </main>
    </>
  );
}
