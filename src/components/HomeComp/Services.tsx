import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

function Services() {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <section className="py-16 bg-bluePrimary text-white lg:px-20">
      <div className="flex lg:flex-row lg:gap-0 gap-5 flex-col items-center justify-between sm:px-10">
        <div className=" lg:w-[33%] w-full font-syne">
          <p className=" font-semibold ">
            Get to know our services and expertise
          </p>
          <h4 className="font-bold font-syne capitalize">
            The best solution for future business!
          </h4>
        </div>
        <div className=" lg:w-[54%] w-full">
          <p className="font-sora lg:text-xl lg:leading-10 font-[300]">
            To help our clients go from dreaming to doing, we have our core
            beliefs that are central to their investing success. We’re here to
            help with any questions you have on your path to find financial
            security.
          </p>
          <p className=" mt-5">
            Our core beliefs serve as the cornerstone of their investing
            success, guiding them along their journey towards financial
            security.
          </p>
        </div>
      </div>

      {/* services cards */}
      <div className="mt-10">
        <div className="flex gap-5 items-center justify-end mb-8">
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
              <FiArrowLeft size={22} />
            </span>
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
            <span>
              <FiArrowRight size={22} />
            </span>
          </button>
        </div>

        <Slider ref={setSliderRef} {...settings}>
          <div className="lg:max-w-[400px] w-full lg:h-[540px] shadow-md px-10 py-10 flex flex-col items-start bg-white text-black">
            <img src="/icons/register.gif" alt="file"   className="2xl:w-[60px] w-[70px]" />
            <h5 className="2xl:text-[20px] text-[16px] font-semibold font-syne mt-10">
              Register Maintenance Service
            </h5>

            <p className="font-sora text-grayPrimary2 mt-8">
              By meticulously managing registers and maintaining accurate data
              records, organizations can streamline operations, enhance
              decision-making processes, and ensure regulatory compliance.
            </p>
         <div className="mt-auto ">
         <NavLink
              to="/about"
              className="text-bluePrimary font-sora"
            >
              Read more
            </NavLink>
         </div>
          </div>
          <div className="lg:max-w-[400px] w-full lg:h-[540px] shadow-md px-10 py-10 flex flex-col items-start bg-white text-black">
            <img
              src="/icons/probate.gif"
              alt="file"
              className="2xl:w-[60px] w-[70px]"
            />
            <h5 className="2xl:text-[20px] text-[16px] font-semibold font-syne mt-10">
              Probate/ Transmission Service
            </h5>
            <p className="font-sora text-grayPrimary2 mt-8">
              Our dedicated team specializes in probate administration, estate
              planning, and asset distribution, ensuring a smooth and efficient
              process tailored to your specific needs.
            </p>
            <NavLink
              to="/about"
              className="text-bluePrimary font-sora  mt-auto"
            >
              Read more
            </NavLink>
          </div>
          <div className="lg:max-w-[400px] w-full lg:h-[540px] shadow-md px-10 py-10 flex flex-col items-start bg-white text-black">
            <img
              src="/icons/bank.gif"
              alt="file"
              className="2xl:w-[60px] w-[70px]"
            />
            <h5 className="2xl:text-[20px] text-[16px] font-semibold font-syne mt-10">
              Company Secretarial Service
            </h5>
            <p className="font-sora text-grayPrimary2 mt-8">
              With a deep understanding of market dynamics and regulatory
              requirements, we ensure seamless and successful bond offerings
              that meet our clients' financing needs.
            </p>
            <NavLink
              to="/about"
              className="text-bluePrimary font-sora  mt-auto"
            >
              Read more
            </NavLink>
          </div>
          <div className="lg:max-w-[400px] w-full lg:h-[540px] shadow-md px-10 py-10 flex flex-col items-start bg-white text-black">
            <img
              src="/icons/message.gif"
              alt="file"
              className="2xl:w-[60px] w-[70px]"
            />
            <h5 className="2xl:text-[20px] text-[16px] font-semibold font-syne mt-10">
              e- Notification Service
            </h5>
            <p className="opacity-0">none</p>
            <p className="font-sora text-grayPrimary2 mt-8">
              We ensures that you receive timely, accurate notifications,
              providing you with the information you need to stay ahead and
              achieve your financial goals.
            </p>
            <NavLink
              to="/about"
              className="text-bluePrimary font-sora  mt-auto"
            >
              Read more
            </NavLink>
          </div>
        </Slider>
      </div>

      <div className="xl:max-w-[50%] mt-10  ">
        <p className="font-sora font-normal  leading-8">
          We focus on helping clients shape the future of their business, and
          execute strategies on the changing face of the customer.{" "}
          <span className="underline">
            <NavLink to="/contact">Contact Us!</NavLink>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Services;
