
import Button from '../Button'

function SecretarialForm() {
  return (
    <form className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-10 form-shadow">
          <h5 className="font-montserrat text-[1.4rem] font-semibold  ">
            Contact Us
          </h5>
          <p className=" font-medium font-montserrat  ">
            Are you in need of our expertise in the company secretarial service
            or do you have a firm you want to refer to us? Please drop your
            details by clicking here. Our staff will contact you for the next
            step.
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
          <div className=" justify-between gap-8 w-full ">
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-[#F4F4F4] 2xl:h-[60px]  h-[50px] pl-5 w-full"
            />
          </div>
          <div className=" ">
            <input
              type="tel"
              placeholder="WhatsApp Number"
              className="bg-[#F4F4F4]  w-full 2xl:h-[60px]  h-[50px] pl-5"
            />
          </div>
          <div className=" ">
            <input
              type="text"
              placeholder="Name of Firm"
              className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-grayPrimary2">
                Need company secretarial service?
              </p>
            </div>
            <label className="text-lg flex gap-2 text-grayPrimary2">
              <input type="checkbox" name="" id="" className="w-4"/>
              Yes
            </label>
            <label className="text-lg flex gap-2 text-grayPrimary2">
              <input type="checkbox" name="" id="" className="w-4"/>
              No
            </label>
          </div>
          <div className=" ">
            <input
              type="text"
              placeholder="Address of Firm"
              className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
            />
          </div>
          <div className=" ">
            <textarea
              placeholder="Brief details of the service you want from us"
              className="bg-[#F4F4F4] placeholder:text-[text-grayPrimary2] h-[7.5rem] pl-5 pt-4 w-full"
            />
          </div>

          <Button type="">Submit Form</Button>
        </form>
  )
}

export default SecretarialForm