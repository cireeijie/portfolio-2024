"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion as m } from "framer-motion";
import { menuContainer, menuItem } from "../animations/menuAnimations";

const menu = [
  {
    id: 1,
    name: "About me",
    url: "/about-me",
  },
  {
    id: 2,
    name: "Profile",
    url: "/profile",
  },
  {
    id: 3,
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    name: "Contact me",
    url: "/contact-me",
  },
];

export default function InnerPagesNavigation() {
  const params = useParams();
  const { innerPages } = params;

  return (
    <aside className="max-w-80 min-w-80 h-full w-full flex flex-col justify-between p-12 bg-[#1A1A1A] z-20 relative overflow-hidden">
      <m.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="absolute right-0 top-0 bottom-0 flex flex-col gap-9 justify-center items-center"
      >
        <div className="w-[5px] h-full bg-white"></div>
        <div>
          {menu.map((item) =>
            innerPages === item.url.replace("/", "") ? (
              <span
                className="[writing-mode:vertical-rl] rotate-180 text-[32px] uppercase"
                key={item.id}
              >
                {item.name}
              </span>
            ) : null
          )}
        </div>
        <div className="w-[5px] h-full bg-white"></div>
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Link href={"/"}>
          <svg
            className="w-[50px]"
            width="1015"
            height="auto"
            viewBox="0 0 1015 1300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M147.02 8.6086C150.756 3.21682 156.899 0 163.459 0H995C1006.05 0 1015 8.95431 1015 20V195C1015 206.046 1006.05 215 995 215H42.1917C26.0545 215 16.5616 196.872 25.7529 183.609L147.02 8.6086Z"
              fill="#D9D9D9"
            />
            <path
              d="M799.805 656.609C799.805 651.469 801.784 646.525 805.333 642.805L980.528 459.139C992.984 446.08 1015 454.897 1015 472.943V962.891V1280C1015 1291.05 1006.05 1300 995 1300H799.805H21C9.95431 1300 1 1291.05 1 1280V1101.29C1 1090.24 9.9543 1081.29 21 1081.29H779.805C790.85 1081.29 799.805 1072.33 799.805 1061.29V962.891V656.609Z"
              fill="#D9D9D9"
            />
            <path
              d="M0 353C0 341.954 8.95431 333 20 333H456.5H865.407C883.126 333 892.094 354.339 879.693 366.996L708.13 542.113C704.368 545.952 699.219 548.116 693.843 548.116H271C259.954 548.116 251 557.071 251 568.116V726.454C251 737.499 259.954 746.453 271 746.453H682.248C693.294 746.453 702.248 755.408 702.248 766.453V942C702.248 953.046 693.294 962 682.248 962H215.127H20C8.95429 962 0 953.046 0 942L0 548.116V353Z"
              fill="#D9D9D9"
            />
          </svg>
        </Link>
      </m.div>
      <m.nav
        variants={menuContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6"
      >
        {menu.map((item) => (
          <Link href={item.url} key={item.id} className="overflow-hidden">
            <m.span variants={menuItem} className="flex items-center gap-2">
              {innerPages === item.url.replace("/", "") && (
                <m.div
                  initial={{ width: 0 }}
                  animate={{ width: "15px" }}
                  className="w-[15px] h-[2px] bg-white"
                ></m.div>
              )}
              {item.name}
            </m.span>
          </Link>
        ))}
      </m.nav>
    </aside>
  );
}
