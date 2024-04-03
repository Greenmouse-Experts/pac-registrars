import Banner from "../../components/Banner";
import FaqAccordion from "../../components/Faqs/FaqAccordion";

function Faqs() {
  return (
    <>
      <Banner page="FAQs" link="" />
      <section className="my-20">
        <FaqAccordion
          open={true}
          title="How can I find out how many shares I hold?"
          answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero provident tempora hic nesciunt, ratione assumenda voluptatum voluptate porro corrupti. Fugit a recusandae exercitationem, officia nesciunt commodi aperiam iure cupiditate consequatur.
"
        />
        <FaqAccordion
          open={false}
          title="How can l change my name?"
          answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero provident tempora hic nesciunt, ratione assumenda voluptatum voluptate porro corrupti. Fugit a recusandae exercitationem, officia nesciunt commodi aperiam iure cupiditate consequatur.
"
        />
        <FaqAccordion
          open={false}
          title="How can l claim my late father’s shares?"
          answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero provident tempora hic nesciunt, ratione assumenda voluptatum voluptate porro corrupti. Fugit a recusandae exercitationem, officia nesciunt commodi aperiam iure cupiditate consequatur.
"
        />
        <FaqAccordion
          open={false}
          title="How can l claim my outstanding share certificate?"
          answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero provident tempora hic nesciunt, ratione assumenda voluptatum voluptate porro corrupti. Fugit a recusandae exercitationem, officia nesciunt commodi aperiam iure cupiditate consequatur.
"
        />
        <FaqAccordion
          open={false}
          title="When will the transmission be ready?"
          answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero provident tempora hic nesciunt, ratione assumenda voluptatum voluptate porro corrupti. Fugit a recusandae exercitationem, officia nesciunt commodi aperiam iure cupiditate consequatur.
"
        />
        <FaqAccordion
          open={false}
          title="I have found an old uncashed dividend warrant. What can I do?"
          answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero provident tempora hic nesciunt, ratione assumenda voluptatum voluptate porro corrupti. Fugit a recusandae exercitationem, officia nesciunt commodi aperiam iure cupiditate consequatur.
"
        />
        <FaqAccordion
          open={false}
          title="I have not received my dividend. What should I do?"
          answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero provident tempora hic nesciunt, ratione assumenda voluptatum voluptate porro corrupti. Fugit a recusandae exercitationem, officia nesciunt commodi aperiam iure cupiditate consequatur.
"
        />
        <FaqAccordion
          open={false}
          title="What are dividends?"
          answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero provident tempora hic nesciunt, ratione assumenda voluptatum voluptate porro corrupti. Fugit a recusandae exercitationem, officia nesciunt commodi aperiam iure cupiditate consequatur.
"
        />
        <FaqAccordion
          open={false}
          title="What are the key rights of a shareholder?"
          answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero provident tempora hic nesciunt, ratione assumenda voluptatum voluptate porro corrupti. Fugit a recusandae exercitationem, officia nesciunt commodi aperiam iure cupiditate consequatur.
"
        />
        <FaqAccordion
          open={false}
          title="What happens if I lose my dividend warrant?"
          answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero provident tempora hic nesciunt, ratione assumenda voluptatum voluptate porro corrupti. Fugit a recusandae exercitationem, officia nesciunt commodi aperiam iure cupiditate consequatur.
"
        />
      </section>
    </>
  );
}

export default Faqs;
