import { useState } from "react";
import FaqAccordion from "./Faqs/FaqAccordion";

function DocumentManagementFaq() {
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
        title="What is DMS?"
        answer="Our document management services is an end to end solution that involves data capturing, digital archiving , physical archiving, document shredding  to ensure safeguarding and easy retrieval of documents.
"
      />
      <FaqAccordion
        index={1}
        open={openIndex === 1}
        toggleAccordion={toggleAccordion}
        title="What are our service offerings?"
        answer="They are: Digital archiving,shredding,Data capturing, Document management & Tracking,Physical archiving and Scanning."
      />

      <FaqAccordion
        index={2}
        open={openIndex === 2}
        toggleAccordion={toggleAccordion}
        title="What are our value prepositions?"
        answer={
          <div>
            <p>1. Cost efficiency</p>
            <p>2. East retrieval of documents</p>
            <p>3. Complete end to end digital management solution</p>
            {/* <ul>
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
              </ul> */}
          </div>
        }
      />
    </div>
  );
}

export default DocumentManagementFaq;
