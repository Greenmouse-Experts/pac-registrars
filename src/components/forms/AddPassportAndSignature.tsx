// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useEffect, useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import Popup from "reactjs-popup";
import SignatureCanvas from "react-signature-canvas";
import "reactjs-popup/dist/index.css";
import Button from "../Button";

function AddPassportAndSignature(WrappedComponent) {
  return function WrappedWithSignature(props) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const sigCanvasRef = useRef(null);

    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [image2, setImage2] = useState<File | null>(null);
    const [preview2, setPreview2] = useState<string | null>(null);

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

    return (
      <form className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-10 form-shadow text-[#787878]">
       
        <WrappedComponent {...props} />
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

        <div className="text-sm gap-4 pt-3 flex  flex-col items-start">
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
                onClick={() => setIsPopupOpen(!isPopupOpen)}
              >
                save
              </button>
            </div>
          </Popup>
          <p>or</p>
            <div className="bg-[#F4F4F4]  flex  flex-col justify-center items-center h-[7.5rem] relative">
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
  };
}

export default AddPassportAndSignature;
