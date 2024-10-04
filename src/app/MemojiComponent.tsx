import Image from "next/image";
import memoji_waving from "../../public/memoji_waving.svg";
import memoji_shruging from "../../public/memoji_shrug.svg";

export enum memoji {
  waving,
  shruging,
}

export default function MemojiComponent({
  action = memoji.waving,
  size = 150,
}) {
  const image = [memoji_waving, memoji_shruging];

  return (
    <Image src={image[action]} alt={`My memoji`} width={size} height={size} />
  );
}
