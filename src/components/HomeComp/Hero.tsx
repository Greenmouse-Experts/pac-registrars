import { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import hero1 from "../assets/hero-1.png";
// import hero2 from "../assets/hero-2.png";
// import hero3 from "../assets/hero-3.png";
// import hero4 from "../assets/hero-4.png";
// const hero1 = "https://asqyfzgqnbxthtasplew.supabase.co/storage/v1/object/public/cabin-images/hero-1.png"
// const hero2 = "https://asqyfzgqnbxthtasplew.supabase.co/storage/v1/object/public/cabin-images/hero-2.png"
// const hero3 = "https://asqyfzgqnbxthtasplew.supabase.co/storage/v1/object/public/cabin-images/hero-3.png"
// const hero4 = "https://asqyfzgqnbxthtasplew.supabase.co/storage/v1/object/public/cabin-images/hero-4.png"

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideLength = 5; // Total number of slides
  const transitionTime = 4000; // Transition time in milliseconds
  let slideInterval: number;

  useEffect(() => {
    // Auto change slide at intervals
    // eslint-disable-next-line react-hooks/exhaustive-deps
    slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
    }, transitionTime);

    return () => clearInterval(slideInterval);
  }, []);

  // const handleNextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
  // };

  // const handlePrevSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === 1 ? slideLength : prevSlide - 1
  //   );
  // };

  //const backgroundImageUrl = `url(/images/hero-${currentSlide}.png)`;

  return (
 <>
   {currentSlide === 1 && <section
      className={`hero-1 transition-opacity duration-500 bg-center bg-cover md:h-[60%] h-[500px] 2xl:py-32 md:py-20 md:pt-24 pt-10 text-white relative`}
    >
      <div className="2xl:max-w-[46%] md:max-w-[60%] w-full animate__animated  animate__fadeIn animate__delay-3">
        {/* <p className="2xl:text-[17px] 2xl:font-[400] font-semibold text-white font-syne">
          Take control of your financial future and start growing your wealth
        </p> */}
        <h4 className="2xl:text-[55px] md:text-[45px] text-[30px]  font-bold font-montserrat 2xl:leading-[70.2px] md:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
        Streamline Operations with Our Company Secretarial Services
        </h4>
        <button className="bg-white text-bluePrimary mt-10 px-10 py-3 font-semibold">
        Get started
      </button>
      </div>

      
     
    </section>}
    {currentSlide === 2 && <section
      className={`hero-2 transition-opacity duration-500 bg-center bg-cover md:h-[60%] h-[500px] 2xl:py-32 md:py-20 md:pt-24 pt-10 text-white relative`}
    >
      <div className="2xl:max-w-[46%] md:max-w-[60%] w-full animate__animated  animate__fadeIn animate__delay-3">
        {/* <p className="2xl:text-[17px] 2xl:font-[400] font-semibold text-white font-syne">
          Take control of your financial future and start growing your wealth
        </p> */}
        <h4 className="2xl:text-[55px] md:text-[45px] text-[30px]  font-bold font-montserrat 2xl:leading-[70.2px] md:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
        Enhance Your Business with Our Registrar Services
        </h4>
        <button className="bg-white text-bluePrimary mt-10 px-10 py-3 font-semibold">
        Get started
      </button>
      </div>

      
     
    </section>}
    {currentSlide === 3 && <section
      className={`hero-3 transition-opacity duration-500 bg-center bg-cover md:h-[60%] h-[500px] 2xl:py-32 md:py-20 md:pt-24 pt-10 text-white relative`}
    >
      <div className="2xl:max-w-[46%] md:max-w-[60%] w-full animate__animated  animate__fadeIn animate__delay-3">
        {/* <p className="2xl:text-[17px] 2xl:font-[400] font-semibold text-white font-syne">
          Take control of your financial future and start growing your wealth
        </p> */}
        <h4 className="2xl:text-[55px] md:text-[45px] text-[30px]  font-bold font-montserrat 2xl:leading-[70.2px] md:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
        Navigate Probate with Our Expert Guidance
        </h4>
        <button className="bg-white text-bluePrimary mt-10 px-10 py-3 font-semibold">
        Get started
      </button>
      </div>

      
     
    </section>}

    {currentSlide === 4 && <section
      className={`hero-4 transition-opacity duration-500 bg-center bg-cover md:h-[60%] h-[500px] 2xl:py-32 md:py-20 md:pt-24 pt-10 text-white relative`}
    >
      <div className="2xl:max-w-[55%] md:max-w-[60%] w-full animate__animated  animate__fadeIn animate__delay-3">
        {/* <p className="2xl:text-[17px] 2xl:font-[400] font-semibold text-white font-syne">
          Take control of your financial future and start growing your wealth
        </p> */}
        <h4 className="2xl:text-[55px] md:text-[45px] text-[30px]  font-bold font-montserrat 2xl:leading-[70.2px] md:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
        Optimize Efficiency with Our Document Management Solutions
        </h4>
        <button className="bg-white text-bluePrimary mt-10 px-10 py-3 font-semibold">
        Get started
      </button>
      </div>

      
     
    </section>}
    {currentSlide === 5 && <section
      className={`hero-5 transition-opacity duration-500 bg-center bg-cover md:h-[60%] h-[500px] 2xl:py-32 md:py-20 md:pt-24 pt-10 text-white relative`}
    >
      <div className="2xl:max-w-[46%] md:max-w-[60%] w-full animate__animated  animate__fadeIn animate__delay-3">
        {/* <p className="2xl:text-[17px] 2xl:font-[400] font-semibold text-white font-syne">
          Take control of your financial future and start growing your wealth
        </p> */}
        <h4 className="2xl:text-[55px] md:text-[45px] text-[30px]  font-bold font-montserrat 2xl:leading-[70.2px] md:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
        Achieve Financial Growth with Our Innovative Solutions
        </h4>
        <button className="bg-white text-bluePrimary mt-10 px-10 py-3 font-semibold">
        Get started
      </button>
      </div>

      
     
    </section>}

 </>
  );
}

export default Hero;
