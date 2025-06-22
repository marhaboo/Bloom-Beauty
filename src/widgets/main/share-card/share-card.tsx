"use client";
import Image_1 from "./images/1inst shots-2.png";
import Image_2 from "./images/img.png";
import Image_3 from "./images/1inst shots-3.png";
import Image_4 from "./images/1inst shots.png";
import Image_5 from "./images/inst shots-1.png";
import Image_6 from "./images/inst shots-2.png";
import Image_7 from "./images/inst shots-3.png";
import Image_8 from "./images/inst shots.png";
import Icon from "./images/flower.svg";
import Image from "next/image";
import Button from "@/features/base-button/Button";
import { Instagram } from "lucide-react";
const ShareCard = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <div className="flex justify-center text-[#383838] font-bold items-center gap-8">
        <Image
          src={Icon}
          alt="icon"
          width={13}
          height={50}
          className="rotate-270  scale-x-[-1]"
        />
        <h3 className="text-2xl">
          SHARE HOW YOU BLOSSOMED WITH{" "}
          <span className="text-[#F5A3B7]">#BLOOMBEAUTY</span>{" "}
        </h3>
        <Image
          src={Icon}
          alt="icon"
          width={13}
          height={50}
          className="rotate-90"
        />
      </div>
      <p className="text-[#697586] text-[18px]">See all</p>
      <div className="relative w-full ">
        <div className="flex mt-10 mb-5 gap-1 flex-wrap justify-center  ">
          {[
            Image_1,
            Image_2,
            Image_3,
            Image_4,
            Image_5,
            Image_6,
            Image_7,
            Image_8,
          ].map((img, index) => (
            <div
              key={index}
              className="inline-block group relative  mr-4 min-w-[250px]"
            >
              <Image
                className=" pb-3  group-hover:blur-xs transition duration-300 ease-in-out"
                src={img}
                alt="Beauty Kit"
              />
              <div className="flex flex-col opacity-0 group-hover:opacity-100 absolute top-45 left-15 gap-3">
                <div
                  className="flex  text-white bg-[#A5A5A5] hover:opacity-100 opacity-70 p-2 rounded-sm cursor-pointer
                 gap-2 justify-center "
                >
                  <button>See in </button> <Instagram />
                </div>
                <Button text={"Buy Now"} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button text={"Follow us"} />
    </div>
  );
};

export default ShareCard;
