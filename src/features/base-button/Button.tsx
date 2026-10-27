import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  property?: string;
  href?: string;
};

const Button = ({ text, property = "", href }: ButtonProps) => {
  const className = `inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-[#263f36]/95 px-7 py-3 text-center text-xs font-medium uppercase tracking-[0.1em] text-white shadow-[0_8px_24px_-12px_rgba(38,63,54,0.65)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-[#bd717a] hover:shadow-[0_12px_28px_-12px_rgba(189,113,122,0.6)] active:translate-y-0 md:w-auto ${property}`;

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
