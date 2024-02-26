import Intro from '../components/molecules/Intro';
import FeaturesList from '../components/organisms/FeaturesList';
import { work } from '../lib/testdata';

export default function Page() {
  return (
    <main>
      <Intro />
      <FeaturesList children={work} />
    </main>
  );
}
