import { useState } from "react";
import FaqAccordion from "./Faqs/FaqAccordion";

function ProbateFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <FaqAccordion
        index={0}
        open={openIndex === 0}
        toggleAccordion={toggleAccordion}
        title="What is Probate?"
        answer="Probate is the legal process of administering a person's estate after their demise. It can include execution of will if the deceased person died testate or without a will if the deceased person died intestate
"
      />
      <FaqAccordion
        index={1}
        open={openIndex === 1}
        toggleAccordion={toggleAccordion}
        title="What is  Testate and Intestate?"
        answer="Testate is a situation where a person dies and leaves a valid will. It describes how the assets should be distributed. While Intestate is a situation where a person dies without a will"
      />
      <FaqAccordion
        index={2}
        open={openIndex === 2}
        toggleAccordion={toggleAccordion}
        title="What legal document is processed when a person dies testate?"
        answer="The legal document processed is called Grant of Probate and it is adminsitered by an EXECUTOR"
      />
      <FaqAccordion
        index={3}
        open={openIndex === 3}
        toggleAccordion={toggleAccordion}
        title="What legal document is processed when a person dies intestate?"
        answer="The legal document processed is called Letters of Administration and it is administered by ADMINISTRATOR"
      />
      <FaqAccordion
        index={4}
        open={openIndex === 4}
        toggleAccordion={toggleAccordion}
        title="Is Probate process complex?"
        answer="Yes, because it requires a lot of steps to be taken. However, if you engage experienced and professional laywer or firms like ours, it makes a lot of difference"
      />
          <FaqAccordion
        index={5}
        open={openIndex === 5}
        toggleAccordion={toggleAccordion}
        title="Does every estate need to go through Probate?"
        answer="Yes. However, there are assets that do not require probate such as jointly owned assets with spouse, assets with revocable trust, assets with  specific beneficiary or assets that include transfer on death beneficiary."
      />
    </div>
  );
}

export default ProbateFaq;
