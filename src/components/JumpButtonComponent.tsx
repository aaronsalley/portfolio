"use client";

import { useEffect, useState } from "react";
import scaleFactor from "../utils/scaleFactor";

export default function JumpButtonComponent() {
  const [fader, setFader] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setFader(scaleFactor());
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <i
      className={" fa-solid fa-circle-arrow-down"}
      style={{ opacity: fader }}
    ></i>
  );
}
