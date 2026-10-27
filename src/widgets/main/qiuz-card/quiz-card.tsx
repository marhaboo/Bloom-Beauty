import Button from "@/features/base-button/Button";
import Image from "next/image";
import React from "react";
import beautyKit from "./images/Mask group.png";
import beautyKitBack from "./images/Mask group_back.png";
const QuizCard = () => {
  return (
    <section className="relative isolate min-h-[360px] overflow-hidden rounded-[2rem] bg-[#f5e8e4] px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[400px] lg:px-16">
      <div className="pointer-events-none absolute -right-10 -top-20 -z-10 h-64 w-64 rounded-full bg-white/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[15%] -z-10 h-36 w-36 rounded-full bg-[#d5b9ab]/45 blur-3xl" />
      <div className="relative z-10 flex min-h-[280px] flex-col justify-center gap-8 md:w-[58%] lg:min-h-[320px]">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/45 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8e6e66] backdrop-blur-md">
          Your skin, your ritual
        </div>
        <div>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-[#20372e] sm:text-5xl">
            Meet your skin
            <br />
            where it is.
          </h2>
          <p className="mt-4 max-w-[390px] text-sm leading-6 text-[#657168] sm:text-base sm:leading-7">
            A few thoughtful questions. A routine that feels a little more like
            you.
          </p>
        </div>
        <Button
          property="w-full sm:w-fit"
          text="Find your ritual"
          href="/shop-all"
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-[52%] items-end justify-center md:flex">
        <Image
          alt="A woman enjoying her skincare ritual"
          src={beautyKit}
          className="relative z-10 h-[85%] w-[75%] object-contain object-bottom drop-shadow-[0_20px_25px_rgba(87,58,51,0.12)]"
        />
        <Image
          alt=""
          aria-hidden="true"
          src={beautyKitBack}
          className="absolute bottom-8 right-14 h-[70%] w-[70%] object-contain opacity-70"
        />
      </div>
    </section>
  );
};

export default QuizCard;
