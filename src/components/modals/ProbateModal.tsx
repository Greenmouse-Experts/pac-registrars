import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import Input from "../Input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 500,
  overflowY: "scroll",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 768px)": {
    width: "90%",
    height: "90%",
    top: "5%",
    left: "5%",
    transform: "translate(0, 0)",
  },
};

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const ProbateModal: React.FC<ModalProps> = ({
  open,
  handleClose,
}: ModalProps) => {
  //   const handleSubmit = async () => {

  //   };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="flex w-full bg-white flex-col 2xl:gap-8 gap-5">
            <Input label="Name" type="text" />
            <Input label="Phone Number" type="tel" />
            <Input label="Email Address" type="email" />
            <Input label="WhatsApp Number" type="tel" />
            <Input label="Name of deceased person" type="text" />
            <Input label="Place of death" type="text" />
            <Input label="Relationship with the deceased person" type="text" />
            <Input
              label="Do you have a preferred time for us to call you?"
              type="text"
            />
            <button onClick={handleClose} className="w-fit bg-orangePrimary  flex gap-1 items-center 2xl:py-3 2xl:px-6 py-[5px] whitespace-nowrap px-4 text-base text-white ml-auto ">
              Submit Form
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProbateModal;
