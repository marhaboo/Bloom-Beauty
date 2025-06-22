import React from "react";

type ButtonProps = {
  text: string;
};

const HasgtagButton = ({text}:ButtonProps) => {
  return <button className="rounded-full bg-[#EEEDF2] p-2 font-medium text-[12px] hover:bg-[#F7CFDA] ">#{text}</button>;
};

export default HasgtagButton;
