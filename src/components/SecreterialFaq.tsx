import { useState } from "react";
import FaqAccordion from "./Faqs/FaqAccordion";

function SecreterialFaq() {
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
        title="What is Company Secretarial Service(CSS) all about?"
        answer="The Company Secretarial Service is a consulting service rendered to range of orgnanisations both small, medium and large to meets their legal, regulatory needs to foster good corporate governance for their businesses.
"
      />
      <FaqAccordion
        index={1}
        open={openIndex === 1}
        toggleAccordion={toggleAccordion}
        title="Is the CSS a specialised service?"
        answer="It is a bespoke service tailored to the needs of every clients."
      />
      <FaqAccordion
        index={2}
        open={openIndex === 2}
        toggleAccordion={toggleAccordion}
        title="Who are our target market?"
        answer="Our target market are Companies in financial services, real estate, energy sector, mining, oli and gas, healthcare and much more"
      />
      <FaqAccordion
        index={3}
        open={openIndex === 3}
        toggleAccordion={toggleAccordion}
        title="What are our value prepositions?"
        answer={
          <div>
            <p>1.Ensuring compliance with applicable laws, statutory & regulatory requirements.</p>
            <p>2 Organising of Board meetings and much more…</p>
            
          </div>
        }
        
      />
     
    </div>
  );
}

export default SecreterialFaq;
