// import { useEffect, useState } from "react";
import Input from "../Input";

import Button from "../Button";

function KycForm() {
  return (
    <form className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-10 form-shadow text-[#787878]">
      <>
        <h5 className="font-montserrat text-[1.4rem] font-semibold   text-black ">
          Kyc Service
        </h5>

        <div>
          <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
            <Input type="text" placeholder="Name" />
            <Input type="text" placeholder="Email" />
          </div>
        </div>

        <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
          <Input type="text" placeholder="Telephone" />
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-8  ">
          <Input type="text" placeholder="Name of Organization" />
        </div>
        <div className="flex flex-col justify-between gap-3 mt-3  ">
          <label htmlFor="">KYC services</label>
          <select name="" id="" className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full">
            <option value="">Customer Due Diligence</option>
            <option value="">Address verification </option>
            <option value="">Identity Verification </option>
            <option value="">Document/Certificate Verification</option>
            <option value="">Background Check</option>
          </select>
        </div>
      </>

      {/* <div className="flex items-center gap-4">
        <label className="text-lg flex gap-2 text-grayPrimary2">
          <input type="checkbox" name="" id="" className="w-4" />
          Accept Our Data Privacy Policy
        </label>
      </div> */}
      <Button type="">Submit</Button>
    </form>
  );
}

export default KycForm;
