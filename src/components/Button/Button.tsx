import { CSSProperties } from "react";
import Link from "next/link";
import style from "./style.module.scss";

export default function Button(
  props: {
    label: string | null;
    type?: "button" | "submit" | "reset";
    variant?: "filled" | "hollow" | "ghost";
    classes?: CSSProperties;
    href?: string;
  } = {
    label: null,
    type: "button",
    variant: null,
    classes: null,
    href: null,
  },
): any {
  return props.href ? <UILink {...props} /> : <UIButton {...props} />;
}

function UILink(props: any) {
  const { variant, classes, href, label } = props;

  return (
    <Link
      className={[
        style.container,
        "uppercase tracking-widest",
        style[variant],
      ].join(" ")}
      style={classes}
      href={href}
    >
      {label}
      <i className="fa-solid fa-up-right-from-square"></i>
    </Link>
  );
}

function UIButton(props: any) {
  const { variant, classes, type, label } = props;

  return (
    <button
      className={[
        style.container,
        "uppercase tracking-widest",
        style[variant],
      ].join(" ")}
      type={type}
      style={classes}
    >
      {label}
      <i className="fa-solid fa-up-right-from-square"></i>
    </button>
  );
}
