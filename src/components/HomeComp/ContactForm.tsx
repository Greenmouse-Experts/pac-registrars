import Button from "../Button";

function ContactForm() {
  return (
    <div className="bg-bluePrimary text-white px-8 2xl:py-[70px] py-10 md:w-[55%] w-full   md:ml-3 ml-0 shadow-md">
      <form className="flex flex-col 2xl:gap-8 gap-5 ">
        <h5 className="font-montserrat text-[22px] font-semibold  ">
          Contact Us
        </h5>
        <p className="leading-5 font-medium font-montserrat text-white 2xl:leading-6">
          Complete control over products allows us to ensure our customers
          receive the best quality prices and service. We take great pride in
          everything that we do in our factory.
        </p>
        <div className=" flex md:flex-row flex-col justify-between gap-8 ">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-grayPrimary2 h-[50px] pl-5 md:w-[373px] w-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-[#F4F4F4] md:w-[373px] w-full 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5"
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
            className="bg-[#F4F4F4] h-[120px] pl-5 w-full pt-4"
          />
        </div>
        <Button type="fit">Submit Form</Button>
      </form>
    </div>
  );
}

export default ContactForm;
