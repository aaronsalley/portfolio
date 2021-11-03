import CaseHeader from "../../organisms/CaseHeader";
import CaseSidebar from "../../organisms/CaseSidebar";

const CaseStudy = ({}: React.ComponentProps<any>): React.ReactElement => {
  return (
    <article>
      <CaseHeader></CaseHeader>
      <section>
        <CaseSidebar></CaseSidebar>
        <main></main>
      </section>
    </article>
  );
};

export default CaseStudy;
