import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-footerImg bg-center bg-no-repeat bg-cover pt-[100px] px-[80px]  pb-2 ">
      <div className="flex gap-20">
        <div className="2xl:w-[570px]  w-[400px] flex flex-col gap-10">
          <p className="text-[16px] font-normal text-white">
            Subscribe to our Newsletter
          </p>
          <div className="relative flex items-center 2xl:w-[500px] w-[350px] ">
            <input
              type="text"
              placeholder="Your email"
              className="2xl:h-[82px] h-[55px] w-full rounded-[62px] bg-white p-2 pl-8"
            />
            <button className="absolute right-1 bg-[#F57C00] 2xl:w-[159px] w-[120px] 2xl:h-[72px] h-[48px] rounded-[43px] text-white">
              submit
            </button>
          </div>
          <p className="text-white text-[12px] leading-[42.3px]">
            PAC Registrars, a subsidiary of PanAfrican Capital Holdings Limited
            was established in 2006 as Spring Registrars Limited.{" "}
          </p>
        </div>
        <div className="flex flex-wrap 2xl:gap-20 gap-14">
          <div>
            <p className="font-medium 2xl:text-[16px] text-[12px] text-white">Company</p>
            <ul className="flex flex-col 2xl:gap-8 gap-4 mt-14">
              <li className="text-[10px] text-grayPrimary font-medium">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">About Us</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">Services</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">Gallary</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">FAQs</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium 2xl:text-[16px] text-[12px] text-white">Useful Links</p>
            <ul className="flex flex-col 2xl:gap-8 gap-4 mt-14">
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">Downloads</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">self Service</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">Services</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">Terms & Conditions</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">Privacy</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium 2xl:text-[16px] text-[12px] text-white">Social</p>
            <ul className="flex flex-col 2xl:gap-8 gap-4 mt-14">
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
          </div>
          <div>
            <p className="font-medium 2xl:text-[16px] text-[12px] text-white">Contact Us</p>
            <ul className="flex flex-col 2xl:gap-8 gap-4 mt-14">
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="/">122, Bode Thomas St, Surulere, Lagos.</NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="mailto:info@pacregistrars.com">
                  info@pacregistrars.com
                </NavLink>
              </li>
              <li className="text-[12px] text-grayPrimary font-medium">
                <NavLink to="tel:+234 908 679 0272">+234 908 679 0272</NavLink>
              </li>
              <li className="flex gap-3 items-center">
                <span>
                  <img src="/icons/social-1.svg" alt="" className="w-4" />
                </span>
                <span>
                  <img src="/icons/social-2.svg" alt="" className="w-4" />
                </span>
                <span>
                  <img src="/icons/social-3.svg" alt="" className="w-4" />
                </span>
                <span>
                  <img src="/icons/social-4.svg" alt="" className="w-4" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-grayPrimary flex justify-center items-center mx-10 py-10 border-t-[0.7px] border-grayPrimary mt-16">
        <p className="text-[12px]">Copyright © 2024 . PAC Registrars | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
