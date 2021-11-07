import type { NextPage } from "next";
import Showcase from "../components/templates/Showcase";

const Page: NextPage = ({}: React.ComponentProps<any>): React.ReactElement => {
  return (
    <main>
      <Showcase />
    </main>
  );
};

export default Page;
