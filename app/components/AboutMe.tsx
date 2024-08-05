/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

import { Navigation, Pagination, A11y } from "swiper/modules";
import SwiperButtonPrev from "./SwiperButtonPrev";
import SwiperButtonNext from "./SwiperButtonNext";

const aboutMe = {
  name: "Eric John Ariate",
  description: "Developer & Designer",
  city: "Davao City, Philippines",
  email: "ericjohnariate@gmail.com",
  degree: "BSIT",
  study: "Ama Computer College of Davao",
  education: [
    {
      id: 1,
      image: "/kodego.webp",
      school: "KodeGo Bootcamp",
      degree: "Fullstack Web Development Bootcamp",
      address: "Manila, Philippines",
      year: "March 2023 - June 2023",
      achievements: ["Best in Mini Project 1", "Top Student"],
    },
    {
      id: 2,
      image: "/ama.webp",
      school: "Ama Computer College of Davao",
      degree: "Bachelor of Science in Computer Science",
      address: "Davao City, Philippines",
      year: "June 2016 - March 2020",
      achievements: [
        "President of MULTIEDGE CLUB",
        "Student Representative for 3rd Year Students",
      ],
    },
  ],
};

export default function AboutMe() {
  const swiper = useSwiper();
  return (
    <div className="flex gap-20 items-end h-full">
      <div className="flex-1 max-w-96">
        <div className="h-full w-full">
          <Image
            className="w-full overflow-hidden object-cover mb-5"
            src="/eric-1.jpg"
            alt="image-1"
            width={1920}
            height={1080}
          />
        </div>
        <p className="text-sm leading-7 tracking-wide">
          Hello! I'm Eric, a dedicated and passionate Fullstack Developer with
          expertise in web design, graphic design, and virtual assistance. With
          a keen eye for detail and a strong technical background, I am
          committed to creating visually stunning and highly functional websites
          that leave a lasting impression.
        </p>
      </div>
      <div className="flex-1 max-w-96">
        <Image
          className="w-full overflow-hidden object-cover mb-5"
          src="/eric-2.png"
          alt="image-2"
          width={1920}
          height={1080}
        />
        <div className="flex gap-5">
          <div className="flex flex-col text-sm leading-7 tracking-wide">
            <span>Name: {aboutMe.name}</span>
            <span>Job title: {aboutMe.description}</span>
            <span>City: {aboutMe.city}</span>
            <span>Degree: {aboutMe.study}</span>
          </div>
        </div>
      </div>
      <div className="flex-1 h-fit overflow-hidden">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2000 }}
          modules={[Navigation, Pagination, A11y]}
        >
          {aboutMe.education.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex gap-5">
                <div className="flex flex-col text-sm leading-7 tracking-wide">
                  <Image
                    className="max-h-14 w-auto mb-5"
                    src={item.image}
                    alt={item.school}
                    width={1920}
                    height={1080}
                  />
                  <div className="flex flex-col mb-5">
                    <h3 className="text-2xl font-bold">{item.school}</h3>
                    <span className="">{item.address}</span>
                    <span>{item.degree}</span>
                    <span>{item.year}</span>
                  </div>
                  <div>
                    {item.achievements.length > 0 && (
                      <h3 className="text-2xl font-bold">Achievements</h3>
                    )}
                    {item.achievements.map((achievement) => (
                      <ul>
                        <li>{achievement}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex justify-end gap-2 mt-9">
            <SwiperButtonPrev className="w-14 h-14 flex justify-center items-center border-[1px] border-white">
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
                className="lucide lucide-chevron-left pointer-events-none"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </SwiperButtonPrev>
            <SwiperButtonNext className="w-14 h-14 flex justify-center items-center border-[1px] border-white">
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
                className="lucide lucide-chevron-right pointer-events-none"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </SwiperButtonNext>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
