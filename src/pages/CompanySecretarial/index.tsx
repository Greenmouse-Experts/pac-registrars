import Banner from "../../components/Banner";
import Button from "../../components/Button";
import SmallCard2 from "../../components/SmallCard2";

function CompanySecretarial() {
  return (
    <>
      <Banner
        page="Company Secretarial Service"
        link=""
        img="/images/secretarial-banner.png"
      />
      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div className="lg:w-[44%] w-full">
          <img
            src="/images/secretarial-img.png"
            alt=""
            className="w-full object-cover rounded-[20px]"
          />
        </div>
        <div className="lg:w-[56%] w-full font-syne">
          <h4 className=" font-bold font-syne capitalize text-black">
            Company Secretarial Service
          </h4>
          <p className=" 2xl:mt-3 mt-3 font-sora text-grayPrimary2">
            We offer company secretarial services within the various sectors of
            the Nigerian economy whether you are a start-up or an established
            corporate entity.
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora text-grayPrimary2">
            Our services cover the financial services, real estate and property,
            power and energy, mining, oil and gas, health, engineering services,
            telecommunication, manufacturing, hospitality, confectionery, food
            and beverage, capital markets, information technology, etc.
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora text-grayPrimary2">
            This service encompasses a range of administrative, legal, and
            compliance duties necessary for maintaining a company’s legal and
            regulatory obligations.
          </p>
        </div>
      </section>
      <section className="lg:pt-24 pt-16">
        <div>
          <p className="text-bluePrimary font-medium ">
            Some of the services include the following:
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 mt-14">
          <SmallCard2>
            <p className="font-semibold mb-3">Board Support</p>
            <p>
              Organizing and facilitating board and committee meetings,
              preparing agendas and minutes, and ensuring compliance with
              statutory requirements for meetings.
            </p>
          </SmallCard2>
          <SmallCard2>
            <p className="font-semibold mb-3">Corporate Governance</p>
            <p>
              Advising on and ensuring compliance with corporate governance
              principles, including board structure, director responsibilities,
              and shareholder rights.
            </p>
          </SmallCard2>
          <SmallCard2>
            <p className="font-semibold mb-3">Statutory Compliance</p>
            <p>
              Ensuring compliance with relevant company laws and regulations,
              such as filing annual returns, maintaining statutory registers,
              and updating company records.
            </p>
          </SmallCard2>
          <SmallCard2>
            <p className="font-semibold mb-3">Regulatory Compliance</p>
            <p>
              Monitoring changes in legislation and regulations affecting the
              company and ensuring timely compliance with new requirements.
            </p>
          </SmallCard2>
          <SmallCard2>
            <p className="font-semibold mb-3">Document Management</p>
            <p>
              Maintaining corporate records, including minutes, resolutions, and
              legal documents, and ensuring they are stored securely and
              accessible when needed.
            </p>
          </SmallCard2>
          <SmallCard2>
            <p className="font-semibold mb-3 text-center">
              Corporate Secretariat Software Solutions
            </p>
            <p>
              Providing software solutions for streamlining and automating
              company secretarial tasks, such as managing corporate records and
              compliance calendars.
            </p>
          </SmallCard2>
          <SmallCard2>
            <p className="font-semibold mb-3">Advisory Services</p>
            <p>
              Providing advice and guidance to the board and senior management
              on corporate governance best practices, regulatory changes, and
              compliance issues.
            </p>
          </SmallCard2>
          <SmallCard2>
            <p className="font-semibold mb-3">Shareholder Services</p>
            <p>
              Managing communication with shareholders, organizing shareholder
              meetings, and handling share transactions such as transfers and
              issuances.
            </p>
          </SmallCard2>

          <SmallCard2>
            <p className="font-semibold mb-3">Incorporation Services</p>
            <p>
              Assisting with the formation of a new company, including drafting
              the necessary documents, filing incorporation papers with the
              relevant authorities, and obtaining necessary licenses and
              permits.
            </p>
          </SmallCard2>
          <SmallCard2>
            <p className="font-semibold mb-3">Corporate Restructuring</p>
            <p className="hyphens-none">
              Assisting with corporate transactions such as mergers,
              acquisitions, and reorganizations, including drafting
              documentation and ensuring regulatory compliance.
            </p>
          </SmallCard2>
        </div>
      </section>

      <section className="lg:py-24 py-16 sm:px-[7%] px-0 bg-[#F9F9F9] mt-32 mb-20 sm:mx-10 flex justify-center items-center">
        <form className="flex flex-col 2xl:gap-8 gap-5 lg:w-[45rem] w-full bg-white p-10 form-shadow">
          <h5 className="font-montserrat text-[1.4rem] font-semibold  ">
            Contact Us
          </h5>
          <p className=" font-medium font-montserrat  ">
            Are you in need of our expertise in the company secretarial service
            or do you have a firm you want to refer to us? Please drop your
            details by clicking here. Our staff will contact you for the next
            step.
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
              placeholder="Name of Firm"
              className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-grayPrimary2">
                Need company secretarial service?
              </p>
            </div>
            <label className="text-lg flex gap-2 text-grayPrimary2">
              <input type="checkbox" name="" id="" className="w-4"/>
              Yes
            </label>
            <label className="text-lg flex gap-2 text-grayPrimary2">
              <input type="checkbox" name="" id="" className="w-4"/>
              No
            </label>
          </div>
          <div className=" ">
            <input
              type="text"
              placeholder="Address of Firm"
              className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
            />
          </div>
          <div className=" ">
            <textarea
              placeholder="Brief details of the service you want from us"
              className="bg-[#F4F4F4] placeholder:text-[text-grayPrimary2] h-[7.5rem] pl-5 pt-4 w-full"
            />
          </div>

          <Button type="">Submit Form</Button>
        </form>
      </section>
    </>
  );
}

export default CompanySecretarial;
