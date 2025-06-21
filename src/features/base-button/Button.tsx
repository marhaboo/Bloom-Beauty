import React from "react";

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="text-white rounded-sm hover:cursor-pointer  bg-[#F5A3B7] hover:bg-[#e68ca3]  text-sm px-[55px] py-[10px] ">
      {text}
    </button>
  );
};

export default Button;
