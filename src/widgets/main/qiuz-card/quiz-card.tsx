import Button from "@/features/base-button/Button";
import Image from "next/image";
import React from "react";
import beautyKit from "./images/Mask group.png";
import beautyKitBack from "./images/Mask group_back.png";
const QuizCard = () => {
  return (
    <>
      <div className="relative w-full px-5.5 gap-30 flex flex-col md:flex-row justify-end p-5 items-center bg-[#F5E0E5]">
        <Image
          alt="Beauty Kit"
          src={beautyKit}
          className="z-100 md:absolute md:bottom-[-20] md:left-60 w-[326px] h-[342px]"
        />
        <Image
          alt="Beauty Kit Background"
          src={beautyKitBack}
          className="absolute top-[120] left-10 md:top-0 md:left-66"
        />
        <div className=" md:w-[562px] w-full md:left-30 flex flex-col  items-start gap-3 md:top-30 text-[#383838] ">
          <h2 className=" text-[40px] font-bold">The Skin Quiz</h2>
          <p className="text-[18px] w-[350px] sm:w-[400px] ">
            Meet the quiz that will curate a routine just just just as unique as
            you are.
          </p>
          <Button property="w-full px-5" text={"Explore More"} />
        </div>
      </div>
    </>
  );
};

export default QuizCard;
