import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface AccodionProps {
  title: string;
  answer: string;
  open: boolean;
}

const Accordion = ({ title, answer, open }: AccodionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(open);

  return (
    <>
      <div
        className={`py-4 px-5 2xl:py-5 rounded-lg ${
          accordionOpen ? "bg-bluePrimary text-white mb-5" : "bg-white mb-5"
        }`}
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <button className="flex justify-between w-full items-center">
          <span
            className={`font-sora 2xl:text-lg 2xl:font-[400] text-[14px] font-normal  ${
              accordionOpen ? "white" : "black"
            }`}
          >
            {title}
          </span>
          {accordionOpen ? <span><IoMdArrowDropup /></span> : <span><IoMdArrowDropdown /></span>}
         
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div
          className={`overflow-hidden text-black ${
            accordionOpen ? "mb-6" : ""
          }`}
        >
         <p className="leading-[30px]"> {answer}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
