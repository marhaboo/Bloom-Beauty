import Image from "next/image";
import beautyKit from "./images/beauty kit.png";
import Button from "@/features/base-button/Button";
export default function HeroSection() {
  return (
    <>
      <div className="relative w-full h-[500px] flex justify-end bg-[#F5E0E5]">
        <div className="absolute w-[562px] left-30 flex flex-col items-start gap-3 top-30 text-[#383838] ">
          <h2 className=" text-[40px] font-bold">
            Discover your inner beauty with Blossom Glow Kit
          </h2>
          <p className="text-[18px]" >Great gift for yourself and loved ones</p>
        <Button text={"Shop Now"} />
        </div>

        <Image alt="Beauty Kit" src={beautyKit} className=" h-full  w-200" />
      </div>
    </>
  );
}
