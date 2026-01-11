const formatOrderedList = (num: number) =>
  `0-${num.toString().padStart(3, "0")}`;

export default formatOrderedList;
