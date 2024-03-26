import { NavLink } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <header className="bg-white h-[112px] flex items-center justify-between px-10 2xl:px-24">
      <div>
        <img src="/logo.svg" alt="logo" className="" />
      </div>

      <div className="flex items-center 2xl:gap-[53px] gap-[25px]">
        <nav>
          <ul className="flex 2xl:gap-[59px]  gap-[25px]">
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="">Services</NavLink>
            </li>
            <li>
              <NavLink to="">Downoad</NavLink>
            </li>
            <li>
              <NavLink to="">FAQs</NavLink>
            </li>
            <li>
              <NavLink to="">Gallary</NavLink>
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
