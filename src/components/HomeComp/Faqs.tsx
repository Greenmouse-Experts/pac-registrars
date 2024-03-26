import Accordion from "./Accordion";
import ContactForm from "./ContactForm";

function Faqs() {
  return (
    <section className="flex justify-between bg-[#f9f9f9] gap-10 mx-4 mt-20 2xl:mx-10 px-8 2xl:px-24 2xl:py-20">
      <div className="w-[40%]">
        <h4 className="font-syne text-[45px] font-bold">FAQs</h4>
        <p className="text-black font-montserrat">
          Get answers to all your question from our FAQs, feel free to contact
          us if you don’t find the answer you are looking for.
        </p>
        <Accordion />
      </div>
      <ContactForm />
    </section>
  );
}

export default Faqs;
