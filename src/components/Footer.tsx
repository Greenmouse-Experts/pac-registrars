import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-bluePrimary h-[705px] pt-[100px] px-[80px] flex gap-20 pb-2 ">
      <div className="w-[570px] flex flex-col gap-10">
        <p className="text-[20px] font-medium text-white">
          Subscribe to our Newsletter
        </p>
        <div className="relative flex items-center w-[500px] ">
          <input
            type="text"
            placeholder="Your email"
            className="h-[82px] w-full rounded-[62px] bg-white p-2 pl-8"
          />
          <button className="absolute right-2 bg-[#F57C00] w-[159px] h-[72px] rounded-[43px] text-white">
            submit
          </button>
        </div>
        <p className="text-white leading-[42.3px]">
          PAC Registrars, a subsidiary of PanAfrican Capital Holdings Limited
          was established in 2006 as Spring Registrars Limited.{" "}
        </p>
      </div>
      <div className="flex flex-wrap gap-20">
        <div>
          <p className="font-medium text-[20px] text-white">Company</p>
          <ul className="flex flex-col gap-8 mt-14">
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">About Us</NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">Services</NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">Gallary</NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">FAQs</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-[20px] text-white">Useful Links</p>
          <ul className="flex flex-col gap-8 mt-14">
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">Downloads</NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">self Service</NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">Services</NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">Terms & Conditions</NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">Privacy</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-[20px] text-white">Social</p>
          <ul className="flex flex-col gap-8 mt-14">
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">Facebook</NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">Instagram</NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">Twitter(x)</NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">LinkedIn</NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">Youtube</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-[20px] text-white">Contact Us</p>
          <ul className="flex flex-col gap-8 mt-14">
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="/">122, Bode Thomas St, Surulere, Lagos.</NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="mailto:info@pacregistrars.com">
                info@pacregistrars.com
              </NavLink>
            </li>
            <li className="text-[16px] text-grayPrimary font-medium">
              <NavLink to="tel:+234 908 679 0272">+234 908 679 0272</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
