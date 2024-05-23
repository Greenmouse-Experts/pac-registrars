import { BsDot } from "react-icons/bs";
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
          title="How can I find out how many shares I hold?"
          answer="You can determine the number of shares you hold by adding up all your share certificates and holdings in CSCS, referring to your recent dividend warrant, or by contacting PAC Registrars.
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
        />
        <FaqAccordion
          index={2}
          open={openIndex === 2}
          toggleAccordion={toggleAccordion}
          title="How can l claim my late father’s shares?"
          answer={
            <div>
              <p>
                Kindly come to our office with the following documents for the
                transmission of shares.
              </p>
              <ul>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Letters of administration
                </li>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Death certificate
                </li>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Newspaper publication.
                </li>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Newspaper
                  publication/Gazette
                </li>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Valid means of
                  identification
                </li>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Physical sighting of the
                  administrators.
                </li>
                <li className="flex items-center gap-1">
                  <BsDot color="black" size={30} /> Banker's confirmation of
                  signature.
                </li>
              </ul>
            </div>
          }
        />
        <FaqAccordion
          index={3}
          open={openIndex === 3}
          toggleAccordion={toggleAccordion}
          title="How can l claim my outstanding share certificate?"
          answer="Kindly contact your stockbroker for full dematerialization of your shareholdings into your CSCS account.
"
        />
        <FaqAccordion
          index={4}
          open={openIndex === 4}
          toggleAccordion={toggleAccordion}
          title="When will the transmission be ready?"
          answer="As soon as the court and bank confirm the documents appropriately.
"
        />
        <FaqAccordion
          index={5}
          open={openIndex === 5}
          toggleAccordion={toggleAccordion}
          title="I have found an old uncashed dividend warrant. What can I do?"
          answer="Dividend warrants are currently valid for six months from the date of payment. After this time, you should return any uncashed warrant to PAC Registrars for revalidation free of charge.
"
        />
        <FaqAccordion
          index={6}
          open={openIndex === 6}
          toggleAccordion={toggleAccordion}
          title="I have not received my dividend. What should I do?"
          answer="Please contact the Registrar immediately either in writing or in person.
"
        />
        <FaqAccordion
          index={7}
          open={openIndex === 7}
          toggleAccordion={toggleAccordion}
          title="What are dividends?"
          answer="Shareholders have the right to receive dividends (if payable), to receive key company information (such as Annual Reports /Accounts), to attend Annual General Meetings or Extra-ordinary General Meetings and to Vote and be voted for on certain affairs of the company.
"
        />
        <FaqAccordion
          index={8}
          open={openIndex === 8}
          toggleAccordion={toggleAccordion}
          title="What are the key rights of a shareholder?"
          answer="If you lose your dividend warrant you should contact PAC Registrars as soon as possible, confirming where payment has been lost. We will arrange for the warrant to be stopped and issue you with a duplicate free of charge. However, upon recovery you are expected to return the original one to the Registrar.
"
        />
        <FaqAccordion
          index={9}
          open={openIndex === 9}
          toggleAccordion={toggleAccordion}
          title="What happens if I lose my dividend warrant?"
          answer="Prior to announcing year-end results of companies, dates are set out for the Closure of Register of members for the purpose of payment of dividend and issue of scrip popularly known as ‘Bonus’. These dates will determine the qualification for dividends and scrips. Hence, “cum div” or “cum scrip” means purchases before the Closure of Register will be entitled to all the benefits payable on the investment while “ex div” or “ex scrip”means purchases made after the entitlements were declared. Conversely, if you sell your shares before the Closure of Register, you sold so to say “cum div” and “cum scrip” and hence you will not enjoy the dividend or scrip to be issued at the coming AGM. The reverse is the case when you sell your share “Ex div” and Ex Scrip”."
        />
      </section>
    </>
  );
}

export default Faqs;
