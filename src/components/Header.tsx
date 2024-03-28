import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white 2xl:h-[112px] h-[70px] flex items-center justify-between px-20 2xl:px-24">
      <NavLink to="/">
        <img src="/logo.svg" alt="logo" className="w-[300px]" />
      </NavLink>

      <div className="flex items-center 2xl:gap-[53px] gap-[25px]">
        <nav>
          <ul className="flex 2xl:gap-[59px] items-center  gap-[25px]">
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li className="relative" onMouseLeave={() => setOpen(false)}>
              <p
                className="text-[12px] font-normal mt-1 cursor-pointer flex items-center"
                onMouseEnter={() => setOpen(true)}
              >
                About Us <IoMdArrowDropdown />
              </p>
              <span
                className={`border border-white py-5 absolute w-[200px] left-[-5px] flex flex-col justify-center gap-2 bottom-[-10] z-50 bg-gray-100 ${
                  open ? "block" : "hidden"
                }`}
              >
                <NavLink
                  className="hover:bg-bluePrimary py-2 px-2 hover:text-white"
                  onClick={() => setOpen((prev) => !prev)}
                  to="/about"
                >
                  About Us
                </NavLink>
                <NavLink
                className="hover:bg-bluePrimary py-2 px-2 hover:text-white"
                  onClick={() => setOpen((prev) => !prev)}
                  to="/leadership"
                >
                  Leadership
                </NavLink>
                <NavLink
                className="hover:bg-bluePrimary py-2 px-2 hover:text-white"
                  onClick={() => setOpen((prev) => !prev)}
                  to="/management"
                >
                  Management
                </NavLink>
                <NavLink
                className="hover:bg-bluePrimary py-2 px-2 hover:text-white"
                  onClick={() => setOpen((prev) => !prev)}
                  to="/clients"
                >
                  clients
                </NavLink>
              </span>
            </li>
            <li>
              <NavLink to="">Services</NavLink>
            </li>
            <li>
              <NavLink to="">Downloads</NavLink>
            </li>
            <li>
              <NavLink to="/faqs">FAQs</NavLink>
            </li>
            <li>
              <NavLink to="">Gallery</NavLink>
            </li>
          </ul>
        </nav>
        <Button>Get in touch</Button>
        <div>
          <img src="/icons/hamburger.svg" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
