import Link from 'next/link';
import Button from '../../atoms/Button';

interface WorkItem {
  title: string;
  uri: string;
  firm: string;
  excerpt: string;
}

export default function WorkItem({ title, uri, firm, excerpt }: WorkItem) {
  return (
    <li>
      <Link href={uri}>
        <h3>
          {title}
          <small>{firm}</small>
        </h3>
        <div>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          <Button>Read the case study</Button>
        </div>
      </Link>
    </li>
  );
}
