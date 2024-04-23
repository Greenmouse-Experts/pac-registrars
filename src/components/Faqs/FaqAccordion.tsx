import { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface AccodionProps {
  title: string;
  answer: string | JSX.Element;
  open: boolean;
}

const FaqAccordion = ({ title, answer,open }: AccodionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(open);

  return (
    <>
      <div
        className={`py-5  px-5 rounded-lg ${
          accordionOpen ? "bg-bluePrimary text-white mb-5" : "bg-[#EBEDEF] mb-5"
        }`}
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <button className="flex justify-between w-full items-center">
          <span
            className={`font-sora 2xl:text-lg 2xl:font-[400] text-sm font-normal  ${
              accordionOpen ? "white" : "black"
            }`}
          >
            {title}
          </span>
          {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
          <FaPlus  size={10} color={accordionOpen ? "white" : "black"} />
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div
          className={`overflow-hidden text-grayPrimary2 ${
            accordionOpen ? "mb-6" : ""
          }`}
        >
         <p className="leading-[30px]"> {answer}</p>
        </div>
      </div>
    </>
  );
};

export default FaqAccordion;
