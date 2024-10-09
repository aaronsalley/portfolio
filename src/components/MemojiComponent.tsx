"use client";

import Image from "next/image";
import memoji_waving from "../assets/images/memoji_waving.svg?url";
import memoji_shruging from "../assets/images/memoji_shrug.svg?url";
import memoji_computer from "../assets/images/memoji_computer.svg?url";
import {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import calculatedCSS from "../utils/calculatedCSS";

export enum memoji {
  waving,
  shruging,
  computer,
}

export default function MemojiComponent({ action = memoji.waving, size = 72 }) {
  const [scale, setMemojiScale] = useState(450);
  const [top, setMemojiTop]: [
    string | number,
    Dispatch<SetStateAction<string | number>>
  ] = useState("calc(100vh - 450px)");
  const [left, setMemojiLeft] = useState(-38);

  const [style, setStyle]: [
    CSSProperties,
    Dispatch<SetStateAction<CSSProperties>>
  ] = useState({});

  const image = [memoji_waving, memoji_shruging, memoji_computer];

  useEffect(() => {
    const mediaBreakpoint = calculatedCSS("--bs-breakpoint-lg");

    const handleScroll = () => {
      let height = window.innerHeight;
      let width = window.innerWidth;

      const scrollTop = window.scrollY;
      const scaleFactor = (height - scrollTop * 2) / height;

      const globalMargin = parseInt(calculatedCSS("--global-margin"));

      setMemojiTop(Math.max(height * scaleFactor - scale, 0));
      setMemojiLeft(Math.min(-38 * scaleFactor, globalMargin - 16)); // TODO: fix left edge tracking lag on large screens

      if (width > parseInt(mediaBreakpoint)) {
        setMemojiScale(Math.max(size * ((450 / size) * scaleFactor), size));
        setStyle({
          top: top,
          left: left,
          opacity: 1,
        });
      } else {
        setStyle({});
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scale, top, left]);

  return (
    <Image
      src={image[action]}
      alt={`My memoji`}
      width={scale}
      height={scale}
      style={style}
    />
  );
}
