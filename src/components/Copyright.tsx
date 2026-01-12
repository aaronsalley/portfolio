"use client";

export default function Copyright() {
  return (
    <p className="mb-12 w-full text-center font-sans text-xs opacity-30 md:order-last">
      © {new Date().getFullYear()} Aaron Salley LLC. All rights reserved.
    </p>
  );
}
