import { FiMail, FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { NavLink } from "react-router-dom";

function ContactForm() {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-center 2xl:w-[90%]  mx-auto ">
      <div className="bg-[url('/images/contact-bg.png')] bg-cover bg-center md:w-[50%] w-full py-16 md:px-16 px-5 text-white">
        <h4 className="text-white font-montserrat font-semibold">
          Reach Out to Us
        </h4>
        <p className="font-[300] text-lg mt-6">
          Fill in the contact form with the appropriate information to send us a
          message and we will get back to you in 24 hours
        </p>

        <div className="flex flex-col gap-6 mt-14">
          <h6 className="text-[28px] font-montserrat font-semibold">
            Contact Details
          </h6>
          <NavLink to="https://maps.app.goo.gl/hi85qvKtrADHsqZ69">
            <p className="font-[300] text-lg flex items-center gap-2">
              <span>
                <SlLocationPin size={22} />
              </span>
              122, Bode Thomas Street, Surulere, Lagos State
            </p>
          </NavLink>

          <p className="font-[300] text-lg flex items-center gap-2">
            <span>
              <FiPhone size={20} />
            </span>
            <span className="font-normal"> Telephone:</span> +234 908 679 0272
          </p>
          <p className="font-[300] text-lg flex items-center gap-2">
            {" "}
            <span>
              <FiMail size={20} />
            </span>
            info@pacregistrars.com
          </p>
        </div>
        <div className="flex  gap-6 mt-10">
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
          {/* <span>
          <NavLink to="https://x.com/PACHoldingsLtd">
            <img src="/icons/social-4.svg" alt="" className="w-6" />
          </NavLink>
          </span> */}
        </div>

        <div className=" w-full mt-5">
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2581796808954!2d3.3587868!3d6.488955799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c0ccc118ef5%3A0xe6850737f4fa5a6c!2s122%20Bode%20Thomas%20St%2C%20Alaka%2C%20Lagos%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1720003863874!5m2!1sen!2sng"
            width="100%"
            height="300"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>

      <form className="flex md:w-[50%] w-full bg-white flex-col 2xl:gap-8 gap-5 py-16 md:px-16 px-5">
        <div className="font-monstrat flex flex-col gap-2 ">
          <label className="text-lg font-montserrat font-semibold">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
          />
        </div>
        <div className="font-monstrat flex flex-col gap-2 ">
          <label className="text-lg font-montserrat font-semibold">
            Email Address
          </label>
          <input
            type="text"
            placeholder="Your email address"
            className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
          />
        </div>
        <div className="font-monstrat flex flex-col gap-2 ">
          <label className="text-lg font-montserrat font-semibold">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Your phone number"
            className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
          />
        </div>
        <div className=" font-monstrat flex flex-col gap-2 ">
          <label className="text-lg font-montserrat font-semibold">
            Message
          </label>
          <textarea
            placeholder="Write your message here"
            className="bg-[#F4F4F4] h-[200px] pl-5 w-full pt-4"
          />
        </div>
        <button className="w-fit bg-bluePrimary  flex gap-1 items-center 2xl:py-3 2xl:px-6 py-[5px] whitespace-nowrap px-4 text-base font-semibold text-white ml-auto ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
