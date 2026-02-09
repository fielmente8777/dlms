// import { BtnNext, BtnPrev } from "@/utils/sliderButtonIcon";
import { Container, Section } from "../sectionComponants";
import BannerSlider from "../sliders/BannerSlider";

interface BannerProps {
  title: string;
  images: string[];
}
const Banner: React.FC<BannerProps> = ({ title, images }) => {
  return (
    <Section defaultPadding={false} className="relative">
      {images && <BannerSlider images={images} />}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] z-10" />
      <div className="absolute bottom-5 inset-x-0 w-full text-white z-20">
        <Container className="grid md:grid-cols-2 grid-cols-1">
          <h1
            className="text-2xl max-md:text-center md:text-6xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {/* <div className="md:flex hidden items-end gap-4 md:ml-auto">
            <button className="bg-secondary text-primary px-6 py-2 rounded-full banner-prev">
              <BtnPrev />
            </button>
            <button className="bg-secondary text-primary px-6 py-2 rounded-full banner-next">
              <BtnNext />
            </button>
          </div> */}
        </Container>
      </div>
    </Section>
  );
};

export default Banner;
