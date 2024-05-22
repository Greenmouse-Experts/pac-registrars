import Accordion from "./Accordion";
import ContactForm from "./ContactForm";

function Faqs() {
  return (
    <section className="flex lg:flex-row flex-col justify-between bg-[#f9f9f9] gap-10 mx-0 mt-20 2xl:mx-10 2xl:px-[7%] lg:px-24 sm:px-[20px] px-0 2xl:py-20  py-10 my-10 ">
      <div className="lg:w-[45%] w-full sm:px-0 px-5">
        <h4 className="font-syne font-bold">FAQs</h4>
        <div className="lg:max-w-[80%] max-w-full mt-3">
          <p className="text-black font-montserrat font-medium mb-5  ">
            Get answers to all your question from our FAQs, feel free to contact
            us if you don’t find the answer you are looking for.
          </p>
        </div>
        <Accordion
          open={true}
          title="How can I find out how many shares I hold?"
          answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting PAC Registrars."
        />
        <Accordion
          open={false}
          title="How can I change my name?"
          answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting PAC Registrars."
        />
        <Accordion
          open={false}
          title="How can l claim my late father’s shares?"
          answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting PAC Registrars."
        />
        <Accordion
          open={false}
          title="When will the transmission be ready?"
          answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting PAC Registrars."
        />
      </div>
      <ContactForm />
    </section>
  );
}

export default Faqs;
