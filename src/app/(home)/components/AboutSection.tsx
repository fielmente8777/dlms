"use client";
import { AboutDataType } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { useState } from "react";

const AboutSection: React.FC<AboutDataType> = ({
  title,
  description,
  link,
  images,
}) => {
  // handle redMore
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => setReadMore(!readMore);
  return (
    <SectionWithContainer sectionClassName="">
      <div className="grid lg:grid-cols-[1.8fr_1fr] grid-cols-1 gap-8">
        <div className="grid max-md:hidden grid-cols-[1fr_1.15fr] gap-6">
          {images.slice(0, 2).map((image, index) => (
            <div
              key={index}
              className={`w-full relative ${index === 0 ? "aspect-[4/5.8] mt-auto" : "aspect-[4/5.9]"}`}
            >
              <Image src={image} alt={image} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className=" space-y-5">
          <div className="">
            <SectionHeading subTitle={title} subLevel={2} />
            <div className="w-23 h-[1.5px] bg-primary"/>
          </div>
          <div className="w-full relative aspect-[4/1.25]">
            <Image
              src={images[2]}
              alt={images[2]}
              fill
              className="object-cover"
            />
          </div>
          <p dangerouslySetInnerHTML={{ __html: description[0] }} />
          <div className="max-md:grid hidden grid-cols-[1fr_1.15fr] gap-6">
            {images.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className={`w-full relative ${index === 0 ? "aspect-[4/5.8] mt-auto" : "aspect-[4/5.9]"}`}
              >
                <Image src={image} alt={image} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {description
              .slice(1, readMore ? description.length : 2)
              .map((item, index, arr) => (
                <p key={index}>
                  <span dangerouslySetInnerHTML={{ __html: item }} />

                  {/* Render button ONLY on last visible paragraph */}
                  {index === arr.length - 1 && description.length > 2 && (
                    <button
                      onClick={toggleReadMore}
                      className="ml-1 text-secondary underline font-semibold"
                    >
                      {readMore ? "Read less" : "...Read more"}
                    </button>
                  )}
                </p>
              ))}
          </div>
          <LinkButton
            href={link.href}
            label={link.label}
            className="max-lg:w-full justify-center rounded-full text-secondary max-md:justify-between md:gap-7"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
