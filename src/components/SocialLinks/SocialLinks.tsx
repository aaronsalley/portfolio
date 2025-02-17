import Link from "next/link";

export default function SocialLinks({ classes = null }): any {
  const fontSize = {
    fontSize: "1.5rem",
  };

  return (
    <menu className={classes} style={{ display: "flex", gap: "1.5em" }}>
      <Link href={"mailto:him@aaronsalley.com"}>
        <i className="fa-solid fa-envelope" style={fontSize}></i>
      </Link>
      <Link href={"https://linkedin.com/in/aaronsalley"}>
        <i className="fa-brands fa-linkedin" style={fontSize}></i>
      </Link>
      <Link href={"https://github.com/aaronsalley"}>
        <i className="fa-brands fa-github" style={fontSize}></i>
      </Link>
    </menu>
  );
}
