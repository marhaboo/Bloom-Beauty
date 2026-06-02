import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  property?: string;
  arrow?: "right" | "left" | "down" | "up";
  href?: string;
  onClick?: () => void;
};

const ArrowButton = ({
  text,
  property = "",
  arrow = "right",
  href,
  onClick,
}: ButtonProps) => {
  const arrowSymbol =
    arrow === "right"
      ? "→"
      : arrow === "left"
      ? "←"
      : arrow === "up"
      ? "↑"
      : "↓";

  const className = `text-[#383838] ${property} font-medium hover:cursor-pointer text-sm px-[55px] py-[10px] inline-block`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {text} <span className="text-[18px]"> {arrowSymbol}</span>
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {text} <span className="text-[18px]"> {arrowSymbol}</span>
    </button>
  );
};

export default ArrowButton;
