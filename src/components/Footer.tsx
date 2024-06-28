import { FiMail, FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-footerImg bg-center bg-no-repeat bg-cover pt-[100px]  pb-2 ">
      <div className="flex gap-20 lg:flex-row flex-col items-start lg:gap-32 lg:justify-start justify-center">
        <div className="  lg:w-[35%] w-full flex flex-col gap-10">
          <p className="font-medium lg:text-base text-sm text-white">
            Subscribe to our Newsletter
          </p>
          <div className="relative flex items-center 2xl:w-[450px] sm:w-[350px] w-full ">
            <input
              type="text"
              placeholder="Your email"
              className="2xl:h-[70px] h-[55px] w-full rounded-[62px] bg-white p-2 pl-8"
            />
            <button className="absolute right-1 bg-bluePrimary 2xl:w-[150px] w-[120px] 2xl:h-[62px] h-[48px] rounded-[43px] text-white">
              submit
            </button>
          </div>
          <p className="text-white lg:text-base text-sm !leading-8 ">
            PAC Registrars, a subsidiary of PanAfrican Capital Holdings Limited
            was established in 2006 as Spring Registrars Limited.{" "}
          </p>
          <img
            src="/images/footer-logo.png"
            alt=""
            className="w-[7rem] -mt-3"
          />
        </div>
        <div className="flex flex-wrap  gap-20">
          <div>
            <p className="font-medium 2xl:text-base text-[12px] text-white">
              Company
            </p>
            <ul className="flex flex-col 2xl:gap-6 gap-4 lg:mt-14 mt-5">
              <li className="text-[10px] text-grayPrimary font-medium">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/proptyplus">Product</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/media">Media</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/faqs">FAQs</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium 2xl:text-base text-[12px] text-white">
              Services
            </p>
            <ul className="flex flex-col 2xl:gap-6 gap-4 lg:mt-14 mt-5">
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/register-maintenance">
                  Register Maintenance
                </NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/document-management">Document Management</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/company-secretarial">Company Secretarial</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/probate-services">Probate/ Transmission</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/kyc">KYC Services</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/web-registry">Web Registry</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/e-notification">E-Notification</NavLink>
              </li>
            </ul>
          </div>
          {/* <div>
            <p className="font-medium 2xl:text-base text-[12px] text-white">Social</p>
            <ul className="flex flex-col 2xl:gap-6 gap-4 lg:mt-14 mt-5">
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">Facebook</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">Instagram</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">Twitter(x)</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">LinkedIn</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">Youtube</NavLink>
              </li>
            </ul>
          </div> */}
          <div>
            <p className="font-medium 2xl:text-base text-[12px] text-white">
              Contact Us
            </p>
            <ul className="flex flex-col 2xl:gap-6 gap-4 lg:mt-14 mt-5">
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/" className="flex items-center gap-2">
                  <span>
                    <SlLocationPin size={22} />
                  </span>{" "}
                  122, Bode Thomas Street,Surulere, <br /> Lagos State
                </NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink
                  to="mailto:info@pacregistrars.com"
                  className="flex items-center gap-2"
                >
                  <span>
                    <FiMail size={20} />
                  </span>
                  info@pacregistrars.com
                </NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink
                  className="flex items-center gap-2"
                  to="tel:+234 908 679 0272"
                >
                  <span>
                    <FiPhone size={20} />
                  </span>{" "}
                  +234 908 679 0272
                </NavLink>
              </li>
              <li className="flex gap-3 items-center">
                <span>
                  <NavLink to="https://www.linkedin.com/">
                    <img src="/icons/social-1.svg" alt="" className="w-6" />
                  </NavLink>
                </span>
                <span>
                  <NavLink to="https://web.facebook.com/PACHoldingsLtd/">
                    <img src="/icons/social-2.svg" alt="" className="w-6" />
                  </NavLink>
                </span>
                <span>
                  <NavLink to="https://www.instagram.com/">
                    <img src="/icons/social-3.svg" alt="" className="w-6" />
                  </NavLink>
                </span>
                <span>
                  <NavLink to="https://x.com/PACHoldingsLtd">
                    <img src="/icons/social-4.svg" alt="" className="w-6" />
                  </NavLink>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-grayPrimary flex justify-center items-center lg:mx-10 mx-0 py-10 border-t-[0.7px] border-grayPrimary mt-16">
        <p className="text-base">
          Copyright © 2024 . PAC Registrars | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
