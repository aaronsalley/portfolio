import Link from 'next/link';
import Button from '../../atoms/Button';

interface InnovationItem {
  title: string;
  firm: string;
  uri: string;
}

export default function InnovationItem({ title, firm, uri }: InnovationItem) {
  return (
    <li>
      <Link href={uri}>
        <h3>{title}</h3>
        <p>{firm}</p>
        <Button>Read more</Button>
      </Link>
    </li>
  );
}
