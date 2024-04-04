import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideLength = 4; // Total number of slides
  const transitionTime = 3000; // Transition time in milliseconds
  let slideInterval: number;

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

  const backgroundImageUrl = `url(/images/hero-${currentSlide}.png)`;

  return (
    <section
      style={{ backgroundImage: backgroundImageUrl }}
      className={`hero-${currentSlide} transition-opacity duration-500 bg-center bg-cover md:h-[60%] h-[400px] 2xl:py-32 md:py-20 md:pt-24 pt-10 text-white relative`}
    >
      <div className="2xl:max-w-[46%] md:max-w-[60%] w-full ">
        <p className="2xl:text-[17px] 2xl:font-[400] font-semibold text-white font-syne">
          Take control of your financial future and start growing your wealth
        </p>
        <h4 className="2xl:text-[55px] md:text-[45px] text-[30px]  font-bold font-montserrat 2xl:leading-[70.2px] md:leading-[60px] leading-[40px] capitalize text-white mt-0 2xl:mt-0 ">
          Grow your wealth with our leading edge solutions!
        </h4>
      </div>

      <div className="2xl:mt-20 mt-16 md:max-w-[38%] w-full">
        <p className="font-syne 2xl:text-[22px] text-[16px] leader-7 tracking-wider">
          Grow Your Wealth
        </p>

        <div className="flex items-center mt-5">
          <div className="bg-white h-[1.5px] w-[45%] rounded-xl"></div>
          <div className="bg-white h-[0.5px] w-[55%]"></div>
        </div>

        <div className="mt-8 flex items-start justify-between">
          <p className="font-sora 2xl:text-[18px] text-[14px] font-[300] 2xl:leading-[30px]  leading-[45px] max-w-[80%]">
            We help our clients achieve their goals by providing expert
            consulting services
          </p>
          <div className="gap-4 flex items-center">
            <FaArrowLeft
              size={14}
              color="white"
              className="cursor-pointer"
              onClick={handlePrevSlide}
            />
            <FaArrowRight
              size={14}
              color="white"
              className="cursor-pointer"
              onClick={handleNextSlide}
            />
          </div>
        </div>
      </div>
      <div className="border border-white rounded-full p-5 absolute md:right-24 md:bottom-24 right-5 bottom-6 hover:translate-y-[-5px] transition-all md:block hidden">
        <img
          src="/icons/arrow-right.svg"
          alt="arrow"
          className="md:w-[70px] md:h-[70px]  w-[30px] h-[30px]"
        />
      </div>
    </section>
  );
}

export default Hero;
