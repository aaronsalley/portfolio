import Link from 'next/link';
import Button from '../../atoms/Button';

interface InnovationItem {
  title: { rendered: string };
  firm: string;
}

export default function InnovationItem({ title, firm }: InnovationItem) {
  return (
    <li>
      <Link href={''}></Link>
      <h3>{title?.rendered}</h3>
      <p>{firm}</p>
      <Button>Read more</Button>
    </li>
  );
}
