import Image from "next/image";
import beautyKit from "./images/beauty kit.png";
import Button from "@/features/base-button/Button";
export default function HeroSection() {
  return (
    <>
      <div className="relative w-full h-[500px] flex md:justify-end bg-[#F5E0E5]">
        <div className="absolute w-[210px] md:w-[630px] left-10 md:left-30 flex flex-col  justify-center md:items-start gap-7.5  md:gap-3 top-30 text-[#383838] ">
          <h2 className=" text-[18px] md:text-[40px] font-bold">
            DISCOVER YOUR INNER BEAUTY WITH BLOSSOM GLOW KIT
          </h2>
          <p className="md:text-[18px] w-[150px] md:w-[562px]  text-[14px]">
            Great gift for yourself and loved ones
          </p>
          <Button text={"Shop Now"} />
        </div>
        <Image alt="Beauty Kit" src={beautyKit} width={750} />
      </div>
    </>
  );
}
