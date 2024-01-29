"use client";
import temp1PNG from "@/assets/templates/temp1.png";
import temp2PNG from "@/assets/templates/temp2.png";
import temp3PNG from "@/assets/templates/temp3.png";
import temp4PNG from "@/assets/templates/temp4.png";
import Image from "next/image";
import { useRef } from "react";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Templates() {
  const sliderRef = useRef(null);

  const next = () => {
    // @ts-ignore
    sliderRef.current.slickNext();
  };

  const previous = () => {
    // @ts-ignore
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-slate-100  my-24">
      <div className="max-w-screen-xl mx-auto px-5 ">
        <div className="pt-16">
          <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight text-center">
            Choose <span className="text-gray-600">Template</span>
          </h2>
          <p className="text-lg mt-4 text-slate-600 text-center">
            Astroship is trusted by the worlds leading companies and brands.
          </p>
        </div>
      </div>
      <div className="mt-10 relative overflow-x-clip pb-16">
        <div className="px-5 min-w-ful relative">
          <Slider ref={sliderRef} {...settings}>
            <div className="rounded-2xl relative">
              <picture>
                <Image
                  src={temp1PNG}
                  alt=""
                  className="w-full object-contain  max-h-[400px]"
                />
              </picture>
            </div>
            <div className="rounded-2xl relative">
              <picture>
                <Image
                  src={temp2PNG}
                  alt=""
                  className="w-full object-contain  max-h-[400px]"
                />
              </picture>
            </div>
            <div className="rounded-2xl relative">
              <picture>
                <Image
                  src={temp3PNG}
                  alt=""
                  className="w-full object-contain  max-h-[400px]"
                />
              </picture>
            </div>
            <div className="rounded-2xl relative">
              <picture>
                <Image
                  src={temp4PNG}
                  alt=""
                  className="w-full object-contain  max-h-[400px]"
                />
              </picture>
            </div>
            <div className="rounded-2xl relative">
              <picture>
                <Image
                  src={temp4PNG}
                  alt=""
                  className="w-full object-contain  max-h-[400px]"
                />
              </picture>
            </div>
          </Slider>
          <div className="flex gap-8">
            <button
              className="absolute border hover:bg-gray-300 hover:text-white focus:outline-none rounded-full bg-gray-200 p-4 h-12 w-12  top-40 bottom-0 lg:left-56 left:20 z-50"
              onClick={previous}
            >
              <BiSolidChevronLeft />
            </button>
            <button
              className="absolute border hover:bg-gray-300 hover:text-white focus:outline-none rounded-full bg-gray-200 p-4 h-12 w-12   top-40 bottom-0 lg:right-56 right-5 z-50"
              onClick={next}
            >
              <BiSolidChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
