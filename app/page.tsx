import { Metadata } from 'next';
import Intro from './_components/molecules/Intro';
import FeaturesList from './_components/organisms/FeaturesList';
import { work } from './_lib/testdata';

export const metadata: Metadata = {
  title: {
    absolute:
      'Aaron Salley, MBA, POPM, JEDI Master | Intention. Integration. Illumination.',
  },
};

export default function Page() {
  return (
    <main>
      <Intro />
      <FeaturesList children={work} />
    </main>
  );
}
