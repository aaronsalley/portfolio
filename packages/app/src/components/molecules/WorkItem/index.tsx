import Button from '../../atoms/Button';

interface WorkItem {
  title: { rendered: string };
  firm: string;
  excerpt: { rendered: string };
}

export default function WorkItem({ title, firm, excerpt }: WorkItem) {
  return (
    <li>
      <h3>
        {title.rendered}
        <small>{firm}</small>
      </h3>
      <div>
        {excerpt.rendered}
        <Button>Read the case study</Button>
      </div>
    </li>
  );
}
