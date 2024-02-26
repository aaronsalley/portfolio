import Intro from './_components/molecules/Intro';
import FeaturesList from './_components/organisms/FeaturesList';
import { work } from './_lib/testdata';

export default function Page() {
  return (
    <main>
      <Intro />
      <FeaturesList children={work} />
    </main>
  );
}
