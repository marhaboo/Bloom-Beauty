"use client";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import PinteresIcon from "./images/Vector-1.svg";
import TwitterIcon from "./images/Vector-2.svg";
import FacebookIcon from "./images/Vector.svg";
import InstagramIcon from "./images/Vector-3.svg";
import TelegramIcon from "./images/Vector-4.svg";
import logo from "../../../../public/Bloom Beauty_2.svg";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/navigation";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      setSubscribeMessage("Please enter your email address.");
      return;
    }
    setSubscribeMessage("Thank you for subscribing! (Demo)");
    setEmail("");
  };

  return (
    <div className="flex flex-col  ">
      <div
        className="font-medium px-5 border-b border-b-[#B0A6BD] "
        style={{
          backgroundImage:
            "linear-gradient(to right, #252525 0%, #3A3A3A 48%, #323232 100%)",
        }}
      >
        <div className="flex  justify-between md:justify-center gap-5 pt-10 ">
          <Link href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Image src={FacebookIcon} alt="FacebookIcon" />
          </Link>
          <Link href={SOCIAL_LINKS.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <Image src={PinteresIcon} alt="PinteresIcon" />
          </Link>
          <Link href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Image src={TwitterIcon} alt="TwitterIcon" />
          </Link>
          <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Image src={InstagramIcon} alt="InstagramIcon" />
          </Link>
          <Link href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <Image src={TelegramIcon} alt="TelegramIcon" />
          </Link>
        </div>
        <div className="text-white flex-col md:flex-row flex justify-between gap-5 md:gap-0  py-10   text-[14px] ">
          <div className="flex flex-col md:w-[176px] gap-3 ">
            <Link href="/">
              <Image src={logo} alt="Bloom Beauty Logo" />
            </Link>
            <div className="flex flex-col gap-1">
              <p className="md:text-[12px] text-[14px] font-normal">
                Discover nature&apos;s beauty with our natural care products.
              </p>
              <div className="flex gap-2 items-center">
                <Phone className="text-[#F5A3B7] w-[14px] h-[14px] font-normal" />
                <a href="tel:+380501234567" className="hover:text-[#F5A3B7]">
                  + 38 050 123 45 67
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="text-[#F5A3B7] w-[14px] h-[14px] font-normal" />
                <a href="mailto:bloombt@kmail.com" className="hover:text-[#F5A3B7]">
                  bloombt@kmail.com{" "}
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <MapPin className="text-[#F5A3B7] w-[14px] h-[14px] font-normal" />
                <Link href="/about-us?tab=contact-us" className="hover:text-[#F5A3B7]">
                  Kiyv, Ukraine{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[#BFB9CF] text">HELP</p>
              <p>
                <Link href={"/about-us?tab=contact-us"}>Contact us</Link>
              </p>
              <p>
                <Link href={"/about-us?tab=faqs"}>FAQ</Link>
              </p>
              <p>
                <Link href={"/about-us?tab=sh-returns"}>Shipping & Returns</Link>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#BFB9CF] text">MY ACCOUNT</p>
              <p>
                <Link href={"/account?tab=addresses"}>Addresses</Link>
              </p>
              <p>
                <Link href={"/account?tab=orders"}>Order Status</Link>
              </p>
              <p>
                <Link href={"/account?tab=wishlist"}>Wishlist</Link>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#BFB9CF] text">CUSTOMER CARE</p>
              <p>
                <Link href={"/about-us"}>About us</Link>
              </p>
              <p>
                <Link href={"/blog"}>Blog</Link>
              </p>
            </div>
          </div>
          <form
            className="flex flex-col items-center md:items-start gap-1"
            onSubmit={handleSubscribe}
          >
            <p>SIGN UP FOR EMAILS</p>
            <p className="text-[12px] font-normal">
              Stay informed, subscribe to our newsletter now!
            </p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 text-[#BFB9CF] w-full md:w-auto rounded bg-white"
              name="email"
              id="footer-email"
            />
            <button
              type="submit"
              className={`text-white  font-medium hover:cursor-pointer text-sm self-start py-[10px] hover:text-[#F5A3B7]`}
            >
              Subscribe →
            </button>
            {subscribeMessage && (
              <p className="text-[12px] text-[#F5A3B7]">{subscribeMessage}</p>
            )}
          </form>
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
          <p>
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </p>
          <p>
            <Link href={"/terms"}>Terms and conditions</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
