// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";

const SuccessDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} handler={handleClose}>
      <DialogBody>
        <div className="text-center text-black">
          <h3 className="text-2xl font-semibold mb-4">Success</h3>
          <p className="text-xl text-center">
            Your data has been successfully sent. We will get back to you shortly.
          </p>
        </div>
      </DialogBody>
      <DialogFooter>
        <button
          className="bg-colorPrimary btn btn-green rounded-md text-white font-semibold py-2 px-3"
          onClick={handleClose}
        >
          Close
        </button>
      </DialogFooter>
    </Dialog>
  );
};

export default SuccessDialog;
