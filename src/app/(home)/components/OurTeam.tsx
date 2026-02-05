"use client";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { BtnNext, BtnPrev } from "@/utils/sliderButtonIcon";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

interface OurTeamProps {
  title: string;
  subtitle: string;
  members: {
    name: string;
    role: string;
    src: string;
  }[];
}

const OurTeam: React.FC<OurTeamProps> = ({ title, subtitle, members }) => {
  members = [...members, ...members, ...members];
  return (
    <Section className="bg-secondary max-md:py-8" defaultPadding={false}>
      <div className="grid md:grid-cols-2 items-center max-w-360 ml-auto max-md:gap-8 relative">
        <div className="space-y-2 max-md:px-4">
          <SectionHeading
            title={title}
            subTitle={subtitle}
            titleColor="primary"
            subTitleColor="white"
            wrapperClassName="max-w-xl capitalize! w-full"
          />
          <div className="w-20 h-0.5 bg-primary" />
        </div>
        <div className="md:border-l max-md:border-y border-white bg-white w-full overflow-hidden md:aspect-4/2">
          <SwiperCarousel
            data={members}
            slidesPerView={1.4}
            spaceBetween={1}
            loop
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={3000}
            navigation={{
              nextEl: ".team-next",
              prevEl: ".team-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                direction: "vertical",
              },
            }}
            // direction="vertical"
            className="w-full h-full"
            swiperSlideClassName="bg-secondary h-full flex items-center justify-center w-full"
            renderSlide={(member) => (
              <div className="flex items-center gap-4 md:w-fit h-full max-md:justify-center py-6 md:ml-[30%]">
                <div className="w-16 relative aspect-4/4">
                  <Image
                    src={member.src}
                    alt="Image"
                    fill
                    className="object-cover bg-white rounded-full"
                  />
                </div>
                <div className="">
                  <h4 className="text-white md:text-[2rem] text-2xl text-nowrap">{member.name}</h4>
                  <p className="text-primary">{member.role}</p>
                </div>
              </div>
            )}
          />
        </div>
        <div className="flex items-center max-md:justify-center gap-2 md:absolute md:top-4 md:right-4 z-10">
          <button className="bg-primary team-prev text-secondary flex items-center justify-center px-6 py-2 rounded-full hover:bg-white hover:text-secondary transition duration-300 ease-in-out hover:scale-105 active:scale-95">
            <BtnPrev />
          </button>
          <button className="bg-primary team-next text-secondary flex items-center justify-center px-6 py-2 rounded-full hover:bg-white hover:text-secondary transition duration-300 ease-in-out hover:scale-105 active:scale-95">
            <BtnNext />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default OurTeam;
