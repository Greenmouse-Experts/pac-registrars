import Input from "../Input";
import AddPassportAndSignature from "./AddPassportAndSignature";

function Form() {
  return (
    <>
      <h5 className="font-montserrat text-[1.4rem] font-semibold   text-black ">
        E-Dividend/ Mandate Processing
      </h5>

      <div>
        <label>Bank Details</label>
        <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
          <Input type="text" placeholder="BVN" />
          <Input type="text" placeholder="Account opening Date" />
        </div>
        <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
          <Input type="text" placeholder="Bank Name" />
          <Input type="text" placeholder="Account Number" />
        </div>
      </div>
      <div>
        <label>Share Holder Details</label>

        <label className="text-lg flex gap-2 text-grayPrimary2 mt-3">
          <input type="checkbox" name="" id="" className="w-4" />
          Check this box if this is company account
        </label>

        <div className=" flex lg:flex-row flex-col items-center justify-between gap-8 mt-2 ">
          <select name="" id="" className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-2 w-[38%]">
            <option value="">Mr</option>
            <option value="">Mrs</option>
            <option value="">Miss</option>
          </select>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Middle Name" />
          <Input type="text" placeholder="Last Name" />
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
      <select name="" id="" className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-2 w-full">
            <option value="">Gender</option>
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8  ">
        <Input type="date" placeholder="Date Of Birth" />
        <Input type="text" placeholder="Median Name" />
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8  ">
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Phone Number" />
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8  ">
        <Input type="text" placeholder="Address" />
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8  ">
        <Input type="text" placeholder="Previous Address" />
      </div>
      
    </>
  );
}

function Dividend() {
  const PassportAndSign = AddPassportAndSignature(Form);

  return <PassportAndSign />;
}

export default Dividend;
