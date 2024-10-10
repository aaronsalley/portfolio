type Service = {
  title: string;
  number?: number;
  children?: any;
};

const ServiceItem = ({ title, number, children }: Service) => (
  <li>
    <h3>
      <small>{number.toString().padStart(2, "0")} </small>
      {title}
    </h3>
    {children}
  </li>
);

export default function ServiceItems({ list }: { list: Service[] }) {
  if (!list || list.length < 1) return;

  const items = [];

  list.map((service: Service, i: number) => {
    const { title, children } = service;
    items.push(
      <ServiceItem title={title} number={i + 1} key={i}>
        {children}
      </ServiceItem>
    );
  });

  return <ul>{items}</ul>;
}
