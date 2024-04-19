import Banner from "../../components/Banner";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import List from "../../components/List";
import ProbateModal from "../../components/modals/ProbateModal";
import { useState } from "react";

function ProbateServices() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Banner page="Probate Services" link="" />
      <section className="py-10 bg-white flex md:flex-row flex-col items-center justify-between">
        <div className="md:w-[48%] w-full relative">
          <img
            src="/images/probate-1.jpg"
            alt=""
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="md:w-[48%] w-full font-syne">
          <h4 className=" font-bold font-syne capitalize text-bluePrimary">
            PROBATE SERVICES
          </h4>
          <p className="text-[#606060] 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px] font-sora mb-10">
            PAC Registrars and Investor Services Probate Services helps take
            away the burden being faced by the beneficiaries of a deceased
            person. We are passionate about what we do which is why at the heart
            of our business is to make bereaved families happy again. Our
            offering is end-to-end and covers but not limited to the following
          </p>
          <List
            items={[
              "Procuring Grant of Probate/ Letters of Administration",
              "Death certificate processing",
              "Endorsement of Bank Certificate",
              "Amendments of Letters of Administration",
              "Obtaining certificate of additional assets",
              "Effects new mandate of the administrators",
              "Confirmation of Grant of Probate and Letters of Administration",
              "Will Filing and confirmation",
              "Receiving",
              "Annuity",
              "Gathering of Assets etc.",
            ]}
          />
          <p className="text-[#606060] 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px] font-sora mb-10">
            Do you need to process a Letters of Administration or Grant of
            Probate,{" "}
            <span
              className=" text-orangePrimary cursor-pointer"
              onClick={() => setOpen((open) => !open)}
            >
              click here
            </span>{" "}
            and fill the attached form. Our staff will contact you and provide
            the needed information to you.
          </p>
        </div>
      </section>

      <section className="my-10 py-10  bg-bluePrimary text-white">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="md:w-[48%] w-full font-syne">
            <h4 className=" font-bold font-syne text-start capitalize">
              WHY PAC REGISTRARS PROBATE SERVICES?
            </h4>
            <div className="h-[3px] bg-white my-5 w-[40%]" />
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="white" size={20} />
                </span>
                Our team of experts in Probate Services are geared towards
                providing you a hassle-free process in taking possession of
                deceased’s assets.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="white" size={20} />
                </span>{" "}
                Competitive and flexible payment plans.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="white" size={20} />
                </span>{" "}
                Timely delivery.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="white" size={20} />
                </span>
                Excellent client relationship management.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="white" size={20} />
                </span>{" "}
                Vast and well-grounded industry knowledge.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="white" size={20} />
                </span>{" "}
                Good relationship with Financial Institutions and Probate
                Registries across the nation
              </li>
            </ul>
          </div>
          <div className="md:w-[48%] w-full relative">
            <Slider {...settings}>
              <div className="w-full flex justify-center items-center">
                <img
                  src="/images/probate-1.jpg"
                  alt=""
                  className=" h-[400px] w-full object-cover object-center"
                />
              </div>
              <div className=" w-full flex justify-center items-center">
                <img
                  src="/images/probate-2.jpg"
                  alt=""
                  className=" h-[400px] w-full object-cover object-center"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="my-10 md:mx-10 mx-0 py-10  bg">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="md:w-[48%] w-full relative">
            <img
              src="/images/probate-2.jpg"
              alt=""
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:w-[48%] w-full font-syne">
            <h4 className=" font-bold font-syne text-bluePrimary text-start capitalize">
              OUR VALUE <br /> PROPOSITIONS
            </h4>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>
                Asset Gathering.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Obtaining Certificate of Additional Asset.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Effect new Mandate of the Administrators.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>
                Amendment of Letters of Administration.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Preparation of Power of Attorney Processing of Letters of
                Administration/Grants of Probate.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Marshalling of Assets
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Resealing of Grants of Probate.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Amendment of Letters of Administration.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Amendment of Letters of Administration.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Lodgments of Caveats.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-10 py-10  bg-bluePrimary text-white">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="md:w-[48%] w-full font-syne">
            <h4 className=" font-bold font-syne text-start capitalize">
              STRESS RELIEF
            </h4>
            <div className="h-[3px] bg-white my-5 w-[40%]" />
            <li className=" list-none">
              We take over the responsibility of processing probate documents at
              the High Court on your behalf and will also take away the burden
              from start to finish
            </li>
          </div>
          <div className="md:w-[48%] w-full relative">
            <Slider {...settings}>
              <div className="w-full flex justify-center items-center">
                <img
                  src="/images/probate-1.jpg"
                  alt=""
                  className=" h-[400px] w-full object-cover object-center"
                />
              </div>
              <div className=" w-full flex justify-center items-center">
                <img
                  src="/images/probate-2.jpg"
                  alt=""
                  className=" h-[400px] w-full object-cover object-center"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="my-10 md:mx-10 mx-0 py-10  bg">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="md:w-[48%] w-full relative">
            <img
              src="/images/probate-3.jpg"
              alt=""
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:w-[48%] w-full font-syne">
            <h4 className=" font-bold font-syne text-bluePrimary text-start capitalize">
              WILL SERVICES
            </h4>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>
                Preparation of Wills
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Lodgment of Wills
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Withdrawal of Wills
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>
                Ancillary Probate Services
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Dematerialization of share certificates into Central Securities
                Clearing System Plc (CSCS).
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Direct crediting of all outstanding shares into CSCS.
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Direct payment of outstanding dividends into the Estate’s bank
                account
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Total reconciliation of account
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <RiArrowRightDoubleFill color="black" size={20} />
                </span>{" "}
                Probate planning, Consultation and Advisory
              </li>
              <li className="flex items-start gap-1">
                For further enquiries on this service, kindly send us a mail
                info@pacregistrars.com or call 09086790272.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ProbateModal open={open} handleClose={handleClose} />
    </>
  );
}

export default ProbateServices;
