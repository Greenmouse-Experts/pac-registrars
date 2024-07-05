
import Input from "../Input";

import Button from "../Button";

interface ITitle{
  title?:string;
}


function ProbateForm({title}:ITitle) {
 

  return (
    <form className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-10 form-shadow text-[#787878]">
       <>
      <h5 className="font-montserrat text-[1.4rem] font-semibold  text-black  ">
        {title}
      </h5>

      <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
      </div>
      <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <Input type="tel" placeholder="Phone Number" />
        <Input type="tel" placeholder="WhatsApp Number" />
      </div>
      <div className=" ">
        <Input type="text" placeholder="Name of Organization" />
      </div>
      <div className=" ">
        <Input type="text" placeholder="Place of death" />
      </div>
     
      <div className=" ">
        <Input
          type="text"
          placeholder="Do you have a preferred time for us to call you?"
        />
      </div>
    </>
      <div className=" flex items-start gap-10">
        <textarea
          placeholder="Brief details of the service you want from us"
          className="bg-[#F4F4F4] placeholder:text-[text-grayPrimary2] h-[7.5rem] pl-5 pt-4 w-full"
        />
        
      </div>

      <div className="flex items-center gap-4">
        <label className="text-lg flex gap-2 text-grayPrimary2">
          <input type="checkbox" name="" id="" className="w-4" />
          Accept Our Data Privacy Policy
        </label>
      </div>
      <Button type="">Submit</Button>
    </form>
  );
}

export default ProbateForm;
