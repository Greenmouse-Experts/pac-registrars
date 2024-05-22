import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { RiUserSettingsFill, RiUserStarFill } from "react-icons/ri";

function Header() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-white h-[6rem] flex items-center justify-between md:px-10 px-5 2xl:px-[7%] py-2 xl:relative z-50 w-full fixed">
      <NavLink onClick={() => setMenu(false)} to="/">
        <img
          src="/logo.jpg"
          alt="logo"
          className="md:w-[300px] w-[200px] h-[50px] md:mb-1"
        />
      </NavLink>

      <div
        className={`flex md:flex xl:flex-row md:px-0 md:py-0 flex-col  2xl:gap-[53px]  fixed ml-auto z-40 w-[22rem] h-screen  xl:w-fit xl:h-auto md:items-center py-5 bg-white gap-[25px] px-5 ${
          menu ? "left-0 top-[6rem]" : "left-[-1000px] top-[6rem]"
        } left-0 unset transition-all`}
      >
        <nav className="w-full scroll">
          <ul className="md:flex xl:flex-row flex-col 2xl:gap-[30px] xl:items-center items-start xl:pt-0 xl:pl-0  sm:pl-20 pl-10 pt-3  gap-[20px]">
            <li className="">
              <NavLink
                onClick={() => setMenu(false)}
                className="lg:text-[1.05rem] text-base  w-full md:hover:bg-white md:hover:text-bluePrimary transition-all"
                to=""
              >
                Home
              </NavLink>
            </li>
            <li className="relative flex flex-col justify-center items-start" onMouseLeave={() => setOpen(false)}>
              <p
                className="2xl:text-[1.05rem] text-base font-normal py-2 ml-2 md:ml-0 cursor-pointer flex items-center gap-2 text-nowrap"
                onMouseEnter={() => setOpen(true)}
              >
                About Us{" "}
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </p>
              <div
                className={` py-3 absolute w-[18rem] -left-14 xl:flex hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all font-normal  ${
                  open ? "top-10" : "-top-60"
                }`}
              >
                <NavLink
                  className=" py-3 px-2 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300 "
                  onClick={() => {
                    setOpen((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/about"
                >
                  <span>
                    <MdManageSearch  size={30} />
                  </span>
                  Overview
                </NavLink>
                <NavLink
                  className=" py-3 px-2 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                  onClick={() => {
                    setOpen((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/leadership"
                >
                  <span>
                    <FaUsersGear  size={25} />
                  </span>
                  Leadership
                </NavLink>
                <NavLink
                  className=" py-3 px-2 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                  onClick={() => {
                    setOpen((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/management"
                >
                  <span>
                    <RiUserSettingsFill  size={25} />
                  </span>
                  Management
                </NavLink>
                <NavLink
                  className=" py-3 px-2 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                  onClick={() => {
                    setOpen((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/clients"
                >
                  <span>
                    <RiUserStarFill  size={25} />
                  </span>
                  Clients
                </NavLink>
              </div>
              <div    className={` py-1  -left-14 xl:hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all ${
                  open ? "flex" : "hidden"
                }`}>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap "
                  onClick={() => {
                    setMenu(false);
                  }}
                  to="/about"
                >
                  Overview
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setMenu(false);
                  }}
                  to="/leadership"
                >
                  
                  Leadership
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setMenu(false);
                  }}
                  to="/management"
                >
                 
                  Management
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setMenu(false);
                  }}
                  to="/clients"
                >
                  
                  Clients
                </NavLink>
              </div>
            </li>

            <li className="relative" onMouseLeave={() => setOpen1(false)}>
              <p
                className="lg:text-[1.05rem] text-base font-normal py-2 ml-2 md:ml-0 cursor-pointer flex items-center gap-2"
                onMouseEnter={() => setOpen1(true)}
              >
                Services{" "}
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </p>
              <div
                className={` py-1 absolute w-[21rem] -left-14 xl:flex hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all font-normal  pr-10 ${
                  open1 ? "top-10" : "-top-[30rem]"
                }`}
              >
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/data-register-maintenance"
                >
                  <img src="/icons/si-1.svg" alt="" />
                  Register Maintenance
                </NavLink>

                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/document-management"
                >
                  <img src="/icons/si-2.svg" alt="" />
                  Document Management
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/company-secretarial"
                >
                  <img src="/icons/si-3.svg" alt="" />
                  Company Secretarial
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/probate-services"
                >
                  <img src="/icons/si-4.svg" alt="" />
                  Probate/ Transmission
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/kyc"
                >
                  <img src="/icons/si-5.svg" alt="" />
                  KYC Services
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/web-registry"
                >
                  <img src="/icons/si-6.svg" alt="" />
                  Web Registry
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/"
                >
                  <img src="/icons/si-7.svg" alt="" />
                  e-Notification
                </NavLink>
              </div>
              <div    className={` py-1  -left-14 xl:hidden flex-col justify-center items-center z-5  rounded-2xl p-5 transition-all ${
                  open1 ? "flex" : "hidden"
                }`}>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/data-register-maintenance"
                >
                  
                  Register Maintenance
                </NavLink>

                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/document-management"
                >
                  
                  Document Management
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/company-secretarial"
                >
                 
                  Company Secretarial
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/probate-services"
                >
                 
                  Probate/ Transmission
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/kyc"
                >
                
                  KYC Services
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/web-registry"
                >
                  
                  Web Registry
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setOpen1((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/"
                >
                 
                  e-Notification
                </NavLink>
              </div>
            </li>
            <li className="relative" onMouseLeave={() => setOpen2(false)}>
              <p
                className="lg:text-[1.05rem] text-base font-normal py-2 ml-2 md:ml-0 cursor-pointer flex items-center gap-2"
                onMouseEnter={() => setOpen2(true)}
              >
                Product{" "}
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </p>
              <div
                className={` py-1 absolute w-[16rem] -left-14 xl:flex hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 font-normal transition-all  pr-10 ${
                  open2 ? "top-10" : "-top-[14rem]"
                }`}
              >
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
                  to="/"
                  onClick={() => setMenu(false)}
                >
                  <img src="/icons/pi-1.svg" alt="" />
                  Proptyplus
                </NavLink>
              </div>
              <div    className={` py-1  -left-14 xl:hidden flex-col justify-center items-center z-5  rounded-2xl p-5 transition-all ${
                  open2 ? "flex" : "hidden"
                }`}>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  to="/"
                  onClick={() => setMenu(false)}
                >
                 
                  Proptyplus
                </NavLink>
              </div>
            </li>
            <li className="relative" onMouseLeave={() => setOpen3(false)}>
              <p
                className="lg:text-[1.05rem] text-base font-normal py-2 ml-2 md:ml-0 cursor-pointer flex items-center gap-2"
                onMouseEnter={() => setOpen3(true)}
              >
                Resources{" "}
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </p>
              <div
                className={` py-1 absolute w-[21rem] -left-14 xl:flex hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all font-normal  pr-10 ${
                  open3 ? "top-10" : "-top-[30rem]"
                }`}
              >
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
                  onClick={() => {
                    setOpen3((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/"
                >
                  <img src="/icons/ri-1.svg" alt="" />
                  Company's Annual Report
                </NavLink>

                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
                  onClick={() => {
                    setOpen3((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/"
                >
                  <img src="/icons/ri-2.svg" alt="" />
                  Forms
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
                  onClick={() => {
                    setOpen3((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/faqs"
                >
                  <img src="/icons/ri-3.svg" alt="" />
                  FAQs
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
                  onClick={() => {
                    setOpen3((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/media"
                >
                  <img src="/icons/ri-4.svg" alt="" />
                  Media
                </NavLink>
              </div>
              <div    className={` py-1  -left-14 xl:hidden flex-col justify-center items-center z-5  rounded-2xl p-5 transition-all ${
                  open3 ? "flex" : "hidden"
                }`}>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setOpen3((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/"
                >
                 
                  Company's Annual Report
                </NavLink>

                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setOpen3((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/"
                >
                 
                  Forms
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setOpen3((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/faqs"
                >
                 
                  FAQs
                </NavLink>
                <NavLink
                  className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-base text-nowrap"
                  onClick={() => {
                    setOpen3((prev) => !prev);
                    setMenu(false);
                  }}
                  to="/media"
                >
               
                  Media
                </NavLink>
              </div>
            </li>

            <li>
              <NavLink
                onClick={() => setMenu(false)}
                className="lg:text-[1.05rem] text-base  w-full md:hover:bg-white md:hover:text-bluePrimary transition-all text-nowrap"
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          className="flex md:flex-row sm:flex-col gap-3 relative "
          onMouseLeave={() => setOpen4(false)}
        >
          <Button onMouseEnter={() => setOpen4(true)} type="">
            Portal Login{" "}
            <span>
              <MdKeyboardArrowDown />
            </span>
          </Button>
          <div
            className={` py-1 absolute w-[15rem] -left-14 xl:flex hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all font-normal  pr-10 ${
              open4 ? "top-10" : "-top-[30rem]"
            }`}
          >
            <NavLink
              className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
              onClick={() => {
                setOpen4((prev) => !prev);
                setMenu(false);
              }}
              to="/"
            >
              <img src="/icons/li-1.svg" alt="" />
              Shareholders
            </NavLink>

            <NavLink
              className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
              onClick={() => {
                setOpen4((prev) => !prev);
                setMenu(false);
              }}
              to="/"
            >
              <img src="/icons/li-2.svg" alt="" />
              Brokers
            </NavLink>
            <NavLink
              className=" py-3 px-1 w-full flex items-center gap-4 text-center text-[#111111] text-lg text-nowrap"
              onClick={() => {
                setOpen4((prev) => !prev);
                setMenu(false);
              }}
              to="/clients"
            >
              <img src="/icons/li-3.svg" alt="" />
              Clients
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className=" block 2xl:hidden xl:hidden cursor-pointer"
        onClick={() => setMenu((open) => !open)}
      >
        <img src="/icons/hamburger.svg" alt="" />
      </div>
    </header>
  );
}

export default Header;

//  <div className="md:flex md:flex-row md:px-0 md:py-0 flex-col items-center 2xl:gap-[53px] ml-auto z-40 w-full py-5 bg-white gap-[25px] px-5 top-[40px] left-0 unset ">
