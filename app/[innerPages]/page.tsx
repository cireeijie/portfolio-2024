"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion as m } from "framer-motion";
import AboutMe from "../components/AboutMe";
import Profile from "../components/Profile";

const menu = [
  {
    id: 1,
    name: "About me",
    url: "/about-me",
    component: <AboutMe />,
  },
  {
    id: 2,
    name: "Profile",
    url: "/profile",
    component: <Profile />,
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

export default function InnerPages() {
  const params = useParams();
  const { innerPages } = params;

  return (
    <m.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="p-12 h-full"
    >
      {menu.map((item) =>
        innerPages === item.url.replace("/", "") ? (
          <div className="h-full" key={item.id}>
            {item.component}
          </div>
        ) : null
      )}
    </m.div>
  );
}
