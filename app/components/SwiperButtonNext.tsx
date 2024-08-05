import React from "react";
import { useSwiper } from "swiper/react";

export default function SwiperButtonNext({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const swiper = useSwiper();
  return (
    <button className={className} onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
}
