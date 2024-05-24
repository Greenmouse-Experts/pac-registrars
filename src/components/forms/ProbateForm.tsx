import Button from "../Button";

function ProbateForm() {
  return (
    <form className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-10 form-shadow">
      <h5 className="font-montserrat text-[1.4rem] font-semibold  ">
        Contact Us
      </h5>
      <p className=" font-medium font-montserrat  ">
        Do you need to process a Letters of Administration or Grant of Probate,
        click here and fill the attached form. Our staff will contact you and
        provide the needed information to you.
      </p>
      <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <input
          type="text"
          placeholder="Name"
          className="bg-[#F4F4F4] 2xl:h-[60px]  h-[50px] pl-5 lg:w-[373px] w-full"
        />
        <input
          type="text"
          placeholder="Email"
          className="bg-[#F4F4F4] lg:w-[373px] w-full 2xl:h-[60px]  h-[50px] pl-5"
        />
      </div>
      <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <input
          type="tel"
          placeholder="Phone Number"
          className="bg-[#F4F4F4] 2xl:h-[60px]  h-[50px] pl-5 lg:w-[373px] w-full"
        />
        <input
          type="tel"
          placeholder="WhatsApp Number"
          className="bg-[#F4F4F4] lg:w-[373px] w-full 2xl:h-[60px]  h-[50px] pl-5"
        />
      </div>
      <div className=" ">
        <input
          type="text"
          placeholder="Name of Deceased Person"
          className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
        />
      </div>
      <div className=" ">
        <input
          type="text"
          placeholder="Place of death"
          className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
        />
      </div>
      <div className=" ">
        <input
          type="text"
          placeholder="Relationship with the deceased person"
          className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
        />
      </div>
      <div className=" ">
        <input
          type="text"
          placeholder="Do you have a preferred time for us to call you?"
          className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
        />
      </div>
      <Button type="">Submit Form</Button>
    </form>
  );
}

export default ProbateForm;
