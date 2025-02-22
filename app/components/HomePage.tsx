/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Link from "next/link";
import MainHeader from "./MainHeader";
import Typewriter from "typewriter-effect";
import Image from "next/image";
export default function HomePage() {
  return (
    <>
      <Image
        className="absolute hidden right-0 bottom-0 md:h-auto md:w-[30vw] lg:h-[85%] sm:hidden lg:block lg:w-auto grayscale brightness-[75%]"
        src={"/portfolio-hero.png"}
        alt="hero-bg"
        width={1920}
        height={1080}
      />
      <MainHeader />
      <div className="h-auto lg:h-screen flex">
        <div className="w-full flex flex-col justify-center">
          <div className="flex justify-center lg:hidden w-full mb-5">
            <Image
              src={"/eric-formal.png"}
              alt="hero-bg"
              width={200}
              height={200}
            />
          </div>
          <h1 className="hidden">Eric John Ariate</h1>
          <span className="text-[#3C3C3C] font-black text-[13vw] lg:text-[75px]">
            I'm a
          </span>
          <div className="font-black text-[13vw] lg:text-[75px] leading-none text-white">
            <Typewriter
              options={{
                strings: ["developer", "designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="pt-8 text-[#858585] text-[18px] font-medium max-w-md">
            also a frustrated singer, dog lover, and a father. My name is Eric
            by the way.
          </p>
          <Link
            href={"/about-me"}
            className="flex gap-2 items-center pt-5 group w-fit"
          >
            <div className="w-[50px] h-[2px] bg-white group-hover:w-0 transition-all"></div>
            <span className="text-white">about me</span>
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
    </>
  );
}
