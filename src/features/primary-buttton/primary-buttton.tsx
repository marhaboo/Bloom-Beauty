import React from "react";

type PrimaryButtonType = {
  text: string;
  classname?: string;
};
const PrimaryButtton = ({ text, classname }: PrimaryButtonType) => {
  return (
    <button
      className={`border-[#383838] ${classname} w-[246px] py-2  border rounded p-1 cursor-pointer hover:bg-[#323232] hover:text-white`}
    >
      {text}
    </button>
  );
};

export default PrimaryButtton;
