import React from "react";
import { useSwiper } from "swiper/react";

export default function SwiperButtonPrev({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const swiper = useSwiper();
  return (
    <button className={className} onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  );
}
