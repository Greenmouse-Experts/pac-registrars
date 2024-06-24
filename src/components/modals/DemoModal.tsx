// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Input from "../Input";
import Button from "../Button";
 
export function DemoModal({ handleOpen, open,  }) {
  return (
    <>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="py-14 px-10 relative overflow-y-scroll max-h-[90vh]"
      >
        <span onClick={() => handleOpen()} className="absolute top-5 right-5">
          <IoCloseCircleOutline size={40} color="black" />
        </span>
        <DialogBody className="flex flex-col xl:gap-5 gap-3 text-black">
        <form className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-5 form-shadow text-[#787878]">
            <h5 className="font-montserrat text-[1.4rem] font-semibold   text-black">
              Request Demo
            </h5>
            {/* <p className=" font-medium ">
             
            </p> */}
            <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
            </div> 
            <div className=" justify-between gap-8 w-full ">
              <Input type="text" placeholder="Company Name" />
            </div>
            <div className=" justify-between gap-8 w-full ">
              <Input type="tel" placeholder="Phone Number" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}