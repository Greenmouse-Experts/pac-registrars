import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideLength = 4; // Total number of slides
  const transitionTime = 3000; // Transition time in milliseconds
  let slideInterval:number;

  useEffect(() => {
    // Auto change slide at intervals
    slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
    }, transitionTime);

    return () => clearInterval(slideInterval);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 1 ? slideLength : prevSlide - 1
    );
  };

  const backgroundImageUrl = `url(/images/hero-${currentSlide}.png)`

  return (
    <section
    style={{backgroundImage: backgroundImageUrl}}
      className={`transition-opacity duration-500 bg-center bg-cover h-screen 2xl:py-32 py-20 pt-24 text-white relative`}
    >
      <div className="max-w-[500px]">
        <p className="2xl:text-lg font-semibold text-white font-syne">
          Take control of your financial future and start growing your wealth
        </p>
        <h4 className="2xl:text-[70px] text-[45px] font-bold font-montserrat 2xl:leading-[88.2px] leading-[60px] capitalize text-white mt-0 2xl:mt-0">
          Grow your wealth with our leading edge solutions!
        </h4>
      </div>

      <div className="2xl:mt-20 mt-16 max-w-[400px]">
        <p className="font-syne text-[16px] leader-7 tracking-wider">
          Grow Your Wealth
        </p>

        <div className="flex items-center mt-5">
          <div className="bg-white h-[1.5px] w-[45%] rounded-xl"></div>
          <div className="bg-white h-[0.5px] w-[55%]"></div>
        </div>

        <div className="mt-8 flex items-start justify-between">
          <p className="font-sora 2xl:text-[22px] text-[14px] font-[300] max-w-[300px]">
            We help our clients achieve their goals by providing expert
            consulting services
          </p>
          <div className="gap-4 flex items-center">
            <FaArrowLeft size={14} color="white" className="cursor-pointer" onClick={handlePrevSlide} />
            <FaArrowRight size={14} color="white" className="cursor-pointer" onClick={handleNextSlide} />
          </div>
        </div>
      </div>
      <div className="border border-white rounded-full p-5 absolute right-24 bottom-24">
        <img
          src="/icons/arrow-right.svg"
          alt="arrow"
          className="w-[70px] h-[70px]"
        />
      </div>
    </section>
  );
}

export default Hero;
