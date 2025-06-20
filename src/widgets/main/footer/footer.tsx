import Image from "next/image";
import React from "react";
import PinteresIcon from "./images/Vector-1.svg";
import TwitterIcon from "./images/Vector-2.svg";
import FacebookIcon from "./images/Vector.svg";
import InstagramIcon from "./images/Vector-3.svg";
import TelegramIcon from "./images/Vector-4.svg";
import logo from "../../../../public/Bloom Beauty_2.svg";
import { Mail, MapPin, Phone } from "lucide-react";
const Footer = () => {
  return (
    <div className="flex flex-col  ">
      <div
        className="font-medium px-5 border-b border-b-[#B0A6BD] "
        style={{
          backgroundImage:
            "linear-gradient(to right, #252525 0%, #3A3A3A 48%, #323232 100%)",
        }}
      >
        <div className="flex justify-center gap-5 pt-10 ">
          <Image src={FacebookIcon} alt="FacebookIcon" />
          <Image src={PinteresIcon} alt="PinteresIcon" />
          <Image src={TwitterIcon} alt="TwitterIcon" />
          <Image src={InstagramIcon} alt="InstagramIcon" />
          <Image src={TelegramIcon} alt="TelegramIcon" />
        </div>
        <div className="text-white flex justify-between  py-10   text-[14px] ">
          <div className="flex flex-col w-[176px] gap-3">
            <Image src={logo} alt="Bloom Beauty Logo" />
            <div className="flex flex-col gap-1">
              <p className="text-[12px] font-normal">
                Discover nature's beauty with our natural care products.
              </p>
              <div className="flex gap-2 items-center">
                <Phone className="text-[#F5A3B7] w-[14px] h-[14px] font-normal" />
                <p>+ 38 050 123 45 67</p>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="text-[#F5A3B7] w-[14px] h-[14px] font-normal" />
                <p>bloombt@kmail.com </p>
              </div>
              <div className="flex gap-2 items-center">
                <MapPin className="text-[#F5A3B7] w-[14px] h-[14px] font-normal" />
                <p>Kiyv, Ukraine </p>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[#BFB9CF] text">HELP</p>
              <p>Contact us</p>
              <p>FAQ</p>
              <p>Shipping & Returns</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#BFB9CF] text">MY ACCOUNT</p>
              <p>Addresses</p>
              <p>Order Status</p>
              <p>Wishlist</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#BFB9CF] text">CUSTOMER CARE</p>
              <p>About us</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p>SIGN UP FOR EMAILS</p>
            <p className="text-[12px] font-normal">
              Stay informed, subscribe to our newsletter now!
            </p>
            <input
              type="text"
              placeholder="Email"
              className="p-2 text-[#BFB9CF] bg-white"
              name=""
              id=""
            />
            <button
              className={`text-white  font-medium hover:cursor-pointer text-sm self-start py-[10px] `}
            >
              Subscribe →
            </button>
          </div>
        </div>
      </div>
      <div
        className="text-[#BFB9CF] p-5 text-[12px] flex justify-between "
        style={{
          backgroundImage:
            "linear-gradient(to right, #252525 0%, #3A3A3A 48%, #323232 100%)",
        }}
      >
        <p>© 2023 Bloom Beauty </p>
        <div className="flex gap-3">
          <p>Privacy Policy</p>
          <p>Terms and conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
