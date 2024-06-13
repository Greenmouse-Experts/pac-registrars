import Button from "../Button";

function ContactForm() {
  return (
    <div className=" text-[#1E1E1E] px-8 2xl:py-[70px] py-10 lg:w-[55%] w-full   lg:ml-3 ml-0 form-shadow">
      <form className="flex flex-col 2xl:gap-8 gap-5" >
        <h5 className="font-montserrat text-[1.4rem] font-semibold  ">
          Contact Us
        </h5>
        <p className=" font-medium font-montserrat  ">
          Complete control over products allows us to ensure our customers
          receive the best quality prices and service. We take great pride in
          everything that we do in our factory.
        </p>
        <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-grayPrimary2 h-[50px] pl-5 lg:w-[373px] w-full"
          />
          <input
            type="text"
            placeholder="Email" 
            className="bg-[#F4F4F4] lg:w-[373px] w-full 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5"
          />
        </div>
        <div className=" ">
          <input
            type="tel"
            placeholder="Phone"
            className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
          />
        </div>
        <div className=" ">
          <textarea
            placeholder="Additional details"
            className="bg-[#F4F4F4] text-black h-[7.5rem] pl-5 w-full pt-4"
          />
        </div>
        <Button type="">Submit</Button>
      </form>
    </div>
  );
}

export default ContactForm;
