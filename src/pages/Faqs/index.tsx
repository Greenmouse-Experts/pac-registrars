import Banner from "../../components/Banner";
import FaqAccordion from "../../components/Faqs/FaqAccordion";
import { useState } from "react";

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Banner page="FAQs" link="" img="/images/faq-banner.png" />
      <section className="md:py-32 py-10">
        <FaqAccordion
          title="How can I know my total shareholdings?"
          answer="You can signup to our Web registry for real time information on your shares or send mail to info@pacregistrars.com.
"
          index={0}
          open={openIndex === 0}
          toggleAccordion={toggleAccordion}
        />
        <FaqAccordion
          index={1}
          open={openIndex === 1}
          toggleAccordion={toggleAccordion}
          title="How can l change my name?"
          answer="Send an email to info@pacregistrars.com or click on Forms to see the requirements for change of name"
        />
        {/* <FaqAccordion
          index={1}
          open={openIndex === 1}
          toggleAccordion={toggleAccordion}
          title="How can l change my name?"
          answer={
            <div>
              <p>A: Download our change of address form and fill.</p>
              <p>B: Kindly come to our office with the following documents.</p>
              <ul>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Filled change of address
                  form
                </li>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> DMarriage certificate
                  (original for sighting)
                </li>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Newspaper publication.
                </li>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Sworn affidavit
                </li>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Banker's confirmation of
                  signature.
                </li>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Letter of request.
                </li>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Letter of request.
                </li>

                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Old documents in both names.
                </li>
              </ul>
            </div>
          }
        /> */}
        <FaqAccordion
          index={2}
          open={openIndex === 2}
          toggleAccordion={toggleAccordion}
          title="How can I claim my late father or mother's shares?"
          answer="If the shareholder died intestate, a Letter of Administration will be required or if the shareholder died Testate ( with a Will), a Grant of Probate will be required. Send an email to info@pacregistrars.com or click on Forms to see the requirements for transmission"
        />
        <FaqAccordion
          index={3}
          open={openIndex === 3}
          toggleAccordion={toggleAccordion}
          title="How long does transmission of shares take?"
          answer="Once all documents are  received, the process of reconfirmation of LA or Probate is concluded. The transmission is done immediately.
"
        />
        <FaqAccordion
          index={4}
          open={openIndex === 4}
          toggleAccordion={toggleAccordion}
          title="I have found an old uncashed dividend warrant. What can I do?"
          answer="Kindly complete the e-dividend mandate form on our website or visit NIBSS Self Service.
"
        />
        <FaqAccordion
          index={5}
          open={openIndex === 5}
          toggleAccordion={toggleAccordion}
          title="I have not received my dividend. What should I do?"
          answer="Kindly complete the e-dividend mandate form on our website or visit NIBSS Self Service.
"
        />
        <FaqAccordion
          index={6}
          open={openIndex === 6}
          toggleAccordion={toggleAccordion}
          title="What are the rights of shareholders?"
          answer="To attend and vote at AGM, to receive dividend or bonus declared by the Company’s shares its holds, to receive annual reports e.t.c 
"
        />
        <FaqAccordion
          index={7}
          open={openIndex === 7}
          toggleAccordion={toggleAccordion}
          title="What happens if I lose my dividend warrant?"
          answer="Kindly complete the e-dividend mandate form on our website or visit NIBSS Self Service.
"
        />

    
      </section>
    </>
  );
}

export default Faqs;
