import Banner from "../../components/Banner"
import ContactForm from "../../components/ContactComp/ContactForm"


function Contact() {
  return (
<>
<Banner page="Contact Us" link=""/>
<section className="py-32 md:px-10  px-0 bg-[#F9F9F9]  flex">
<ContactForm/>
</section>
</>
  )
}

export default Contact
