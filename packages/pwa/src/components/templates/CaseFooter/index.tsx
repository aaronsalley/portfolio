import React from "react";
import Button from "../../atoms/Button";
import style from "./index.module.scss";

const CaseFooter = ({}: React.ComponentProps<any>): React.ReactElement => {
  const CTA = (
    <React.Fragment>
      <i className={"fas fa-arrow-left"}></i>Back to Projects
    </React.Fragment>
  );

  return (
    <footer className={style.container}>
      <Button href={"/projects"} CTA={CTA} title={""} />
    </footer>
  );
};

export default CaseFooter;
