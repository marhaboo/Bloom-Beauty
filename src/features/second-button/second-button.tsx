import React from "react";

type ButtonProps = {
  text: String;
  property?: String;
};

const SecondButton = ({ text, property }: ButtonProps) => {
  return (
    <button
      className={`text-[#383838] ${property} font-medium hover:cursor-pointer text-sm px-[55px] py-[10px] `}
    >
      {text} →
    </button>
  );
};

export default SecondButton;
