import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

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
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="border-t border-grayPrimary  bg-white text-black  pb-10 pt-16">
      <div className="flex justify-between mb-10">
        <h4 className="font-syne font-bold">Our Clients & Partners</h4>
        <div className="flex gap-5 justify-end h-min">
          <button
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontWeight: 500,
              fontSize:14
            }}
            color="#2d3253"
            onClick={sliderRef?.slickPrev}
          >
            <FiArrowLeft />
            &nbsp; Prev
          </button>

          <button
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontWeight: 500,
              fontSize:14
            }}
            color="#2d3253"
            onClick={sliderRef?.slickNext}
          >
            Next &nbsp;
            <FiArrowRight />
          </button>
        </div>
      </div>
      <div>
        <Slider ref={setSliderRef} {...settings}>
          <div className="flex justify-center items-center">
            <img
              src="/images/client-1.png"
              alt="client"
              className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/client-2.png"
              alt="client"
              className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/client-3.png"
              alt="client"
              className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/client-4.png"
              alt="client"
              className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/client-5.png"
              alt="client"
              className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/client-6.png"
              alt="client"
              className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
            />
          </div>
        </Slider>
      </div>
      <div className="flex items-center mt-20 flex-wrap justify-between"></div>
    </section>
  );
}

export default Clients;
{
  /* <img
            src="/images/client-1.png"
            alt="client"
            className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
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
