"use client";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { JSX } from "react";
import { Autoplay } from "swiper/modules";

interface MilestoneProps {
  stats: {
    value: string;
    label: string;
    icon: JSX.Element;
  }[];
}
const Milestone: React.FC<MilestoneProps> = ({ stats }) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="md:pb-15 py-8"
    >
      <div className="md:grid hidden grid-cols-3 bg-img">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            {stat.icon}
            <div className="flex flex-col items-center gap-1">
              <span className="text-4xl font-bold text-primary">
                {stat.value}
              </span>
              <span
                className="text-lg bold-text"
                dangerouslySetInnerHTML={{ __html: stat.label }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 md:hidden">
        <span className="mt-12 w-fit h-fit">
          <Line />
        </span>
        <SwiperCarousel
          data={stats}
          slidesPerView={1}
          spaceBetween={1}
          loop
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={2000}
          className="w-full"
          renderSlide={(stat) => (
            <div className="flex flex-col items-center gap-2">
              {stat.icon}
              <div className="flex flex-col items-center gap-1">
                <span className="text-4xl font-bold text-primary">
                  {stat.value}
                </span>
                <span
                  className="text-lg bold-text text-nowrap text-center"
                  dangerouslySetInnerHTML={{ __html: stat.label }}
                />
              </div>
            </div>
          )}
        />
        <span className="mt-12 rotate-180 w-fit h-fit">
          <Line />
        </span>
      </div>
    </SectionWithContainer>
  );
};

export default Milestone;

export const Line = () => (
  <svg
    width={84}
    height={10}
    viewBox="0 0 84 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5.08643"
      width={7}
      height={7}
      transform="rotate(46.6028 5.08643 0)"
      fill="#DFB65C"
    />
    <line
      x1="83.8955"
      y1="5.44775"
      x2="8.89551"
      y2="5.44776"
      stroke="#DFB65C"
    />
  </svg>
);
