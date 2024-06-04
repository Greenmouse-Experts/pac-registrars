import Input from "../Input";
import AddPassportAndSignature from "./AddPassportAndSignature";

function Form() {
  return (
    <>
      <h5 className="font-montserrat text-[1.4rem] font-semibold  text-black  ">
        Name Change Details
      </h5>
      <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <Input type="text" placeholder="Shareholder’s Maiden Name" />
      </div>
      <div>
        <label>Shareholder’s Old Name</label>
        <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Middle Name" />
          <Input type="text" placeholder="Last Name" />
        </div>
      </div>
      <div>
        <label>Shareholder’s New Name</label>
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
      <div className="flex lg:flex-row flex-col justify-between gap-8  ">
        <Input type="text" placeholder="BVN" />
        <Input type="text" placeholder="Clearing House (if any)" />
      </div>
     
    </>
  );
}

function UpdateMyName() {
  const PassportAndSign = AddPassportAndSignature(Form);

  return <PassportAndSign />;
}

export default UpdateMyName;
