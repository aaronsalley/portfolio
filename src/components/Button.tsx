import Link from "next/link";
// TODO: Add text only style
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
    "px-4 py-2 bg-salley-secondary text-salley-light rounded transition",
    variant === "hollow" &&
      "bg-transparent border border-salley-secondary text-salley-secondary!",
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
