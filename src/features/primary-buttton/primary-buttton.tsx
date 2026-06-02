import Link from "next/link";
import React from "react";

type PrimaryButtonType = {
  text: string;
  classname?: string;
  href?: string;
};

const PrimaryButtton = ({ text, classname, href }: PrimaryButtonType) => {
  const className = `border-[#383838] ${classname ?? ""} w-full max-w-[246px] py-2 border rounded p-1 cursor-pointer hover:bg-[#323232] hover:text-white block text-center text-sm sm:text-base`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {text}
      </Link>
    );
  }

  return <button className={className}>{text}</button>;
};

export default PrimaryButtton;
