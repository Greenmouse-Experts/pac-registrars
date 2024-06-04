
import Input from "../Input";
import AddPassportAndSignature from "./AddPassportAndSignature";

function Form() {
  return (
    <>
      <h5 className="font-montserrat text-[1.4rem] font-semibold  text-black  ">
        Contact Us
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
        <Input type="text" placeholder="Name of Deceased Person" />
      </div>
      <div className=" ">
        <Input type="text" placeholder="Place of death" />
      </div>
      <div className=" ">
        <Input
          type="text"
          placeholder="Relationship with the deceased person"
        />
      </div>
      <div className=" ">
        <Input
          type="text"
          placeholder="Do you have a preferred time for us to call you?"
        />
      </div>
 
    </>
  );
}

function ProbateForm() {
  const PassportAndSign = AddPassportAndSignature(Form);

  return <PassportAndSign />;
}

export default ProbateForm;
