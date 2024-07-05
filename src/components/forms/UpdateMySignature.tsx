import { useEffect, useState } from "react";
import Input from "../Input";
import { IoCloudUploadOutline } from "react-icons/io5";
import Button from "../Button";

function UpdateMySignature() {
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
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }

    if (image2) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview2(reader.result as string);
      };
      reader.readAsDataURL(image2);
    } else {
      setPreview2(null);
    }
  }, [image, image2]);

  return (
    <form className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-10 form-shadow text-[#787878]">
      <h5 className="font-montserrat text-[1.4rem] font-semibold text-black">
        Signature Update
      </h5>
      <div>
        <label>Shareholder’s Name</label>
        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Middle Name (optional)" />
          <Input type="text" placeholder="Last Name" />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8">
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Phone" />
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8">
        <Input type="text" placeholder="BVN" />
        <Input type="text" placeholder="Clearing House (if any)" />
      </div>
      <div className="flex flex-col justify-between gap-2">
        <label htmlFor="">Upload Banker's Information</label>
        <input type="file" placeholder="upload document" />
      </div>

      <div className="flex items-start gap-10">
        <textarea
          placeholder="Brief details of the service you want from us"
          className="bg-[#F4F4F4] placeholder:text-grayPrimary2 h-[7.5rem] pl-5 pt-4 w-full"
        />
        <div className="w-[30%]">
          <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-[7.5rem] relative">
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

      {/* New Signature Section */}
      <div className="text-sm gap-4 pt-3 flex items-center">
        <div className="w-[40%]">
          {preview2 && (
            <div className="w-full flex justify-start">
              <img
                src={preview2}
                className="h-full w-full object-cover object-center"
              />
            </div>
          )}
          <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-[7.5rem] relative">
            <IoCloudUploadOutline size={30} />
            <input
              type="file"
              onChange={(e) => {
                const file = e?.target?.files ? e.target.files[0] : null;
                setImage2(file);
              }}
              className="absolute w-full opacity-0"
            />
          </div>
          <p className="text-sm mt-2 p-1"> Click to upload new Signature</p>
        </div>
      </div>

      {/* Old Signature Section */}
      <div className="text-sm gap-4 pt-3 flex items-center">
        <div className="w-[40%]">
          {preview2 && (
            <div className="w-full flex justify-center">
              <img
                src={preview2}
                className="h-full w-full object-cover object-center -ml-[50%]"
              />
            </div>
          )}
          <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-[7.5rem] relative">
            <IoCloudUploadOutline size={30} />
            <input
              type="file"
              onChange={(e) => {
                const file = e?.target?.files ? e.target.files[0] : null;
                setImage2(file);
              }}
              className="absolute w-full opacity-0"
            />
          </div>
          <p className="text-sm mt-2 p-1"> Click to upload old Signature</p>
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




// import { useEffect, useRef, useState } from "react";
// import Input from "../Input";
// import { IoCloudUploadOutline } from "react-icons/io5";
// import Button from "../Button";
// import Popup from "reactjs-popup";
// import SignatureCanvas from "react-signature-canvas";
// import "reactjs-popup/dist/index.css";

// function UpdateMySignature() {
//   const [isPopupOpenNew, setIsPopupOpenNew] = useState(false);
//   const [isPopupOpenOld, setIsPopupOpenOld] = useState(false);
//   const sigCanvasRefNew = useRef<SignatureCanvas>(null);
//   const sigCanvasRefOld = useRef<SignatureCanvas>(null);

//   const [image, setImage] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [image2, setImage2] = useState<File | null>(null);
//   const [preview2, setPreview2] = useState<string | null>(null);
//   const [signaturePreviewNew, setSignaturePreviewNew] = useState<string | null>(null);
//   const [signaturePreviewOld, setSignaturePreviewOld] = useState<string | null>(null);

//   useEffect(() => {
//     if (image) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result as string);
//       };
//       reader.readAsDataURL(image);
//     } else {
//       setPreview(null);
//     }

//     if (image2) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview2(reader.result as string);
//       };
//       reader.readAsDataURL(image2);
//     } else {
//       setPreview2(null);
//     }
//   }, [image, image2]);

//   const handleSaveSignatureNew = () => {
//     if (sigCanvasRefNew.current) {
//       const dataUrl = sigCanvasRefNew.current.getCanvas().toDataURL();
//       setSignaturePreviewNew(dataUrl);
//       setIsPopupOpenNew(false);
//     }
//   };

//   const handleSaveSignatureOld = () => {
//     if (sigCanvasRefOld.current) {
//       const dataUrl = sigCanvasRefOld.current.getCanvas().toDataURL();
//       setSignaturePreviewOld(dataUrl);
//       setIsPopupOpenOld(false);
//     }
//   };

//   return (
//     <form className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-10 form-shadow text-[#787878]">
//       <h5 className="font-montserrat text-[1.4rem] font-semibold text-black">
//         Signature Update
//       </h5>
//       <div>
//         <label>Shareholder’s Name</label>
//         <div className="flex lg:flex-row flex-col justify-between gap-8">
//           <Input type="text" placeholder="First Name" />
//           <Input type="text" placeholder="Middle Name (optional)" />
//           <Input type="text" placeholder="Last Name" />
//         </div>
//       </div>
//       <div className="flex lg:flex-row flex-col justify-between gap-8">
//         <Input type="text" placeholder="Email" />
//         <Input type="text" placeholder="Phone" />
//       </div>
//       <div className="flex lg:flex-row flex-col justify-between gap-8">
//         <Input type="text" placeholder="BVN" />
//         <Input type="text" placeholder="Clearing House (if any)" />
//       </div>
//       <div className="flex flex-col justify-between gap-2">
//         <label htmlFor="">Upload Banker's Information</label>
//         <input type="file" placeholder="upload document" />
//       </div>

//       <div className="flex items-start gap-10">
//         <textarea
//           placeholder="Brief details of the service you want from us"
//           className="bg-[#F4F4F4] placeholder:text-grayPrimary2 h-[7.5rem] pl-5 pt-4 w-full"
//         />
//         <div className="w-[30%]">
//           <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-[7.5rem] relative">
//             {preview ? (
//               <img
//                 src={preview}
//                 className="h-full w-full object-cover object-center"
//               />
//             ) : (
//               <>
//                 <IoCloudUploadOutline size={30} />
//                 <input
//                   type="file"
//                   onChange={(e) => {
//                     const file = e?.target?.files ? e.target.files[0] : null;
//                     setImage(file);
//                   }}
//                   className="absolute w-full opacity-0"
//                 />
//               </>
//             )}
//           </div>
//           <p className="text-sm mt-2">Attach a Passport</p>
//         </div>
//       </div>

//       {/* New Signature Section */}
//       <div className="text-sm gap-4 pt-3 flex items-center">
//         <div className="w-[40%]">
//           {signaturePreviewNew && (
//             <div className="w-full flex justify-start">
//               <img
//                 src={signaturePreviewNew}
//                 className="h-full w-full object-cover object-center -ml-[30%]"
//               />
//             </div>
//           )}
//           <Popup
//             trigger={
//               <button
//                 onClick={() => setIsPopupOpenNew(true)}
//                 type="button"
//                 className="border-t border-dashed border-bluePrimary pt-3"
//               >
//                 Click to attach a New Signature
//               </button>
//             }
//             modal
//             open={isPopupOpenNew}
//             onClose={() => setIsPopupOpenNew(false)}
//           >
//             <div>
//               <SignatureCanvas
//                 ref={sigCanvasRefNew}
//                 canvasProps={{
//                   width: 500,
//                   height: 200,
//                   className: "bg-white",
//                 }}
//               />
//               <div className="flex justify-between mt-4">
//                 <button
//                   className="bg-bluePrimary text-white rounded-md py-1 px-2"
//                   onClick={() => {
//                     if (sigCanvasRefNew.current) {
//                       sigCanvasRefNew.current.clear();
//                     }
//                   }}
//                 >
//                   Clear
//                 </button>
//                 <button
//                   type="button"
//                   className="bg-bluePrimary text-white rounded-md py-1 px-2"
//                   onClick={handleSaveSignatureNew}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </Popup>
//         </div>
//         <p>or</p>
//         <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-[7.5rem] relative w-[40%]">
//           {preview2 ? (
//             <img
//               src={preview2}
//               className="h-full w-full object-cover object-center"
//             />
//           ) : (
//             <>
//               <IoCloudUploadOutline size={30} />
//               <input
//                 type="file"
//                 onChange={(e) => {
//                   const file = e?.target?.files ? e.target.files[0] : null;
//                   setImage2(file);
//                 }}
//                 className="absolute w-full opacity-0"
//               />
//             </>
//           )}
//           <p className="text-sm mt-2 p-1"> Click to upload old Signature</p>
//         </div>
//       </div>

//       {/* Old Signature Section */}
//       <div className="text-sm gap-4 pt-3 flex items-center">
//         <div className="w-[40%]">
//           {signaturePreviewOld && (
//             <div className="w-full flex justify-center">
//               <img
//                 src={signaturePreviewOld}
//                 className="h-full w-full object-cover object-center -ml-[50%]"
//               />
//             </div>
//           )}
//           <Popup
//             trigger={
//               <button
//                 onClick={() => setIsPopupOpenOld(true)}
//                 type="button"
//                 className="border-t border-dashed border-bluePrimary pt-3"
//               >
//                 Click to attach an Old Signature
//               </button>
//             }
//             modal
//             open={isPopupOpenOld}
//             onClose={() => setIsPopupOpenOld(false)}
//           >
//             <div>
//               <SignatureCanvas
//                 ref={sigCanvasRefOld}
//                 canvasProps={{
//                   width: 500,
//                   height: 200,
//                   className: "bg-white",
//                 }}
//               />
//               <div className="flex justify-between mt-4">
//                 <button
//                   className="bg-bluePrimary text-white rounded-md py-1 px-2"
//                   onClick={() => {
//                     if (sigCanvasRefOld.current) {
//                       sigCanvasRefOld.current.clear();
//                     }
//                   }}
//                 >
//                   Clear
//                 </button>
//                 <button
//                   type="button"
//                   className="bg-bluePrimary text-white rounded-md py-1 px-2"
//                   onClick={handleSaveSignatureOld}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </Popup>
//         </div>

//         <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-[7.5rem] relative w-[40%]">
//           {preview2 ? (
//             <img
//               src={preview2}
//               className="h-full w-full object-cover object-center"
//             />
//           ) : (
//             <>
//               <IoCloudUploadOutline size={30} />
//               <input
//                 type="file"
//                 onChange={(e) => {
//                   const file = e?.target?.files ? e.target.files[0] : null;
//                   setImage2(file);
//                 }}
//                 className="absolute w-full opacity-0"
//               />
//             </>
//           )}
//           <p className="text-sm mt-2 p-1"> Click to upload old Signature</p>
//         </div>
//       </div>

//       <div className="flex items-center gap-4">
//         <label className="text-lg flex gap-2 text-grayPrimary2">
//           <input type="checkbox" name="" id="" className="w-4" />
//           Accept Our Data Privacy Policy
//         </label>
//       </div>
//       <Button type="">Submit</Button>
//     </form>
//   );
// }

// export default UpdateMySignature;



