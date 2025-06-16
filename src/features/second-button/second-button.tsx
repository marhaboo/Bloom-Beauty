import React from "react";

type ButtonProps = {
  text: String;
};

const SecondButton = ({ text }: ButtonProps) => {
  return (
    <button className="text-[#383838] font-medium hover:cursor-pointer text-sm px-[55px] py-[10px] ">
      {text} →
    </button>
  );
};

export default SecondButton;
