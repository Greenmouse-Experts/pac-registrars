
import "reactjs-popup/dist/index.css";
import Input from "../Input";
import AddPassportAndSignature from "./AddPassportAndSignature";

function Form() {
  return (
    <>
      <h5 className="font-montserrat text-[1.4rem] font-semibold  text-black ">
      Company Secretarial Service
      </h5>
      
      <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
      </div>
      <div className=" justify-between gap-8 w-full ">
        <Input type="tel" placeholder="Phone Number" />
      </div>
      <div className=" ">
        <Input type="tel" placeholder="WhatsApp Number" />
      </div>
      <div className=" ">
        <Input type="text" placeholder="Name of Firm" />
      </div>
      <div className="flex items-center gap-4">
        <div>
          <p className="text-grayPrimary2">
            Need company secretarial service?
          </p>
        </div>
        <label className="text-lg flex gap-2 text-grayPrimary2">
          <input type="checkbox" name="" id="" className="w-4" />
          Yes
        </label>
        <label className="text-lg flex gap-2 text-grayPrimary2">
          <input type="checkbox" name="" id="" className="w-4" />
          No
        </label>
      </div>
      <div className=" ">
        <Input
          type="text"
          placeholder="Address of Firm"
        
        />
      </div>
      <div className="flex items-center gap-4">
        <label className="text-lg flex gap-2 text-grayPrimary2">
          <input type="checkbox" name="" id="" className="w-4" />
          Accept Our Data Privacy Policy
        </label>
      </div>

    </>
  );
}

function SecretarialForm() {
  const PassportAndSign = AddPassportAndSignature(Form);

  return <PassportAndSign />;
}

export default SecretarialForm;
