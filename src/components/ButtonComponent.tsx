import Link from "next/link";

export default function ButtonComponent({ url, label }) {
  return (
    <Link href={url} target="_blank">
      {label}
    </Link>
  );
}
