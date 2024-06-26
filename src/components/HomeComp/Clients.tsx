import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import BaseButton from "../BaseButton";

function Clients() {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className=" bg-white text-black my-20 py-20 pb-5 ">
      <div className="flex justify-between items-center mb-10">
        <h4 className="font-syne font-bold w-[40%] ">Our Clients & Partners</h4>
        <div className="flex gap-5 items-center justify-end">
          <button
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontWeight: 500,
              fontSize: 14,
            }}
            color="#2d3253"
            onClick={sliderRef?.slickPrev}
          >
            <span>
              {" "}
              <FiArrowLeft />
            </span>
            &nbsp; Prev
          </button>

          <button
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontWeight: 500,
              fontSize: 14,
            }}
            color="#2d3253"
            onClick={sliderRef?.slickNext}
          >
            Next &nbsp;
            <span>
              <FiArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className=" transition-all">
        <Slider ref={setSliderRef} {...settings}>
          <div className="flex justify-center items-center">
            <img
              src="/images/client-1.png"
              alt="client"
              className=" grayscale mx-1 max-w-[130px] max-h-[50px] hover:grayscale-0 cursor-pointer "
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/client-2.png"
              alt="client"
              className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] hover:grayscale-0 cursor-pointer "
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/client-3.png"
              alt="client"
              className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] hover:grayscale-0 cursor-pointer "
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/client-4.png"
              alt="client"
              className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] hover:grayscale-0 cursor-pointer "
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/client-5.png"
              alt="client"
              className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] hover:grayscale-0 cursor-pointer "
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/client-6.png"
              alt="client"
              className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] hover:grayscale-0 cursor-pointer "
            />
          </div>
        </Slider>
      </div>
      <div className="flex justify-center mt-5">
      <BaseButton color="blue" link="/clients" text="View all Clients"/>
      </div>
    </section>
  );
}

export default Clients;
{
  /* <img
            src="/images/client-1.png"
            alt="client"
            className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] hover:grayscale-0 cursor-pointer "
          />
          <img
            src="/images/client-2.png"
            alt="client"
            className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
          />
          <img
            src="/images/client-3.png"
            alt="client"
            className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
          />
          <img
            src="/images/client-4.png"
            alt="client"
            className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
          />
          <img
            src="/images/client-5.png"
            alt="client"
            className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
          />
          <img
            src="/images/client-6.png"
            alt="client"
            className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
          /> */
}
