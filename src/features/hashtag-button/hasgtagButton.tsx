import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  href?: string;
};

const HasgtagButton = ({ text, href }: ButtonProps) => {
  const className =
    "inline-flex min-h-8 items-center rounded-full border border-[#e9e3dc] bg-white/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-[#707970] backdrop-blur-md transition hover:border-[#d3b6a8] hover:bg-[#f5e8e4] hover:text-[#20372e]";

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
