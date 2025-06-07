import Hero from './components/Hero';
import Intro from './components/Intro';
import Offerings from './components/Offerings';
import Positioning from './components/Positioning';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Insights from './components/Insights';
import { Metadata } from 'next';
import fetchPosts from './lib/fetchPosts';
import fetchProjects from './lib/fetchProjects';

import PortfolioImage from '@/assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg';
import ConsultingImage from '@/assets/kelly-sikkema-wdnpaTNwOEQ-unsplash.jpg';
import InsightsImage from '@/assets/riccardo-annandale-7e2pe9wjL9M-unsplash.jpg';

export const metadata: Metadata = {
  title: 'Aaron Salley – Your Partner for Innovation | Digital Creative Studio',
  description:
    'Boutique studio crafting tailored solutions via high-end creative, execution, and strategy services. We specialize in meeting client needs with unique digital products.',
};

export default async function Home() {
  const { caseStudies, offerings, resources } = {
    resources: await fetchPosts(),
    caseStudies: await fetchProjects(),
    offerings: [
      {
        title: 'Portfolio',
        description: 'Description of offering 1.',
        imageUrl: PortfolioImage,
      },
      {
        title: 'Consulting',
        description: 'Description of offering 2.',
        imageUrl: ConsultingImage,
      },
      {
        title: 'Insights',
        description: 'Description of offering 3.',
        imageUrl: InsightsImage,
      },
    ],
  };

  return (
    <main>
      <Hero />
      <Intro />
      <Offerings offerings={offerings} />
      <Positioning />
      <CaseStudies caseStudies={caseStudies} />
      <Services />
      <Insights resources={resources} />
    </main>
  );
}
