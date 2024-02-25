import WorkItem from '../../molecules/WorkItem';

export default function WorkList(posts: any) {
  const items = [];
  const maxPosts = Object.keys(posts).length;

  for (let i = 0; i < maxPosts; i++) {
    items.push(<WorkItem {...posts[i]} key={i} />);
  }

  return (
    <section id='work'>
      <h2>Product Work</h2>
      <ul>{items}</ul>
    </section>
  );
}
