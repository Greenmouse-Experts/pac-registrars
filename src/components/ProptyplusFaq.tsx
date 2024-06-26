import { useState } from "react";
import FaqAccordion from "./Faqs/FaqAccordion";

function ProptyplusFaq() {
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
        title="What is ProptyPlus?"
        answer="ProptyPlus is a real estate solution platform that offers specialised services to facility managers, estate agents or house owners
"
      />
      <FaqAccordion
        index={1}
        open={openIndex === 1}
        toggleAccordion={toggleAccordion}
        title="What are the service offerings?"
        answer="The solution consist of two modules : B2C and B2B modules."
      />
      <FaqAccordion
        index={2}
        open={openIndex === 2}
        toggleAccordion={toggleAccordion}
        title="What is B2C?"
        answer="It is known as Business to Customer module where property hunters connects to estate agents or house owners"
      />
      <FaqAccordion
        index={3}
        open={openIndex === 3}
        toggleAccordion={toggleAccordion}
        title="What is B2B?"
        answer="It is known as Business to Business module where facility managers uses the platform to manage tenants and properties efficiently."
      />
      <FaqAccordion
        index={4}
        open={openIndex === 4}
        toggleAccordion={toggleAccordion}
        title="What are our value prepositions?"
        answer={
          <div>
            <p>1. It is safe and secure </p>
            <p>2. Properties are from reliable sources</p>
            <p>3. Rental loan financing</p>
            <p>4.It is real-time solution</p>
            <p>5.Effective payment system management</p>
            <p> 6. Reports generation and much more..</p>
          </div>
        }
      />
    </div>
  );
}

export default ProptyplusFaq;
