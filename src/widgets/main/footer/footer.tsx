"use client";

import Image from "next/image";
import React, { FormEvent, useState } from "react";
import logo from "../../../../public/Bloom Beauty_2.svg";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/navigation";
import PinterestIcon from "./images/Vector-1.svg";
import TwitterIcon from "./images/Vector-2.svg";
import FacebookIcon from "./images/Vector.svg";
import InstagramIcon from "./images/Vector-3.svg";
import TelegramIcon from "./images/Vector-4.svg";

const socialLinks = [
  { label: "Facebook", href: SOCIAL_LINKS.facebook, icon: FacebookIcon, color: "bg-[#1877f2]" },
  { label: "Pinterest", href: SOCIAL_LINKS.pinterest, icon: PinterestIcon, color: "bg-[#e60023]" },
  { label: "Twitter", href: SOCIAL_LINKS.twitter, icon: TwitterIcon, color: "bg-[#1d9bf0]" },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: InstagramIcon, color: "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]" },
  { label: "Telegram", href: SOCIAL_LINKS.telegram, icon: TelegramIcon, color: "bg-[#229ed9]" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      setSubscribeMessage("Please enter your email address.");
      return;
    }

    setSubscribeMessage("Thanks for your interest. Newsletter signup is coming soon.");
    setEmail("");
  };

  return (
    <footer className="mt-20 overflow-hidden bg-[#263f36] text-[#fcfaf5] sm:mt-28">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-12 sm:px-8 sm:pb-12 sm:pt-16 lg:px-12">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.1fr_0.8fr_0.8fr_1.2fr] md:gap-8 md:pb-14">
          <div className="max-w-[280px]">
            <Link href="/" aria-label="Bloom Beauty home" className="inline-flex">
              <Image src={logo} alt="Bloom Beauty" className="h-auto w-[150px]" />
            </Link>
            <p className="mt-5 text-[15px] leading-7 text-white/75">
              Thoughtful skincare for softer mornings and little moments of
              feeling good in your own skin.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map(({ label, href, icon, color }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Bloom Beauty on ${label}`}
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${color} shadow-sm ring-2 ring-white/10 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:ring-white/40`}
                >
                  <Image
                    src={icon}
                    alt=""
                    className="h-[18px] w-[18px] brightness-0 invert"
                  />
                </Link>
              ))}
            </div>
          </div>

          <nav aria-label="Customer care">
            <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-[#e7c2a2]">
              Here to help
            </h2>
            <ul className="mt-5 space-y-3.5 text-[15px] text-white/75">
              <li><Link className="transition hover:text-white" href="/about-us?tab=contact-us">Contact us</Link></li>
              <li><Link className="transition hover:text-white" href="/about-us?tab=faqs">FAQs</Link></li>
              <li><Link className="transition hover:text-white" href="/about-us?tab=sh-returns">Shipping & returns</Link></li>
              <li><Link className="transition hover:text-white" href="/privacy-policy">Privacy policy</Link></li>
            </ul>
          </nav>

          <nav aria-label="Explore Bloom Beauty">
            <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-[#e7c2a2]">
              Explore
            </h2>
            <ul className="mt-5 space-y-3.5 text-[15px] text-white/75">
              <li><Link className="transition hover:text-white" href="/shop-all">Shop all</Link></li>
              <li><Link className="transition hover:text-white" href="/bestsellers">Bestsellers</Link></li>
              <li><Link className="transition hover:text-white" href="/collection">Collections</Link></li>
              <li><Link className="transition hover:text-white" href="/about-us">Our story</Link></li>
              <li><Link className="transition hover:text-white" href="/blog">Journal</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="font-serif text-2xl">A little note from us?</h2>
            <p className="mt-2 text-[15px] leading-7 text-white/75">
              Join our list for thoughtful skincare notes and new-ritual news.
            </p>
            <form className="mt-5" onSubmit={handleSubscribe}>
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <div className="flex items-center rounded-full border border-white/25 bg-white/10 p-1.5 backdrop-blur-md focus-within:border-white/60">
                <Mail className="ml-3 h-4 w-4 shrink-0 text-white/55" />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubscribeMessage("");
                  }}
                  className="min-w-0 flex-1 bg-transparent px-3 py-2 text-[15px] text-white outline-none placeholder:text-white/55"
                  name="email"
                  id="footer-email"
                  required
                />
                <button
                  type="submit"
                  aria-label="Sign up for newsletter"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2ded5] text-[#20372e] transition hover:rotate-45 hover:bg-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
              {subscribeMessage && (
                <p className="mt-3 text-sm leading-6 text-[#f1d8d1]" role="status">
                  {subscribeMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bloom Beauty. Made with care.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/terms" className="transition hover:text-white">Terms & conditions</Link>
            <a href="tel:+380501234567" className="inline-flex items-center gap-1.5 transition hover:text-white">
              <Phone className="h-3 w-3" />
              +38 050 123 45 67
            </a>
            <Link href="/about-us?tab=contact-us" className="inline-flex items-center gap-1.5 transition hover:text-white">
              <MapPin className="h-3 w-3" />
              Kyiv, Ukraine
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
