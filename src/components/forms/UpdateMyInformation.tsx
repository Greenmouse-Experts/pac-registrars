// import { useEffect, useState } from "react";
import Input from "../Input";

import Button from "../Button";


function UpdateMyInformation() {
 

  return (
    <form className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-10 form-shadow text-[#787878]">
      <>
      <h5 className="font-montserrat text-[1.4rem] font-semibold   text-black ">
        Shareholder Update
      </h5>
      {/* <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <Input type="text" placeholder="Shareholder’s Maiden Name" />
      </div> */}
      <div>
        <label>Shareholder’s Name</label>
        <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Middle Name(optional)" />
          <Input type="text" placeholder="Last Name" />
        </div>
      </div>

      <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Phone" />
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8  ">
        <Input type="text" placeholder="BVN" />
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8  ">
        <Input type="text" placeholder="NIN" />
        <Input type="text" placeholder="Clearing House Number(CHN)(optional)" />
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8  ">
        <Input type="text" placeholder="Gender" />
      </div>
      <div>
        <label>Next of Kin Name</label>
        <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
          <Input type="text" placeholder="First Name" />
        
          <Input type="text" placeholder="Last Name" />
        </div>
      </div>

      <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <Input type="text" placeholder="Relationship with Next of kin" />
        <Input type="text" placeholder="Next of kin Phone" />
      </div>
      <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <Input type="text" placeholder=" Next of kin Email " />
        {/* <Input type="text" placeholder="Phone" /> */}
      </div>
    </>
     

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

export default UpdateMyInformation;
