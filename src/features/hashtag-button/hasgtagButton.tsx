import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  href?: string;
};

const HasgtagButton = ({ text, href }: ButtonProps) => {
  const className =
    "rounded-full bg-[#EEEDF2] p-2 font-medium text-[12px] hover:bg-[#F7CFDA] ";

  if (href) {
    return (
      <Link href={href} className={className}>
        #{text}
      </Link>
    );
  }

  return <button className={className}>#{text}</button>;
};

export default HasgtagButton;
