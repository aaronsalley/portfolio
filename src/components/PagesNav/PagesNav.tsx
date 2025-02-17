import Link from "next/link";

export default function PagesNav({
  props,
  heading = null,
  classes = null,
}): any {
  return (
    <nav className={classes}>
      {heading ? (
        <p className="pb-[0.63em] subheading font-display font-semibold tracking-normal text-[19px] md:text-[14px]">
          {heading}
        </p>
      ) : null}
      <ul className="flex" style={{ listStyle: "none" }}>
        {props.map((page, i) => (
          <li
            className="body uppercase tracking-[0.1em] text-[11px] md:text-[15px]"
            key={i}
          >
            <Link href={page.uri}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
