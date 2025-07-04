import React from "react";

type ButtonProps = {
  text: string;
  property?: string;
};

const Button = ({ text, property = "" }: ButtonProps) => {
  return (
    <button
      className={`text-white md:w-auto rounded-sm ${property} hover:cursor-pointer  bg-[#F5A3B7] hover:bg-[#323232]  text-sm px-[55px] py-[10px] `}
    >
      {text}
    </button>
  );
};

export default Button;
