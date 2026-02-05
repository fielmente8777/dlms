import { TestimonialsDataType } from "@/@types/type";
import { Section } from "@/components/sectionComponants";
import TestimonialsSlider from "@/components/sliders/TestimonialsSlider";
import { SectionHeading } from "@/components/typography";
import { BtnNext, BtnPrev } from "@/utils/sliderButtonIcon";
import Image from "next/image";

const Testimonials: React.FC<TestimonialsDataType> = ({
  title,
  src,
  testimonials,
}) => {
  return (
    <Section
      className="bg-white max-md:px-4 max-md:py-8"
      defaultPadding={false}
    >
      <div className="grid relative lg:grid-cols-2 grid-cols-1 items-center max-w-360 ml-auto">
        <div className="max-w-xl w-full space-y-5 ">
          <div className="md:space-y-4 space-y-2">
            <SectionHeading subTitle={title} subLevel={2} />
            <div className="w-25 h-0.5 bg-primary" />
          </div>
          <div className="relative aspect-[4/3.5] w-full md:hidden">
            <Image src={src} alt={src} fill className="object-cover" />
          </div>
          <TestimonialsSlider cards={testimonials} />
          <div className="flex items-center max-md:justify-center gap-2 md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 bg-white z-10 px-4 py-2 rounded-full">
            <button className="bg-secondary testimonials-prev text-primary flex items-center justify-center px-6 py-2 rounded-full hover:bg-primary hover:text-secondary transition duration-300 ease-in-out hover:scale-105 active:scale-95">
              <BtnPrev />
            </button>
            <button className="bg-secondary testimonials-next text-primary flex items-center justify-center px-6 py-2 rounded-full hover:bg-primary hover:text-secondary transition duration-300 ease-in-out hover:scale-105 active:scale-95">
              <BtnNext />
            </button>
          </div>
        </div>
        <div className="relative aspect-[4/3.5] w-full max-md:hidden">
          <Image src={src} alt={src} fill className="object-cover" />
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
