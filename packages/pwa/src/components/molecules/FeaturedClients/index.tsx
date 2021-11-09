import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import style from "./index.module.scss";

const FeaturedClients = ({
  clients = useAppSelector((state: RootState) => state.featuredClients),
}) => {
  const items = clients.map((client: any) => {
    return <li key={client}>{client}</li>;
  });

  return <ul className={style["container"]}>{items}</ul>;
};

export default FeaturedClients;
