import Link from "next/link";

export default function Button({
  children,
  onClick,
  href,
  variant,
  target,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: string;
  target?: string;
}) {
  const classNames = [
    "px-4 py-2 bg-salley-accent text-salley-light rounded transition",
    variant === "hollow" &&
      "bg-transparent border border-salley-accent text-salley-accent!",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classNames} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}
