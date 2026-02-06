"use client";

import { useState } from "react";
import Image from "next/image";
import { OurClientProps } from "@/@types/type";
import LinkButton from "../buttons/LinkButton";
import SwiperCarousel from "./SwiperCarousel";
import { BtnNext, BtnPrev } from "@/utils/sliderButtonIcon";

import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

interface SectorSectionProps {
  sectors: OurClientProps["sectors"];
  link: OurClientProps["link"];
}

const SectorSection: React.FC<SectorSectionProps> = ({ sectors, link }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="grid md:grid-cols-8 grid-cols-1 items-center max-w-358 w-full ml-auto relative">
      {/* ===================== THUMBS ===================== */}
      <div className="md:col-span-2 relative md:aspect-4/5 max-md:order-1 w-full overflow-hidden">
        <SwiperCarousel
          data={sectors}
          onSwiper={setThumbsSwiper}
          loop={true}
          slidesPerView={1.5}
          spaceBetween={12}
          watchSlidesProgress
          slideToClickedSlide
          breakpoints={{
            768: {
              direction: "vertical",
              slidesPerView: sectors.length,
            },
          }}
          direction="horizontal"
          className="h-full"
          renderSlide={(sector, index) => (
            <button
              className="
                group
                flex gap-3
                md:w-fit
                max-md:p-4
              "
            >
              <span className="sector-index text-4xl">{(index ?? 0) + 1}</span>

              <span className="flex flex-col">
                <span className="text-start text-4xl text-nowrap">
                  {sector.title[0]}
                </span>
                <span className="text-start text-[1.0625rem]">
                  {sector.title[1]}
                </span>
              </span>
            </button>
          )}
        />
      </div>

      {/* ===================== CONTROLS ===================== */}
      <div className="flex items-center max-md:bg-background gap-2 max-md:order-3 max-md:py-4 md:absolute md:top-32 md:left-66 z-10 bg-white px-4 py-2 md:rounded-full">
        <button className="sector-prev bg-secondary text-primary px-6 py-2 rounded-full active:scale-95">
          <BtnPrev />
        </button>

        <button className="sector-next bg-secondary text-primary px-6 py-2 rounded-full active:scale-95">
          <BtnNext />
        </button>

        <LinkButton
          href={link.href}
          label={link.label}
          className="md:hidden ml-auto bg-white border-secondary text-secondary rounded-full"
        />
      </div>

      {/* ===================== MAIN SLIDER ===================== */}
      <div className="md:col-span-6 relative w-full max-md:order-0">
        <SwiperCarousel
          data={sectors}
          slidesPerView={1}
          loop
          modules={[Navigation, Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation={{
            nextEl: ".sector-next",
            prevEl: ".sector-prev",
          }}
          renderSlide={(sector) => (
            <div className="relative w-full md:aspect-[4/2.4] aspect-4/3">
              <Image
                src={sector.src}
                alt={sector.title[0]}
                fill
                className="object-cover"
              />
            </div>
          )}
        />

        <div className="absolute bottom-4 right-15 max-md:hidden">
          <LinkButton
            href={link.href}
            label={link.label}
            className="bg-white border-secondary text-secondary rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SectorSection;
