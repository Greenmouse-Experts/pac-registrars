import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
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
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1508,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
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
          {/* <p className="font-sora lg:text-xl lg:leading-10 font-[300]">
            To help our clients go from dreaming to doing, we have our core
            beliefs that are central to their investing success. We’re here to
            help with any questions you have on your path to find financial
            security.
          </p> */}
          <p className=" mt-5">
            {/* Our core beliefs serve as the cornerstone of their investing
            success, guiding them along their journey towards financial
            security. */}
            Your trusted guide to a brighter business future
            and revolutionizing the way you work and thrive.
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
          <div className="lg:max-w-[400px] w-full 2xl:h-[32rem] lg:h-[30rem] h-[37rem] shadow-md px-10 py-10 !flex flex-col items-start bg-white text-black">
          <div className="xl:h-[9rem] mb-3">
            <img
              src="/icons/register.gif"
              alt="file"
              className="2xl:w-[60px] w-[70px] mx-auto"
            />
            <h5 className="2xl:text-xl text-base font-semibold font-syne mt-5">
              Register Maintenance Service
            </h5>
           </div>
            <p className="font-sora text-grayPrimary2 mt-5">
              By meticulously managing registers and maintaining accurate data
              records, organizations can streamline operations, enhance
              decision-making processes, and ensure regulatory compliance.
            </p>

            <NavLink
              to="/register-maintenance"
              className="text-bluePrimary font-sora  mt-auto flex items-center gap-2"
            >
              Read more{" "}
              <span>
                <FaArrowRight />
              </span>
            </NavLink>
          </div>
          <div className="lg:max-w-[400px] w-full 2xl:h-[32rem] lg:h-[30rem] h-[37rem] shadow-md px-10 py-10 !flex flex-col items-start bg-white text-black">
          <div className="xl:h-[9rem] mb-3">
            <img
              src="/icons/probate.gif"
              alt="file"
              className="2xl:w-[60px] w-[70px] mx-auto"
            />
            <h5 className="2xl:text-xl text-base font-semibold font-syne mt-5">
              Probate/ Transmission Service
            </h5>
           </div>
            <p className="font-sora text-grayPrimary2 mt-5">
              Our dedicated team specializes in probate administration, estate
              planning, and asset distribution, ensuring a smooth and efficient
              process tailored to your specific needs.
            </p>
            
            <div className="mt-auto">
              <NavLink
                to="/probate-services"
                className="text-bluePrimary font-sora  mt-auto flex items-center gap-2"
              >
                Read more{" "}
                <span>
                  <FaArrowRight />
                </span>
              </NavLink>
            </div>
          </div>
          <div className="lg:max-w-[400px] w-full 2xl:h-[32rem] lg:h-[30rem] h-[37rem] shadow-md px-10 py-10 !flex flex-col items-start bg-white text-black">
          <div className="xl:h-[9rem] mb-3">
            <img
              src="/icons/bank.gif"
              alt="file"
              className="2xl:w-[60px] w-[70px] mx-auto"
            />
            <h5 className="2xl:text-xl text-base font-semibold font-syne mt-5">
              Company Secretarial Service
            </h5>
           </div>
            <p className="font-sora text-grayPrimary2 mt-5">
              With a deep understanding of market dynamics and regulatory
              requirements, we ensure seamless and successful bond offerings
              that meet our clients' financing needs.
            </p>
            <NavLink
              to="/company-secretarial"
              className="text-bluePrimary font-sora  mt-auto flex items-center gap-2"
            >
              Read more{" "}
              <span>
                <FaArrowRight />
              </span>
            </NavLink>
          </div>
          <div className="lg:max-w-[400px] w-full 2xl:h-[32rem] lg:h-[30rem] h-[37rem] shadow-md px-10 py-10 !flex flex-col items-start bg-white text-black">
          <div className="xl:h-[9rem] mb-3">

            <img
              src="/icons/message.gif"
              alt="file"
              className="2xl:w-[60px] w-[70px] mx-auto"
            />
            <h5 className="2xl:text-xl text-base font-semibold font-syne mt-5">
              e- Notification Service
            </h5>
            </div>
            
            <p className="font-sora text-grayPrimary2 mt-5">
              We ensures that you receive timely, accurate notifications,
              providing you with the information you need to stay ahead and
              achieve your financial goals.
            </p>
            <NavLink
              to="/e-notification"
              className="text-bluePrimary font-sora  mt-auto flex items-center gap-2"
            >
              Read more{" "}
              <span>
                <FaArrowRight />
              </span>
            </NavLink>
          </div>

          <div className="lg:max-w-[400px] w-full 2xl:h-[32rem] lg:h-[30rem] h-[37rem] shadow-md px-10 py-10 !flex flex-col items-start bg-white text-black">
          <div className="xl:h-[9rem] mb-3">
            <img
              src="/icons/web.gif"
              alt="file"
              className="2xl:w-[60px] w-[70px] mx-auto"
            />
            <h5 className="2xl:text-xl text-base font-semibold font-syne mt-5">
              Web- registry Service
            </h5>
            </div>
            <p className="font-sora text-grayPrimary2 mt-5">
              Our dedicated team is here to guide you every step of the way,
              ensuring easy access, robust security, and comprehensive support
              for all your web-registry needs.
            </p>
            <NavLink
              to="/web-registry"
              className="text-bluePrimary font-sora  mt-auto flex items-center gap-2"
            >
              Read more{" "}
              <span>
                <FaArrowRight />
              </span>
            </NavLink>
          </div>
          <div className="lg:max-w-[400px] w-full 2xl:h-[32rem] lg:h-[30rem] h-[37rem] shadow-md px-10 py-10 !flex flex-col items-start bg-white text-black">
          <div className="xl:h-[9rem] mb-3">
            <img
              src="/icons/file.gif"
              alt="file"
              className="2xl:w-[60px] w-[70px] mx-auto"
            />
            <h5 className="2xl:text-xl text-base font-semibold font-syne mt-5">
              Document Maintenance Service
            </h5>
           </div>
            <p className="font-sora text-grayPrimary2 mt-5">
              Our core beliefs drive our commitment to helping our clients
              achieve investing success. Our dedicated team is here to guide you
              every step of the way on your journey towards financial security.
            </p>
            <NavLink
              to="/register-maintenance"
              className="text-bluePrimary font-sora  mt-auto flex items-center gap-2"
            >
              Read more{" "}
              <span>
                <FaArrowRight />
              </span>
            </NavLink>
          </div>
          <div className="lg:max-w-[400px] w-full 2xl:h-[32rem] lg:h-[30rem] h-[37rem] shadow-md px-10 py-10 !flex flex-col items-start bg-white text-black">
          <div className="xl:h-[9rem] mb-3">
            <img
              src="/icons/kyc.gif"
              alt="file"
              className="2xl:w-[60px] w-[70px] mx-auto"
            />
            <h5 className="2xl:text-xl text-base font-semibold font-syne mt-5">
              KYC Service
            </h5>
            </div>
            <p className="font-sora text-grayPrimary2 mt-5">
              Our dedicated team is here to guide you every step of the way,
              helping you navigate the complexities of Know Your Customer
              regulations and achieve peace of mind.
            </p>
            <NavLink
              to="/kyc"
              className="text-bluePrimary font-sora  mt-auto flex items-center gap-2"
            >
              Read more{" "}
              <span>
                <FaArrowRight />
              </span>
            </NavLink>
          </div>
        </Slider>
      </div>

      <div className="xl:max-w-[50%] mt-10  ">
        <p className="font-sora font-normal  leading-8">
          We focus on helping clients shape the future of their business, and
          execute strategies on the changing face of the customer.{" "}
          <span className="underline hover:no-underline">
            <NavLink to="/contact">Contact Us!</NavLink>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Services;
