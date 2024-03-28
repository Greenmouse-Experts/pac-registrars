import Accordion from "./Accordion";
import ContactForm from "./ContactForm";

function Faqs() {
  return (
    <section className="flex justify-between bg-[#f9f9f9] gap-10 mx-7 mt-20 2xl:mx-10  2xl:py-20 py-10 my-10 px-24">
      <div className="w-[45%]">
        <h4 className="font-syne font-bold">FAQs</h4>
        <p className="text-black font-montserrat font-medium mb-5 leading-4">
          Get answers to all your question from our FAQs, feel free to contact
          us if you don’t find the answer you are looking for.
        </p>
        <Accordion
          title="How can I find out how many shares I hold?"
          answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting PAC Registrars."
        />
        <Accordion
          title="How can I change my name?"
          answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting PAC Registrars."
        />
        <Accordion
          title="How can l claim my late father’s shares?"
          answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting PAC Registrars."
        />
        <Accordion
          title="When will the transmission be ready?"
          answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting PAC Registrars."
        />
      </div>
      <ContactForm />
    </section>
  );
}

export default Faqs;
