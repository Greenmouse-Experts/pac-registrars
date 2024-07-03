import { useEffect, useRef, useState } from "react";
import Input from "../Input";
import { IoCloudUploadOutline } from "react-icons/io5";
import Button from "../Button";
import Popup from "reactjs-popup";
import SignatureCanvas from "react-signature-canvas";
import "reactjs-popup/dist/index.css";

function UpdateMySignature() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const sigCanvasRef = useRef(null);

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [preview2, setPreview2] = useState<string | null>(null);
  const [signaturePreview, setSignaturePreview] = useState<string | null>(null);

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

    if (image2) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview2(reader.result as string);
      };
      if (image2 instanceof Blob) {
        reader.readAsDataURL(image2);
      } else {
        console.error("Image2 is not a Blob");
      }
    } else {
      setPreview2(null);
    }
  }, [image, image2]);

  const handleSaveSignature = () => {
    console.log("outside");
    if (sigCanvasRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const dataUrl = sigCanvasRef.current.toDataURL();
      setSignaturePreview(dataUrl);
      setIsPopupOpen(false);
      console.log("inside");
    }
  };

  return (
    <form className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-10 form-shadow text-[#787878]">
      <>
        <h5 className="font-montserrat text-[1.4rem] font-semibold   text-black ">
          Signature Update
        </h5>
        {/* <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
        <Input type="text" placeholder="Shareholder’s Maiden Name" />
      </div> */}
        <div>
          <label>Shareholder’s Name</label>
          <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Middle Name (optional)" />
            <Input type="text" placeholder="Last Name" />
          </div>
        </div>

        <div>
          <label>Upload Banker's Information</label>
          <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Middle Name (optional)" />
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

      <div className="text-sm gap-4 pt-3 flex  items-center ">
        <div className=" w-[40%]">
          {signaturePreview && (
            <div className="w-full flex justify-start">
              <img
                src={signaturePreview}
                className="h-full w-full object-cover object-center -ml-[30%]"
              />
            </div>
          )}
          <Popup
            trigger={
              <button
                onClick={() => setIsPopupOpen(true)}
                type="button"
                className="border-t border-dashed border-bluePrimary pt-3"
              >
                Click to attach a old Signature
              </button>
            }
            modal
            open={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
          >
            <SignatureCanvas
              ref={sigCanvasRef}
              canvasProps={{
                width: 500,
                height: 200,
                className: "bg-white",
              }}
            />
            <div className="flex justify-between">
              <button
                className="bg-bluePrimary text-white rounded-md py-1 px-2"
                onClick={() => {
                  if (sigCanvasRef.current) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    sigCanvasRef.current.clear();
                  }
                }}
              >
                Clear
              </button>
              <button
                type="button"
                className="bg-bluePrimary text-white rounded-md py-1 px-2"
                onClick={handleSaveSignature}
              >
                Save
              </button>
            </div>
          </Popup>
        </div>
        <p>or</p>
        <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-[7.5rem] relative  w-[40%]">
          {preview2 ? (
            <img
              src={preview2}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <>
              <IoCloudUploadOutline size={30} />
              <input
                type="file"
                onChange={(e) => {
                  const file = e?.target?.files ? e.target.files[0] : null;
                  setImage2(file);
                }}
                className="absolute w-full opacity-0"
              />
            </>
          )}
          <p className="text-sm mt-2 p-1"> Click to upload old Signature</p>
        </div>
      </div>

      <div className="text-sm gap-4 pt-3 flex  items-center">
        <div className=" w-[40%]">
          {signaturePreview && (
            <div className="w-full flex justify-center">
              <img
                src={signaturePreview}
                className="h-full w-full object-cover object-center -ml-[50%]"
              />
            </div>
          )}
          <Popup
            trigger={
              <button
                onClick={() => setIsPopupOpen(true)}
                type="button"
                className="border-t border-dashed border-bluePrimary pt-3"
              >
                Click to attach a Signature
              </button>
            }
            modal
            open={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
          >
            <SignatureCanvas
              ref={sigCanvasRef}
              canvasProps={{
                width: 500,
                height: 200,
                className: "bg-white",
              }}
            />
            <div className="flex justify-between">
              <button
                className="bg-bluePrimary text-white rounded-md py-1 px-2"
                onClick={() => {
                  if (sigCanvasRef.current) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    sigCanvasRef.current.clear();
                  }
                }}
              >
                Clear
              </button>
              <button
                type="button"
                className="bg-bluePrimary text-white rounded-md py-1 px-2"
                onClick={handleSaveSignature}
              >
                Save
              </button>
            </div>
          </Popup>
        </div>
        <p>or</p>
        <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-[7.5rem] relative w-[40%]">
          {preview2 ? (
            <img
              src={preview2}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <>
              <IoCloudUploadOutline size={30} />
              <input
                type="file"
                onChange={(e) => {
                  const file = e?.target?.files ? e.target.files[0] : null;
                  setImage2(file);
                }}
                className="absolute w-full opacity-0"
              />
            </>
          )}
          <p className="text-sm mt-2 p-1"> Click to upload Signature</p>
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

export default UpdateMySignature;
