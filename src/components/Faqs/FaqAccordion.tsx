import { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface AccodionProps {
  title: string;
  answer: string;
}

const FaqAccordion = ({ title, answer }: AccodionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <div
        className={`py-5 px-5 rounded-lg ${
          accordionOpen ? "bg-bluePrimary text-white mb-5" : "bg-[#EBEDEF] mb-5"
        }`}
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <button className="flex justify-between w-full items-center">
          <span
            className={`font-sora text-[12px] font-normal ${
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
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
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
          {answer}
        </div>
      </div>
    </>
  );
};

export default FaqAccordion;
