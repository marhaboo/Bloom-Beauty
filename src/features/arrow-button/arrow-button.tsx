import React from "react";

type ButtonProps = {
  text: string;
  property?: string;
  arrow?: "right" | "left" | "down" | "up";
};

const ArrowButton = ({ text, property = "", arrow = "right" }: ButtonProps) => {
  const arrowSymbol =
    arrow === "right"
      ? "→"
      : arrow === "left"
      ? "←"
      : arrow === "up"
      ? "↑"
      : "↓";

  return (
    <button
      className={`text-[#383838] ${property} font-medium hover:cursor-pointer text-sm px-[55px] py-[10px] `}
    >
      {text} <span className="text-[18px]"> {arrowSymbol}</span>
    </button>
  );
};

export default ArrowButton;
