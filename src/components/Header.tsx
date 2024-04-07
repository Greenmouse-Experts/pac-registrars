import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";


function Header() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-white 2xl:h-[112px] flex items-center justify-between md:px-10 px-5 2xl:px-14 py-2 relative ">
      <NavLink to="/">
        <img
          src="/logo.jpg"
          alt="logo"
          className="md:w-[300px] w-[200px] h-[50px] md:mb-1"
        />
      </NavLink>

      <div
        className={`flex md:flex md:flex-row md:px-0 md:py-0 flex-col  2xl:gap-[53px] absolute ml-auto z-40 w-full md:w-fit md:items-center py-5 bg-white gap-[25px] px-5 ${
          menu ? "top-[70px]" : "top-[-1000px]"
        } left-0 unset transition-all`}
      >
        <nav className="w-full">
          <ul className="md:flex md:flex-row flex-col 2xl:gap-[30px] items-center  gap-[20px]">
            <li className="">
              <NavLink
                className="hover:bg-bluePrimary hover:text-white w-full md:hover:bg-white md:hover:text-bluePrimary transition-all"
                to=""
              >
                Home
              </NavLink>
            </li>
            <li className="relative" onMouseLeave={() => setOpen(false)}>
              <p
                className="2xl:text-[17px] md:text-[13px] font-normal mt-1 ml-1 md:ml-0 cursor-pointer flex items-center text-nowrap"
                onMouseEnter={() => setOpen(true)}
              >
                About Us <IoMdArrowDropdown />
              </p>
              <span
                className={`border border-white py-1 absolute w-[200px] left-[-5px] flex flex-col justify-center items-center divide-y-[1px] divide-slate-500 bottom-[-10] z-50 bg-gray-100 ${
                  open ? "block" : "hidden"
                }`}
              >
                <NavLink
                  className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
                  onClick={() => setOpen((prev) => !prev)}
                  to="/about"
                >
                  Overview
                </NavLink>
                <NavLink
                  className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
                  onClick={() => setOpen((prev) => !prev)}
                  to="/leadership"
                >
                  Board Of Directors
                </NavLink>
                <NavLink
                  className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
                  onClick={() => setOpen((prev) => !prev)}
                  to="/management"
                >
                  Management Team
                </NavLink>
                <NavLink
                  className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
                  onClick={() => setOpen((prev) => !prev)}
                  to="/clients"
                >
                  clients
                </NavLink>
                <NavLink
                  className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
                  onClick={() => setOpen((prev) => !prev)}
                  to="/"
                >
                  Careers
                </NavLink>
               
                <NavLink
                  className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
                  onClick={() => setOpen((prev) => !prev)}
                  to="/faqs"
                >
                  FAQs
                </NavLink>
              </span>
            </li>
            <li className="relative" onMouseLeave={() => setOpen2(false)}>
              <p
                className="2xl:text-[17px] md:text-[13px] font-normal mt-1 ml-1 md:ml-0 cursor-pointer flex items-center"
                onMouseEnter={() => setOpen2(true)}
              >
                Product <IoMdArrowDropdown />
              </p>
              <span
                className={`border border-white py-1 absolute w-[200px] left-[-5px] flex flex-col justify-center items-center divide-y-[1px] divide-slate-500 bottom-[-10] z-50 bg-gray-100 ${
                  open2 ? "block" : "hidden"
                }`}
              >
                <NavLink
                  className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
                  onClick={() => setOpen2((prev) => !prev)}
                  to="/"
                >
                  Digital Update Form
                </NavLink>
                <NavLink
                  className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
                  onClick={() => setOpen2((prev) => !prev)}
                  to="/"
                >
                  Annual Report
                </NavLink>
              </span>
            </li>
            <li className="relative" onMouseLeave={() => setOpen1(false)}>
              <p
                className="2xl:text-[17px] md:text-[13px] font-normal mt-1 ml-1 md:ml-0 cursor-pointer flex items-center"
                onMouseEnter={() => setOpen1(true)}
              >
                Services <IoMdArrowDropdown />
              </p>
              <span
                className={`border border-white py-1 absolute w-[200px] left-[-5px] flex flex-col justify-center items-center divide-y-[1px] divide-slate-500 bottom-[-10] z-50 bg-gray-100 ${
                  open1 ? "block" : "hidden"
                }`}
              >
                <NavLink
                  className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
                  onClick={() => setOpen1((prev) => !prev)}
                  to="/"
                >
                  Data Register Mainteinance
                </NavLink>
                <NavLink
                  className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
                  onClick={() => setOpen1((prev) => !prev)}
                  to="/"
                >
                  Products
                </NavLink>
                <NavLink
                  className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
                  onClick={() => setOpen1((prev) => !prev)}
                  to="/"
                >
                  Probate Services
                </NavLink>
              </span>
            </li>
           

            <li>
              <NavLink
                className="hover:bg-bluePrimary hover:text-white w-full md:hover:bg-white md:hover:text-bluePrimary transition-all"
                to="/"
              >
               Resource
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:bg-bluePrimary hover:text-white w-full md:hover:bg-white md:hover:text-bluePrimary transition-all"
                to="/media"
              >
                Media
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:bg-bluePrimary hover:text-white w-full md:hover:bg-white md:hover:text-bluePrimary transition-all text-nowrap"
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          className="flex md:flex-row sm:flex-col gap-3 relative "
          onMouseLeave={() => setOpen3(false)}
        >
          <Button onMouseEnter={() => setOpen3(true)} type="">
            PORTAL LOGIN <IoMdArrowDropdown />
          </Button>
          <span
            className={`border border-white py-1 absolute w-[200px] top-10 left-[-5px] flex flex-col justify-center items-center divide-y-[1px] divide-slate-500 bottom-[-10] z-50 bg-gray-100 ${
              open3 ? "block" : "hidden"
            }`}
          >
            <NavLink
              className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
              onClick={() => setOpen3((prev) => !prev)}
              to="/"
            >
              Share Holder
            </NavLink>
            <NavLink
              className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
              onClick={() => setOpen3((prev) => !prev)}
              to="/"
            >
              Brokers
            </NavLink>
            <NavLink
              className="hover:bg-bluePrimary py-3 px-1 w-full text-center hover:text-white"
              onClick={() => setOpen3((prev) => !prev)}
              to="/"
            >
              Client
            </NavLink>
          </span>
          <Button type="">
            SELF SERVICE
          </Button>
        </div>
      </div>
      <div
        className=" block 2xl:hidden md:hidden"
        onClick={() => setMenu((open) => !open)}
      >
        <img src="/icons/hamburger.svg" alt="" />
      </div>
    </header>
  );
}

export default Header;

//  <div className="md:flex md:flex-row md:px-0 md:py-0 flex-col items-center 2xl:gap-[53px] ml-auto z-40 w-full py-5 bg-white gap-[25px] px-5 top-[40px] left-0 unset ">
