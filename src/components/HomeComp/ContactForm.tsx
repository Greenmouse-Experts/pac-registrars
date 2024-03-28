import Button from "../Button";

function ContactForm() {
  return (
    <div className="bg-white px-8 2xl:py-20 py-10 w-[57%]  ml-3 shadow-md">
      <form className="flex flex-col 2xl:gap-10 gap-5">
        <h5 className="font-montserrat text-[22px] font-semibold  ">
          Contact Us
        </h5>
        <p className="leading-5 font-medium font-montserrat text-black">
          Complete control over products allows us to ensure our customers
          receive the best quality prices and service. We take great pride in
          everything that we do in our factory.
        </p>
        <div className=" flex justify-between gap-8">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#F4F4F4] 2xl:h-[69px] h-[50px] pl-5 w-[373px]"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-[#F4F4F4] w-[373px] 2xl:h-[69px] h-[50px] pl-5"
          />
        </div>
        <div className=" ">
          <input
            type="tel"
            placeholder="Phone"
            className="bg-[#F4F4F4] 2xl:h-[69px] h-[50px] pl-5 w-full"
          />
        </div>
        <div className=" ">
          <textarea
            placeholder="Additional details"
            className="bg-[#F4F4F4] h-[120px] pl-5 w-full pt-4"
          />
        </div>
        <Button>Submit Form</Button>
      </form>
    </div>
  );
}

export default ContactForm;
