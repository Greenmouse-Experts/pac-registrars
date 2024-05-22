import Banner from "../../components/Banner";
import List from "../../components/List";
import SmallCard from "../../components/SmallCard";

function WebRegistry() {
  return (
    <>
      <Banner page="Web Registry" link="" />
      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div className="lg:w-[44%] w-full">
          <img
            src="/images/registry-1.png"
            alt=""
            className="w-full object-cover rounded-[20px]"
          />
        </div>
        <div className="lg:w-[56%] w-full font-syne">
          <p className="text-bluePrimary font-medium ">About Web Registry</p>
          <h4 className=" font-bold font-syne capitalize text-black">
            Introduction
          </h4>
          <p className=" 2xl:mt-5 mt-3 font-sora text-grayPrimary2">
            Web Registry (e-Registrar) is a robust online application that seeks
            to support our client’s Companies to effectively reduce traffic at
            there front office by empowering shareholders, Brokers as well as
            the Client(s) in order to generate urgent statement reports, print
            report, monitor share holding (Units), change contact details like
            address, phone number, email, bank account details etc.
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora  text-grayPrimary2">
            It is a secured interface for achieving faster and more efficient
            data via internet. This simply means Registry anytime and anywhere.
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora text-grayPrimary2">
            The application is security tight as it internally validates any
            user before granting access base on the user profile.
          </p>
        
         
        </div>
      </section>
      <section className="lg:pt-24 pt-16">
        <div>
          <h4 className=" font-bold font-syne capitalize text-black">
            Over view of Web Registry
          </h4>
          <p className="text-bluePrimary font-medium ">
            Diverse Solutions Tailored to Your Needs: Explore Our Comprehensive
            Service Offerings
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 mt-14">
          <SmallCard text="Easily accessible from anywhere, with any device at any time via the internet." />
          <SmallCard text="Fully secured and easy to use." />
          <SmallCard text="Time saving to the Registrar, Client, Stockbroker and shareholders." />
          <SmallCard text="Self-service platform for the shareholders, brokers and clients" />
        </div>
      </section>

      <section className="lg:pt-24 pt-16">
        <div className="mb-5">
          <h4 className=" font-bold font-syne capitalize text-black">
            Web Registry Advantage to a Client
          </h4>
          <p className="text-bluePrimary font-medium ">
            Quick access to Generating Reports as at any date which includes:
          </p>
        </div>

        <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-20 gap-10">
          <div className="lg:w-[70%] w-full">
            <List
              items={[
                "Register Listing (Reports for the Board of Directors, Management decision or to be forwarded to authorities)",
                "Range Listing (Structure of Company's Holding)",
                "CSCS Listing (Weekly sales/purchase Report)",
                " Dividend & Certificate History",
                "Bonus History",
                "Right History",
                "Quarterly reports",
                "Monitory the entire shares to prevent forceful takeover of the company from the floor of the Nigeria Stock Exchange",
              ]}
            />
          </div>
          <img
            src="/images/registry-2.png"
            alt=""
            className="lg:w-[30%] w-full"
          />
        </div>
      </section>

      <section className="lg:pt-24 pt-16">
        <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-20 gap-10">
          <img
            src="/images/registry-3.png"
            alt=""
            className="lg:w-[30%] w-full"
          />
          <div className="lg:w-[70%] w-full">
            <h4 className=" font-bold font-syne capitalize text-black mb-5">
              Web Registry Advantage to a Client
            </h4>
            <List
              items={[
                "Ability to monitor own shares online",
                "Ability to monitor stockbroker’s activities",
                "Ability to print out own share reports/statement",
                "Ability to know actual trade mandate price online",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="lg:pt-24 pt-16">
        <div className="flex lg:flex-row flex-col items-center lg:gap-20 gap-10">
          <div className="lg:w-[70%]  w-full">
            <div className=" mb-5 w-full">
              <h4 className=" font-bold font-syne capitalize text-black">
                Web Registry Advantage to a Broker/ Custodian
              </h4>
            </div>
            <List
              items={[
                " Ability to send Offer/Right Application to the Registrar online",
                "Ability to send dematerialized certificate for verification online",
                " Ability to monitor shares sent to Registrar for verification by certificate enquiry",
                "Ability to monitor status of Verification Listing (They can only view information they sent to us treated with their member code)",
                " Ability  to  know  if  a  particular  share  certificate  has  not  been  dematerialized  from  the Registrar's Office online",
                "Ability to print out share Status reports for their customers",
                "Ability to get current market price online",
              ]}
            />
          </div>
          <img
            src="/images/registry-4.png"
            alt=""
            className="lg:w-[30%] w-full"
          />
        </div>
      </section>

      <section className="lg:mt-24 mt-16 py-16 bg-bluePrimary text-white">
        <h4 className=" font-bold font-syne capitalize text-white">
          Procedure for Registration of Web Registry as a shareholder
        </h4>

        <ol className="flex flex-col gap-3 mt-5">
          <li className="md:text-lg text-base font-normal ">
            1. Pickup the form in our office or download it online from our
            website www.pacregistrars.com then fill the form and mark the
            company(s) you own account managed by us.
          </li>
          <li className="md:text-lg text-base font-normal ">
            2. Pay a token of =N=1,000 for the Network service subscription for
            a period of 1 year per an account for the Web Registry in our bank
            account provided. (Heritage Bank to Account Numbers 5100010389)
            Note: NO EXTRA HIDIND CHARGES
          </li>
          <li className="md:text-lg text-base font-normal ">
            3. Come to our office at No. 122 Bode Thomos Street, Surulere, Lagos
            with the payment slip or scan and forward the evidence of your
            payment to us at info@pacregistrars.com
          </li>
          <li className="md:text-lg text-base font-normal ">
            4. We will create the user name and password and send to your email
            address after the confirmation of your payment and prove of
            ownership of your securities.
          </li>
          <li className="md:text-lg text-base font-normal ">
            5. You are required to change your password once you login to your
            account the first time and keep your new password secured to
            yourself.
          </li>
          <li className="md:text-lg text-base font-normal ">
            6. Do not forget to make payment after your current subscription
            expired.
          </li>
        </ol>
      </section>

      <section className="lg:py-24 py-16  text-[#111111]">
        <h4 className=" font-bold font-syne capitalize">
          Procedure for Registration of Web Registry as a Stockbrokers/Custodians
        </h4>

        <ol className="flex flex-col gap-3 mt-5">
          <li className="md:text-lg text-base font-normal ">
             1. Visit  our  office, or  write  us  a  letter  requesting  for
             the  products  hand  copy  or  online (info@pacregistrars.com)
          </li>
          <li className="md:text-lg text-base font-normal ">
            2. All the necessary detail will be forward to your company via
            email.
          </li>
        </ol>
      </section>
    </>
  );
}

export default WebRegistry;
