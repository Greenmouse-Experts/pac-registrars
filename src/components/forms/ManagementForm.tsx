
import Input from "../Input";
import AddPassportAndSignature from "./AddPassportAndSignature";


function Form(){
  return(
    <>
    <h5 className="font-montserrat text-[1.4rem] font-semibold   text-black">
    Document Management Service
    </h5>
   
    <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
      <Input
        type="text"
        placeholder="Name"
        
      />
      <Input
        type="text"
        placeholder="Email"
       
      />
    </div>
    <div className=" justify-between gap-8 w-full ">
      <Input
        type="tel"
        placeholder="Phone Number"
       
      />
    </div>
    <div className=" ">
      <Input
        type="tel"
        placeholder="WhatsApp Number"
       
      />
    </div>
    <div className=" ">
      <Input
        type="text"
        placeholder="Name of Organization"
        
      />
    </div>
    <div className=" ">
      <textarea
        placeholder="Brief details of the service you want from us"
        className="bg-[#F4F4F4] placeholder:text-[text-grayPrimary2] h-[7.5rem] pl-5 pt-4 w-full"
      />
    </div>
  </>
  )
}

function ManagementForm() {
  const PassportAndSign = AddPassportAndSignature(Form);

  return <PassportAndSign />;
}


export default ManagementForm;
