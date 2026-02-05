"use client";
import { Navigation } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";
import Image from "next/image";

const BannerSlider = ({ images }: { images: string[] }) => {
  return (
    <div>
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={{
          nextEl: ".banner-next",
          prevEl: ".banner-prev",
        }}
        className="w-full"
        renderSlide={(src) => (
          <div className="w-full relative md:aspect-[4/2.5] aspect-4/3">
            <Image src={src} alt="Image" fill className="object-cover" />
          </div>
        )}
      />
    </div>
  );
};

export default BannerSlider;
