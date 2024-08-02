/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import MainHeader from "./components/MainHeader";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-[#1A1A1A] w-[80%] max-w-7xl mx-auto my-0 overflow-hidden relative">
      <Image
        className="absolute right-0 bottom-0 h-[85%] w-auto grayscale brightness-80"
        src={"/portfolio-hero.png"}
        alt="hero-bg"
        width={1920}
        height={1080}
      />
      <MainHeader />
      <div className="h-screen flex">
        <div className="pt-[15%]">
          <h1 className="hidden">Eric John Ariate</h1>
          <span className="text-[#3C3C3C] font-black text-[75px]">I'm a</span>
          <div className="font-black text-[75px] leading-none text-white">
            <Typewriter
              options={{
                strings: ["developer", "designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="pt-8 text-[#858585] text-[18px] font-medium">
            also a frustrated singer, dog lover, and a loving husband.
          </p>
          <Link href={"#"} className="flex gap-2 items-center pt-5 group w-fit">
            <div className="w-[50px] h-[2px] bg-white group-hover:w-0 transition-all"></div>
            <span>about me</span>
            <svg
              className="w-0 group-hover:w-[50px] transition-all"
              width="42"
              height="10"
              viewBox="0 0 42 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37 1L41 5L37 9"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 5L41 5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
