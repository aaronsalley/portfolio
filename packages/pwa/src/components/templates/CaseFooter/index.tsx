import Button from "../../atoms/Button";
import style from "./index.module.scss";

const CaseFooter = (): React.ReactElement => {
  const CTA = (
    <>
      <i className={"fas fa-arrow-left"} aria-hidden />
      Back to Projects
    </>
  );

  return (
    <footer className={style.container}>
      <Button href={"/projects"} CTA={CTA} title={""} />
    </footer>
  );
};

export default CaseFooter;
