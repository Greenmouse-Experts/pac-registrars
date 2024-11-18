// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import { MdClose } from "react-icons/md"; // Importing a close icon from react-icons

interface ModalComponentProps {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ServiceModal: React.FC<ModalComponentProps> = ({
  isOpen,
  handleClose,
  title,
  children,
}) => {
  return (
    <Dialog
      open={isOpen}
      handler={handleClose}
      className="overflow-y-scroll max-h-[95vh] relative"
    >
      <DialogHeader className="flex justify-between items-center relative ">
        {title}

        <span className=" absolute right-5 top-3 cursor-pointer"  onClick={handleClose}>
          <MdClose className="h-5 w-5  " />
        </span>
      </DialogHeader>
      <DialogBody>{children}</DialogBody>
    </Dialog>
  );
};

export default ServiceModal;
