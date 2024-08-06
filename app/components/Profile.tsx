import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";
import { title } from "process";

const data = {
  name: "Eric John Ariate",
  email: "ericjohnariate@gmail",
  softSkills: [
    {
      id: 1,
      name: "Communication",
      percentage: 90,
    },
    {
      id: 2,
      name: "Problem Solving",
      percentage: 100,
    },
    {
      id: 3,
      name: "Adaptability",
      percentage: 90,
    },
    {
      id: 4,
      name: "Teamwork",
      percentage: 100,
    },
  ],
  technicalSkills: [
    {
      id: 1,
      name: "HTML",
      percentage: 100,
    },
    {
      id: 2,
      name: "CSS",
      percentage: 100,
    },
    {
      id: 3,
      name: "JavaScript",
      percentage: 100,
    },
    {
      id: 4,
      name: "React JS",
      percentage: 90,
    },
    {
      id: 5,
      name: "Node JS",
      percentage: 65,
    },
    {
      id: 6,
      name: "PHP",
      percentage: 50,
    },
    {
      id: 7,
      name: "MySQL",
      percentage: 75,
    },
    {
      id: 8,
      name: "MongoDB",
      percentage: 75,
    },
  ],
};

const tabs = [
  {
    id: 1,
    name: "Work Experiences",
    isActive: true,
    data: [
      {
        id: 1,
        company: "Back Office AS",
        title: "Full Stack Developer",
        desc: "As a versatile full stack developer, I specialize in a wide array of frameworks, including WordPress, ReactJS, Next.js, Sanity, and HubSpot. My expertise spans from crafting dynamic, user-friendly front-end interfaces to developing robust back-end solutions, ensuring seamless integration and optimal performance across all platforms.",
        startDate: "August 2023",
        endDate: "Present",
        achievements: [],
      },
      {
        id: 2,
        company: "Selluxe",
        title: "Head Developer",
        description:
          "In my role as Head Developer for Shopify branding, I excel at designing and implementing unique, high-performing e-commerce solutions. I focus on creating cohesive brand experiences, optimizing user interactions, and leading development projects that drive customer engagement and boost business growth on the Shopify platform.",
        startDate: "April 2024",
        endDate: "Present",
        achievements: [],
      },
      {
        id: 3,
        company: "Illumedia Outsourcing",
        title: "Web & Graphic Designer",
        description:
          "Combining creativity with technical skill, I design visually compelling websites and graphics. My expertise lies in crafting engaging user experiences and impactful visual elements that enhance brand identity and drive results.",
        startDate: "April 2024",
        endDate: "Present",
        achievements: [],
      },
      {
        id: 4,
        company: "Outsourced Doers",
        title: "Virtual Assistant",
        description:
          "Combining creativity with technical skill, I design visually compelling websites and graphics. My expertise lies in crafting engaging user experiences and impactful visual elements that enhance brand identity and drive results.",
        startDate: "May 2022",
        endDate: "May 2023",
        achievements: [],
      },
    ],
  },
  {
    id: 2,
    name: "Education",
    isActive: false,
    data: [
      {
        id: 1,
        school: "KodeGo Bootcamp",
        title: "Web Development",
        desc: "I've excelled in the program over the past three months, earning recognition as the top performer in Mini Project 1 and consistently ranking among the top students. My dedication and skills have allowed me to stand out in developing practical, high-quality web solutions.",
        startDate: "March 2023",
        endDate: "June 2023",
        achievements: [
          {
            id: 1,
            name: "Top Student",
          },
          {
            id: 2,
            name: "Best in Mini Project 1",
          },
        ],
      },
      {
        id: 2,
        school: "AMA Davao Campus",
        title: "BS in Information Technology",
        desc: "As a student pursuing a BS in Information Technology at AMA Davao Campus, I served as the president of the MultiEdge Club (Multimedia Club). In this leadership role, I spearheaded multimedia projects and initiatives, promoting creative collaboration and innovation among members.",
        startDate: "June 2015",
        endDate: "May 2019",
        achievements: [
          {
            id: 1,
            name: "MutliEdge Club President (Multimedia Club)",
          },
        ],
      },
    ],
  },
];

export default function Profile() {
  return (
    <div className="flex gap-8 h-full">
      <aside className="h-full flex flex-col bg-white/[0.01]">
        <div className="flex bg-white/5 px-5 pt-5 backdrop-blur-sm">
          <div className="flex flex-col">
            <h1 className="text-3xl mb-5 font-semibold">
              Eric John
              <br />
              Ariate
            </h1>
            <span className="text-xs text-white/50 leading-none block">
              Bachelor of Science in
            </span>
            <span className=" text-sm leading-none text-white">
              Information Technology
            </span>
            <div className="flex-1 flex items-end pb-5">
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/eric-john-ariate-278a02243/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-linkedin w-4"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://github.com/cireeijie">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github w-4"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/cire.eijie/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-facebook w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/eijiecire/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram w-4"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <Image src={"/profile-img.png"} alt="eric" width={200} height={200} />
        </div>
        <div className="p-5 flex-1 overflow-auto">
          <div className="flex items-center">
            <div className="flex flex-col flex-1">
              <h2>Developer & Designer</h2>
              <span className="text-xs text-white/50">
                5 years of experience
              </span>
            </div>
            <div className="flex gap-5">
              <a href="mailto:ericjohnariate@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a href="tel:+639205353507">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="pt-5">
            <h3>Soft Skills</h3>
            <div className="flex flex-col gap-2 mt-2">
              {data.softSkills.map((item, index) => (
                <div key={item.id}>
                  <span className="text-white/50 text-xs font-medium">
                    {item.name}
                  </span>
                  <div className="flex-1 flex bg-white/5">
                    <m.div
                      initial={{ width: "0%" }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: index++, ease: "easeOut" }}
                      className="w-full bg-white flex justify-between py-[2px] px-1 items-center"
                    ></m.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-5">
            <h3>Technical Skills</h3>
            <div className="flex flex-col gap-2 mt-2">
              {data.technicalSkills.map((item, index) => (
                <div key={item.id}>
                  <span className="text-white/50 text-xs font-medium">
                    {item.name}
                  </span>
                  <div className="flex-1 flex bg-white/5">
                    <m.div
                      initial={{ width: "0%" }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: index++, ease: "linear" }}
                      className="w-full bg-white flex justify-between py-[2px] px-1 items-center"
                    ></m.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
      <div className="flex-1 bg-white/[0.01] p-9">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
