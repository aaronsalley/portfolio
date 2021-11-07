import type { NextPage } from "next";
import Showcase from "../components/templates/Showcase";

const Page: NextPage = ({}: React.ComponentProps<any>): React.ReactElement => {
  return (
    <div>
      This is the home page.
      <Showcase max={3} />
    </div>
  );
};

export default Page;
