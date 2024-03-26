import Button from "../Button";

function ContactForm() {
  return (
    <div className="bg-white px-8 py-20 w-[50%]">
      <form className="flex flex-col gap-10">
        <h5 className="font-montserrat text-[28px] font-semibold ">
          Contact Us
        </h5>
        <p className="leading-7 font-montserrat ">
          Complete control over products allows us to ensure our customers
          receive the best quality prices and service. We take great pride in
          everything that we do in our factory.
        </p>
        <div className=" flex justify-between gap-8">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#F4F4F4] h-[69px] pl-5 w-[373px]"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-[#F4F4F4] w-[373px] h-[69px] pl-5"
          />
        </div>
        <div className=" ">
          <input
            type="tel"
            placeholder="Phone"
            className="bg-[#F4F4F4] h-[69px] pl-5 w-full"
          />
        </div>
        <div className=" ">
          <textarea
            placeholder="Additional details"
            className="bg-[#F4F4F4] h-[144px] pl-5 w-full pt-4"
          />
        </div>
        <Button>Submit Form</Button>
      </form>
    </div>
  );
}

export default ContactForm;
