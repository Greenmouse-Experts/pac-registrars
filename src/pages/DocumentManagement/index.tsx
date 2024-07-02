import { useState } from "react";
import Banner from "../../components/Banner";
import DocumentManagementFaq from "../../components/DocumentManagementFaq";
import SmallCardWithNumber from "../../components/cards/SmallCardWithNumber";
import ManagementForm from "../../components/forms/ManagementForm";

function DocumentManagement() {
  const [showFaq, setShowFaq] = useState(false);
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
            document management needs of our clients.
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora text-grayPrimary2">
            PAC Registrars & Investor Services Document Management System helps
            to store and organize digital documents in a secure and easily
            accessible way. With our DMS, we help you take away the risk of
            theft or fire by helping you manage your important documents
          </p>
        </div>
      </section>
      <section className="lg:pt-24 pt-16">
        <div>
          <p className="text-bluePrimary font-semibold text-lg ">
            Our Service covers:
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 mt-14">
          <SmallCardWithNumber num="01" text="Electronic Document Management System (EDMS)" />
          <SmallCardWithNumber num="02" text="Physical Archiving" />
          <SmallCardWithNumber num="03" text="Data Capturing" />
          <SmallCardWithNumber num="04" text="Scanning" />

          <SmallCardWithNumber num="05" text="Shredding" />
          <SmallCardWithNumber
            num="06"
            text="Document Management & Tracking: Document Input, Document Indexing, Document Search, Document Processing, Workflow Automation, Document Security, User Dashboard & Customization."
          />
        </div>
      </section>
      <section className="lg:py-24 py-16">
        <p
          className="bg-bluePrimary text-white w-fit py-3 px-5 cursor-pointer"
          onClick={() => setShowFaq((prev) => !prev)}
        >
          Click to view FAQs
        </p>

        <div className="mt-20">{showFaq && <DocumentManagementFaq />}</div>
      </section>

      <section className="lg:py-24 py-16 sm:px-[7%] px-0 bg-[#F9F9F9] mt-0 mb-20 sm:mx-10 flex justify-center items-center form-shadow">
        <div className="lg:w-[45rem] w-full">
          <ManagementForm />
        </div>
      </section>
    </>
  );
}

export default DocumentManagement;
