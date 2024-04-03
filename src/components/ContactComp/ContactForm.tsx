import Button from "../Button";

function ContactForm() {
  return (
    <div className="flex justify-center 2xl:w-[90%] mx-auto ">
      <div className="bg-[url('/images/contact-bg.png')] bg-cover bg-center w-[50%] py-16 px-16 text-white">
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
          <p className="font-[300] text-lg">
            122, Bode Thomas St, Surulere, Lagos.
          </p>
          <p className="font-[300] text-lg">
            <span className="font-normal">Telephone:</span> +234 908 679 0272
          </p>
          <p className="font-[300] text-lg">info@pacregistrars.com</p>
        </div>
        <div className="flex flex-col gap-6 mt-14">
          <h6 className="text-[28px] font-montserrat font-semibold">
          Get In Touch
          </h6>
          <p className="font-[300] text-lg">
          Do reach out to us, should you need any intel about waste solutions and mangement, and we’ll be happy to help you out.
          </p>
        
        </div>
      </div>

      <form className="flex w-[50%] bg-white flex-col 2xl:gap-8 gap-5 py-16 px-16">
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
        <Button type="fit">Submit Form</Button>
      </form>
    </div>
  );
}

export default ContactForm;
