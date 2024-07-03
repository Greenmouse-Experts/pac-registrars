import { useEffect, useState } from "react";
import Input from "../Input";
import { IoCloudUploadOutline } from "react-icons/io5";
import Button from "../Button";



function Dividend() {
  
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

 
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      if (image instanceof Blob) {
        reader.readAsDataURL(image);
      } else {
        console.error("Image is not a Blob");
      }
    } else {
      setPreview(null);
    }
   
  }, [image]);

  return (
    <form className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-10 form-shadow text-[#787878]">
      <>
      <h5 className="font-montserrat text-[1.4rem] font-semibold   text-black ">
      E-Dividend Mandate Form
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
          <select
            name=""
            id=""
            className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-2 w-[38%]"
          >
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
        <select
          name=""
          id=""
          className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-2 w-full"
        >
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
      <div className=" flex items-start gap-10">
        <textarea
          placeholder="Brief details of the service you want from us"
          className="bg-[#F4F4F4] placeholder:text-[text-grayPrimary2] h-[7.5rem] pl-5 pt-4 w-full"
        />
        <div className="w-[30%]">
          <div className="bg-[#F4F4F4]  flex  flex-col justify-center items-center h-[7.5rem] relative ">
            {preview ? (
              <img
                src={preview}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <>
                <IoCloudUploadOutline size={30} />
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e?.target?.files ? e.target.files[0] : null;
                    setImage(file);
                  }}
                  className="absolute w-full opacity-0"
                />
              </>
            )}
          </div>
          <p className="text-sm mt-2">Attach a Passport</p>
        </div>
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

export default Dividend;
