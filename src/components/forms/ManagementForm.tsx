
import Button from '../Button'

function ManagementForm() {
  return (
    <form className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-10">
    <h5 className="font-montserrat text-[1.4rem] font-semibold  ">
      Contact Us
    </h5>
    <p className=" font-medium font-montserrat  ">
    Are you in need of our Document Management System or you are considering referring us to a client, please click here to provide your details. Be sure that our staff will reach out to you.
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
        placeholder="Name of Organization"
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

export default ManagementForm