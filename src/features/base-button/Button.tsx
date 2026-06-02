import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  property?: string;
  href?: string;
};

const Button = ({ text, property = "", href }: ButtonProps) => {
  const className = `text-white md:w-auto rounded-sm ${property} hover:cursor-pointer  bg-[#F5A3B7] hover:bg-[#323232]  text-sm px-[55px] py-[10px] inline-block text-center`;

  if (href?.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {text}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={className}>
        {text}
      </Link>
    );
  }

  return <button type="button" className={className}>{text}</button>;
};

export default Button;
