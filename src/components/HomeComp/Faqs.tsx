import { useState } from "react";
import FaqAccordion from "../Faqs/FaqAccordion";
import ContactForm from "./ContactForm";
import BaseButton from "../BaseButton";

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex lg:flex-row flex-col justify-between bg-[#f9f9f9] gap-10 mx-0 lg:mt-20 2xl:mx-10 2xl:px-[7%] lg:px-24 sm:px-[20px] px-0 2xl:py-20  sm:py-10 sm:my-10 ">
      <div className="lg:w-[45%] w-full sm:px-0 px-5">
        <h4 className="font-syne font-bold">FAQs</h4>
        <div className="lg:max-w-[80%] max-w-full mt-3">
          <p className="text-black font-montserrat font-medium mb-5  ">
            Get answers to all your question from our FAQs, feel free to contact
            us if you don’t find the answer you are looking for.
          </p>
        </div>
        <FaqAccordion
          from="home"
          title="How can I find out how many shares I hold?"
          answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting PAC Registrars and Investor Services."
          index={0}
          open={openIndex === 0}
          toggleAccordion={toggleAccordion}
        />
        <FaqAccordion
          from="home"
          title="How can I change my name?"
          answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting PAC Registrars and Investor Services."
          index={1}
          open={openIndex === 1}
          toggleAccordion={toggleAccordion}
        />
        <FaqAccordion
          from="home"
          title="How can l claim my late father’s shares?"
          answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting PAC Registrars and Investor Services."
          index={2}
          open={openIndex === 2}
          toggleAccordion={toggleAccordion}
        />
        <FaqAccordion
          from="home"
          title="When will the transmission be ready?"
          answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting PAC Registrars and Investor Services."
          index={3}
          open={openIndex === 3}
          toggleAccordion={toggleAccordion}
        />
        <BaseButton color="blue" link="/faqs" text="View all FAQs" />
      </div>
      <ContactForm />
    </section>
  );
}

export default Faqs;
