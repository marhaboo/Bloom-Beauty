import Link from "next/link";
import React from "react";

type PrimaryButtonType = {
  text: string;
  classname?: string;
  href?: string;
  onClick?: () => void;
};

const PrimaryButtton = ({ text, classname, href, onClick }: PrimaryButtonType) => {
  const className = `block min-h-11 w-full max-w-[246px] cursor-pointer rounded-full border border-[#ded4c8] bg-white/75 px-5 py-2.5 text-center text-xs font-medium uppercase tracking-[0.1em] text-[#263f36] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#263f36] hover:bg-[#263f36] hover:text-white ${classname ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {text}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryButtton;
