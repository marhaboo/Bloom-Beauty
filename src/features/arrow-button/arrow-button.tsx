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

  const className = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-[#526258] transition hover:bg-[#f5e8e4] hover:text-[#20372e] ${property}`;

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
