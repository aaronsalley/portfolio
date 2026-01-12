const links = [
  { href: "/about", label: "About" },
  // { href: "/portfolio", label: "Portfolio" }, // TODO: Reactivate once case studies are rebuilt
  { href: "/services", label: "Services" },
  {
    href: "https://aaronsalley.medium.com/",
    label: "Insights",
    target: "_blank",
  }, // TODO: Make local and remove target
  { href: "/contact", label: "Contact" },
];

export default function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={`${className}`}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target={link.target}
            rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
