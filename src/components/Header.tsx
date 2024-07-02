import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { MdHeadsetMic, MdKeyboardArrowDown, MdPermMedia } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import { FaNetworkWired, FaRegFolderOpen, FaUsersGear } from "react-icons/fa6";
import {
  RiUserSearchFill,
  RiUserSettingsFill,
  RiUserStarFill,
} from "react-icons/ri";
import { PiClipboardText, PiHandshake } from "react-icons/pi";
import { VscLaw } from "react-icons/vsc";
import { IoIosCloud, IoIosNotifications, IoMdBusiness, IoMdCloudOutline } from "react-icons/io";
import { HiDocumentChartBar, HiUsers } from "react-icons/hi2";
import { GiNotebook } from "react-icons/gi";
import { FaQuestionCircle } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-bluePrimary pt-3   z-50 w-full fixed">
      <div className="bg-white h-[6rem] flex items-center justify-between md:px-10 px-5 xl:px-[7%] py-2 xl:relative z-50 w-full fixed">
        <NavLink onClick={() => setMenu(false)} to="/">
          <img
            src="/logo.jpg"
            alt="logo"
            className="md:w-[300px] w-[200px] h-[50px] md:mb-1"
          />
        </NavLink>

        <div
          className={`flex md:flex xl:flex-row md:px-0 md:py-0 flex-col  2xl:gap-[53px]  fixed 2xl:ml-auto z-40 w-[24rem] h-screen  xl:w-fit xl:h-auto md:items-center py-5 bg-white gap-[25px] px-5 ${
            menu ? "left-0 top-[6rem]" : "left-[-1000px] top-[6rem]"
          } left-0 unset transition-all`}
        >
          <nav className="w-full scroll lg:text-[1.05rem] !text-lg  font-medium">
            <ul className="md:flex xl:flex-row flex-col 2xl:gap-[30px] xl:items-center items-start xl:pt-0 xl:pl-0  sm:pl-20 pl-10 pt-3  gap-[20px]">
              <li className="">
                <NavLink
                  onClick={() => setMenu(false)}
                  className="lg:text-[1.05rem] text-lg w-full !font-semibold"
                  to=""
                >
                  Home
                </NavLink>
              </li>
              <li
                className="relative flex flex-col justify-center items-start"
                onMouseLeave={() => setOpen(false)}
              >
                <p
                  className="xl:text-[1.05rem] text-lg font-semibold  py-2  cursor-pointer flex items-center gap-2 text-nowrap"
                  onMouseEnter={() => setOpen(true)}
                >
                  About Us{" "}
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </p>
                <div
                  className={` py-3 absolute w-[18rem] -left-14 xl:flex hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all   ${
                    open ? "top-10" : "-top-72"
                  }`}
                >
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300 "
                    onClick={() => {
                      setOpen((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/about"
                  >
                    <span>
                      <MdManageSearch size={30} />
                    </span>
                    Overview
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/leadership"
                  >
                    <span>
                      <FaUsersGear size={25} />
                    </span>
                    Leadership
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/management"
                  >
                    <span>
                      <RiUserSettingsFill size={25} />
                    </span>
                    Management
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/clients"
                  >
                    <span>
                      <RiUserStarFill size={25} />
                    </span>
                    Clients
                  </NavLink>
                </div>
                <div
                  className={` py-1  -left-14 xl:hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all ${
                    open ? "flex" : "hidden"
                  }`}
                >
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap "
                    onClick={() => {
                      setMenu(false);
                    }}
                    to="/about"
                  >
                    Overview
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setMenu(false);
                    }}
                    to="/leadership"
                  >
                    Leadership
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setMenu(false);
                    }}
                    to="/management"
                  >
                    Management
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
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
                  className="lg:text-[1.05rem] text-lg font-semibold  py-2  cursor-pointer flex items-center gap-2"
                  onMouseEnter={() => setOpen1(true)}
                >
                  Services{" "}
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </p>
                <div
                  className={` py-3 absolute w-[21rem] -left-14 xl:flex hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all  ${
                    open1 ? "top-10" : "-top-[30rem]"
                  }`}
                >
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/register-maintenance"
                  >
                    <span>
                      <PiClipboardText size={25} />
                    </span>
                    Register Maintenance
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/document-management"
                  >
                    <span>
                      <FaRegFolderOpen size={25} />
                    </span>
                    Document Management
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/company-secretarial"
                  >
                    <span>
                      <MdHeadsetMic size={25} />
                    </span>
                    Company Secretarial
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/probate-services"
                  >
                    <span>
                      <VscLaw size={25} />
                    </span>
                    Probate/ Transmission
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/kyc"
                  >
                    <span>
                      <RiUserSearchFill size={25} />
                    </span>
                    KYC Services
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/web-registry"
                  >
                    <span>
                      <IoIosCloud size={25} />
                    </span>
                    Web Registry
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/e-notification"
                  >
                    <span>
                      <IoIosNotifications size={25} />
                    </span>
                    Electronic Repository System (ERS)
                  </NavLink>
                </div>
                <div
                  className={` py-1  -left-14 xl:hidden flex-col justify-center items-center z-5  rounded-2xl p-5 transition-all ${
                    open1 ? "flex" : "hidden"
                  }`}
                >
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/register-maintenance"
                  >
                    Register Maintenance
                  </NavLink>

                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/document-management"
                  >
                    Document Management
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/company-secretarial"
                  >
                    Company Secretarial
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/probate-services"
                  >
                    Probate/ Transmission
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/kyc"
                  >
                    KYC Services
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/web-registry"
                  >
                    Web Registry
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setOpen1((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/e-notification"
                  >
                    Electronic Repository System
                  </NavLink>
                </div>
              </li>
              <li className="relative" onMouseLeave={() => setOpen2(false)}>
                <p
                  className="lg:text-[1.05rem] text-lg font-semibold   py-2  cursor-pointer flex items-center gap-2"
                  onMouseEnter={() => setOpen2(true)}
                >
                  Product{" "}
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </p>
                <div
                  className={` py-3 absolute w-[16rem] -left-14 xl:flex hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5  transition-all ${
                    open2 ? "top-10" : "-top-[14rem]"
                  }`}
                >
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    to="/proptyplus"
                    onClick={() => setMenu(false)}
                  >
                    <PiHandshake size={25} />
                    Proptyplus
                  </NavLink>
                </div>
                <div
                  className={` py-1  -left-14 xl:hidden flex-col justify-center items-center z-5  rounded-2xl p-5 transition-all ${
                    open2 ? "flex" : "hidden"
                  }`}
                >
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    to="/proptyplus"
                    onClick={() => setMenu(false)}
                  >
                    Proptyplus
                  </NavLink>
                </div>
              </li>
              <li className="relative" onMouseLeave={() => setOpen3(false)}>
                <p
                  className="lg:text-[1.05rem] text-lg  py-2 font-semibold   cursor-pointer flex items-center gap-2"
                  onMouseEnter={() => setOpen3(true)}
                >
                  Resources{" "}
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </p>
                <div
                  className={` py-3 absolute w-[21rem] -left-14 xl:flex hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all  ${
                    open3 ? "top-10" : "-top-[30rem]"
                  }`}
                >
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen3((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/annual-report"
                  >
                    <HiDocumentChartBar size={25} />
                    Company's Annual Report
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen3((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/forms"
                  >
                    <GiNotebook size={25} />
                    Forms
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen3((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/faqs"
                  >
                    <FaQuestionCircle size={25} />
                    FAQs
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen3((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/media"
                  >
                    <MdPermMedia size={25} />
                    Media
                  </NavLink>
                </div>
                <div
                  className={` py-1  -left-14 xl:hidden flex-col justify-center items-center z-5  rounded-2xl p-5 transition-all ${
                    open3 ? "flex" : "hidden"
                  }`}
                >
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setOpen3((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/annual-report"
                  >
                    Company's Annual Report
                  </NavLink>

                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setOpen3((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/forms"
                  >
                    Forms
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setOpen3((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/faqs"
                  >
                    FAQs
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
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
                  className="lg:text-[1.05rem] text-lg w-full font-semibold md:hover:bg-white md:hover:text-bluePrimary transition-all text-nowrap"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
          <div
            className="flex items-start justify-start flex-col gap-3 relative "
            onMouseLeave={() => setOpen4(false)}
          >
            <Button onMouseEnter={() => setOpen4(true)} type="">
              Portal Login{" "}
              <span>
                <MdKeyboardArrowDown />
              </span>
            </Button>
            <div
              className={` py-3 absolute w-[17rem] -left-14 xl:flex hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all   ${
                open4 ? "top-10" : "-top-[30rem]"
              }`}
            >
              <NavLink
                className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                onClick={() => {
                  setOpen4((prev) => !prev);
                  setMenu(false);
                }}
                to="https://shareholder.pacregistrarslimited.com/login.aspx"
              >
                <FaNetworkWired size={25} />
                Shareholders
              </NavLink>
              <NavLink
                className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                onClick={() => {
                  setOpen4((prev) => !prev);
                  setMenu(false);
                }}
                to="/"
              >
                <IoMdBusiness size={25} />
                Brokers
              </NavLink>
              <NavLink
                className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                onClick={() => {
                  setOpen4((prev) => !prev);
                  setMenu(false);
                }}
                to="http://clients.pacregistrarslimited.com/login.aspx"
              >
                <HiUsers size={25} />
                Clients
              </NavLink>
              <NavLink
                className=" py-3 px-2 w-full flex items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-bluePrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                onClick={() => {
                  setOpen4((prev) => !prev);
                  setMenu(false);
                }}
                to="http://api.pacregistrarslimited.com/"
              >
                <span><IoMdCloudOutline size={25} /></span>
                Fund Manager API
              </NavLink>
            </div>
            <div
              className={` py-1  -left-14 xl:hidden flex-col justify-center items-center z-5  rounded-2xl p-5 transition-all ${
                open4 ? "flex" : "hidden"
              }`}
            >
              <NavLink
                className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                onClick={() => {
                  setOpen3((prev) => !prev);
                  setMenu(false);
                }}
                to="https://shareholder.pacregistrarslimited.com/login.aspx"
              >
                Shareholders
              </NavLink>

              <NavLink
                className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                onClick={() => {
                  setOpen3((prev) => !prev);
                  setMenu(false);
                }}
                to="/"
              >
                Brokers
              </NavLink>
              <NavLink
                className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                onClick={() => {
                  setOpen3((prev) => !prev);
                  setMenu(false);
                }}
                to="http://clients.pacregistrarslimited.com/login.aspx"
              >
                Clients
              </NavLink>
              <NavLink
                className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                onClick={() => {
                  setOpen3((prev) => !prev);
                  setMenu(false);
                }}
                to="http://api.pacregistrarslimited.com/"
              >
                 Fund Manager API
              </NavLink>
            
            </div>
          </div>
        </div>
        <div
          className=" block xl:hidden cursor-pointer"
          onClick={() => setMenu((open) => !open)}
        >
          <img src="/icons/hamburger.svg" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;

//  <div className="md:flex md:flex-row md:px-0 md:py-0 flex-col items-center 2xl:gap-[53px] ml-auto z-40 w-full py-5 bg-white gap-[25px] px-5 top-[40px] left-0 unset ">
