import { post } from '@/src/inc/post';
import InnovationItem from '../../molecules/InnovationItem';

export default function InnovationList(posts: any[]) {
  const items = [];
  const maxPosts = 3;

  for (let i = 0; i < maxPosts; i++) {
    items.push(<InnovationItem {...posts[i]} key={i} />);
  }

  return (
    <section id='cases'>
      <div>
        <h2>Strategy & Innovation</h2>
        <ul>{items}</ul>
      </div>
    </section>
  );
}
