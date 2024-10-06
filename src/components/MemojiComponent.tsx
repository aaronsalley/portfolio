import Image from "next/image";
import memoji_waving from "../assets/images/memoji_waving.svg?url";
import memoji_shruging from "../assets/images/memoji_shrug.svg?url";

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
