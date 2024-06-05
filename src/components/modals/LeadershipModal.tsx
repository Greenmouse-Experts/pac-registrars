// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { IoCloseCircleOutline } from "react-icons/io5";
 
export function LeadershipModal({handleOpen, open}) {
  
 
  return (
    <>
     
      <Dialog size="xl" open={open} handler={handleOpen} className="py-14 px-10 relative">
        <span onClick={() => handleOpen()} className=" absolute top-5 right-5">

      <IoCloseCircleOutline size={40}  color="black"/>
        </span>
        <DialogBody className="flex flex-col gap-3 text-black">
         <p>
         The Chief Executive Officer comes with over two decades of experience in Structured Finance, Consulting, Investment Banking and Venture Capital/Private Equity. He holds a 2nd Class (Upper Division) in Accounting & Finance from the University of London and Master of Business Administration degree from the University of Lagos.
         </p>
         <p>
         He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), an Associate of the Chartered Insurance Institute of London, (ACII) UK and Chartered Institute of Taxation of Nigeria (ACIT). He also attended various programs at the prestigious Columbia Business School, New York, United States and INSEAD Business School, Fontainebleau, France, the IESE Business School in Barcelona, Spain and the Chief Executive Programme (CEP 17) Class of the Lagos Business School.
         </p>
         <p>
         He was the Pioneer Managing Director/CEO of Truebond Investments & Capital Limited, a Company with diverse interests in Oil & Gas, Telecommunications, Power and the Capital Markets. He has also worked with the firm of Damitop Consulting Limited as Managing Partner where he worked on a number of World Bank projects for the Federal and several State Governments. He served as Executive Director (Investment Banking) of Citizens International Bank (now Enterprise Bank Limited) until his appointment as the pioneer Chief Executive Officer of PanAfrican Capital Holdings Limited.
         </p>
        </DialogBody>
       
      </Dialog>
    </>
  );
}