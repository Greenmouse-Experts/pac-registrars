import Banner from "../../components/Banner";
import Button from "../../components/Button";
import SmallCard from "../../components/SmallCard";

function DocumentManagement() {
  return (
    <>
      <Banner
        page="Document Management"
        link=""
        img="/images/document-banner.png"
      />
      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div className="lg:w-[44%] w-full">
          <img
            src="/images/document.png"
            alt=""
            className="w-full object-cover rounded-[20px]"
          />
        </div>
        <div className="lg:w-[56%] w-full font-syne">
          <h4 className=" font-bold font-syne capitalize text-black">
            Document Management System
          </h4>
          <p className=" 2xl:mt-3 mt-3 font-sora text-grayPrimary2">
            Our Document Management System (DMS) specializes in providing cost
            effective, secure and user-friendly solutions for simplifying the
            document needs of our clients.
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora text-grayPrimary2">
            PAC Registrars & Investor Services Document Management System helps
            to store and organize digital documents in a secure and easily
            accessible way. With our DMS, we help you take away the risk of
            theft or fire by helping you manage your important documents
            electronically rather than physically.
          </p>
        </div>
      </section>
      <section className="lg:pt-24 pt-16">
        <div>
          <p className="text-bluePrimary font-medium ">
          Our Service covers:
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 mt-14">
          <SmallCard text="Digital Archiving" />
          <SmallCard text="Physical Archiving" />
          <SmallCard text="Data Capturing" />
          <SmallCard text="Scanning" />

          <SmallCard text="Shredding" />
          <SmallCard text="Document Management & Tracking: Document Input, Document Indexing, Document Search, Document Processing, Workflow Automation, Document Security, User Dashboard & Customization." />
         
        </div>
      </section>

      <section className="lg:py-24 py-16 sm:px-[7%] px-0 bg-[#F9F9F9] mt-32 mb-20 sm:mx-10 flex justify-center items-center">
        <form className="flex flex-col 2xl:gap-8 gap-5 lg:w-[53rem] w-full bg-white p-10">
          <h5 className="font-montserrat text-[1.4rem] font-semibold  ">
            Contact Us
          </h5>
          <p className=" font-medium font-montserrat  ">
          Are you in need of our Document Management System or you are considering referring us to a client, please click here to provide your details. Be sure that our staff will reach out to you.
          </p>
          <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#F4F4F4] 2xl:h-[60px]  h-[50px] pl-5 lg:w-[373px] w-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-[#F4F4F4] lg:w-[373px] w-full 2xl:h-[60px]  h-[50px] pl-5"
            />
          </div>
          <div className=" justify-between gap-8 w-full ">
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-[#F4F4F4] 2xl:h-[60px]  h-[50px] pl-5 w-full"
            />
          
          </div>
          <div className=" ">
          <input
              type="tel"
              placeholder="WhatsApp Number"
              className="bg-[#F4F4F4]  w-full 2xl:h-[60px]  h-[50px] pl-5"
            />
          </div>
          <div className=" ">
            <input
              type="text"
              placeholder="Name of Organization"
              className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
            />
          </div>
          <div className=" ">
            <textarea
              placeholder="Brief details of the service you want from us"
              className="bg-[#F4F4F4] placeholder:text-[text-grayPrimary2] h-[7.5rem] pl-5 pt-4 w-full"
            />
          </div>
          
          <Button type="">Submit</Button>
        </form>
      </section>
    </>
  );
}

export default DocumentManagement;
