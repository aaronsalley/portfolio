import { Metadata } from "next";
import { Suspense } from "react";
import CaseStudyGrid from "@/components/CaseStudyGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Selected work spanning product invention, platform strategy, and systems built to scale with clarity and intent.`,
};

export default function PortfolioPage() {
  return (
    <>
      <main>
        <Suspense>
          <CaseStudyGrid />
        </Suspense>
      </main>
    </>
  );
}
