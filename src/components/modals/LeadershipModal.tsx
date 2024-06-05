// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { IoCloseCircleOutline } from "react-icons/io5";
 
export function LeadershipModal({ handleOpen, open, leaderBio }) {
  return (
    <>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="py-14 px-10 relative"
      >
        <span onClick={() => handleOpen()} className="absolute top-5 right-5">
          <IoCloseCircleOutline size={40} color="black" />
        </span>
        <DialogBody className="flex flex-col xl:gap-5 gap-3 text-black">
          {leaderBio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </DialogBody>
      </Dialog>
    </>
  );
}