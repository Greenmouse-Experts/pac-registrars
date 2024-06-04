import Input from "../Input";
import AddPassportAndSignature from "./AddPassportAndSignature";

function Form() {
  return (
    <>
      <h5 className="font-montserrat text-[1.4rem] font-semibold  text-black">
      Address Update
      </h5>
      <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <Input type="text" placeholder="Shareholder’s Maiden Name" />
      </div>
      <div>
        <label>Shareholder’s Name</label>
        <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Middle Name" />
          <Input type="text" placeholder="Last Name" />
        </div>
      </div>
     
      <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Phone" />
      </div>
      <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <Input type="text" placeholder="BVN" />
       
      </div>

   <div>
    <label className="text-[#787878]" >Address</label>
    <div className="flex lg:flex-row flex-col justify-between gap-8  ">
        <Input type="text" placeholder="Old Address" />
        <Input type="text" placeholder="New Address" />
      </div>
   </div>

   <div>
    <label className="text-[#787878]" >State</label>
    <div className="flex lg:flex-row flex-col justify-between gap-8  ">
        <Input type="text" placeholder="Old State" />
        <Input type="text" placeholder="New State" />
      </div>
   </div>
     
    </>
  );
}

function UpdateMyAddress() {
  const PassportAndSign = AddPassportAndSignature(Form);

  return <PassportAndSign />;
}

export default UpdateMyAddress;
