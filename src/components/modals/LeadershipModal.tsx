// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { IoCloseCircleOutline } from "react-icons/io5";
 
export function LeadershipModal({ handleOpen, open, leaderBio, img }) {
  return (
    <>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="py-14 px-10 relative overflow-y-scroll max-h-[90vh]"
      >
        <span onClick={() => handleOpen()} className="absolute top-5 right-5">
          <IoCloseCircleOutline size={40} color="black" />
        </span>
        <DialogBody className="flex flex-col xl:gap-5 gap-3 text-black">
          <div className="flex xl:items-start items-center justify-center xl:flex-row flex-col gap-20">
            <img src={img} alt={img} className="xl:w-[20%] w-[50%] mix-blend-luminosity" />
            <div>
            <p className="mt-3">{leaderBio[0] ?? ""}</p>
            <p className="mt-3">{leaderBio[1] ?? ""}</p>
            </div>
          </div>
          <p>{leaderBio[2] ?? ""}</p>
          {/* {leaderBio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))} */}
        </DialogBody>
      </Dialog>
    </>
  );
}