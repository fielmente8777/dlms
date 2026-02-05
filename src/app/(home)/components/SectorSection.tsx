"use client";

import { OurClientProps } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import { BtnNext, BtnPrev } from "@/utils/sliderButtonIcon";
import Image from "next/image";
import { useState } from "react";

interface SectorSectionProps {
  sectors: OurClientProps["sectors"];
  link: OurClientProps["link"];
}

const SectorSection: React.FC<SectorSectionProps> = ({ sectors, link }) => {
  // ✅ single source of truth
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedSector = sectors[activeIndex];

  // ✅ Next / Prev synced with slider + image
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sectors.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + sectors.length) % sectors.length);
  };

  return (
    <div className="grid md:grid-cols-[1fr_3.1fr] relative grid-cols-1 items-center max-w-358 w-full ml-auto">
      {/* ===================== Sector Buttons ===================== */}
      <div className="relative max-md:overflow-hidden md:overflow-visible max-md:w-full max-md:order-1">
        <div
          className="
            flex gap-4
            md:flex-col
            max-md:flex-row
            transition-transform duration-500 ease-in-out
            md:translate-x-0
          "
          style={{
            transform:
              typeof window !== "undefined" && window.innerWidth < 768
                ? `translateX(-${activeIndex * 80}%)`
                : "translateX(0)",
          }}
        >
          {sectors.map((sector, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="
                flex gap-3
                md:w-fit
                max-md:p-4
                hover:scale-x-105
                active:scale-x-95
                transition duration-300 ease-in-out
              "
            >
              <span
                className={`${
                  activeIndex === index
                    ? "bg-secondary text-primary"
                    : "bg-primary text-secondary"
                } flex items-center justify-center w-10 text-4xl transition`}
              >
                {index + 1}
              </span>

              <span className="flex flex-col">
                <span className="text-start text-nowrap text-4xl">
                  {sector.title[0]}
                </span>
                <span className="text-start text-[1.0625rem]">
                  {sector.title[1]}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ===================== Controls ===================== */}
      <div className="flex items-center max-md:bg-background max-md:order-3 max-md:py-4 gap-2 md:absolute md:top-32 md:left-66 bg-white z-10 px-4 py-2 md:rounded-full">
        <button
          className="bg-secondary text-primary flex items-center justify-center px-6 py-2 rounded-full hover:bg-primary hover:text-secondary transition hover:scale-105 active:scale-95"
          onClick={handlePrev}
        >
          <BtnPrev />
        </button>

        <button
          className="bg-secondary text-primary flex items-center justify-center px-6 py-2 rounded-full hover:bg-primary hover:text-secondary transition hover:scale-105 active:scale-95"
          onClick={handleNext}
        >
          <BtnNext />
        </button>

        <LinkButton
          href={link.href}
          label={link.label}
          className="bg-white border-secondary text-secondary rounded-full ml-auto md:hidden gap-2 hover:shadow-lg capitalize"
        />
      </div>

      {/* ===================== Image ===================== */}
      <div className="w-full relative md:aspect-[4/2.4] aspect-4/3 max-md:order-0">
        <Image
          src={selectedSector.src}
          alt={selectedSector.title.join(" ")}
          fill
          className="object-cover"
        />

        <div className="absolute bottom-4 right-15 max-md:hidden">
          <LinkButton
            href={link.href}
            label={link.label}
            className="bg-white border-secondary text-secondary rounded-full flex items-center justify-center gap-2 hover:shadow-lg capitalize"
          />
        </div>
      </div>
    </div>
  );
};

export default SectorSection;
