import Banner from "../../components/Banner";
import CallService from "../../components/CallService";
import SmallCardWithNumber from "../../components/cards/SmallCardWithNumber";

function DataRegisterMaintenence() {
  return (
    <>
      <Banner
        page="Securities Register Management"
        link=""
        img="/images/maintenance-banner.png"
      />

      <section className="lg:pt-24  ">
       <div className="lg:w-[40%] w-full mb-4">
       <p >
          For companies that truly care about their shareholders, PAC Registrars
          & Investor Services is your preferred choice. We maintain client
          companies’ register of shareholders with technology driven solutions
          and personalized service backed up by a full complement of experienced
          and well-trained staff
        </p>
       </div>
        <div>
          <p className="text-bluePrimary font-medium ">
          Some of our  Security Register Management services include:
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 mt-14">
          <SmallCardWithNumber
            num="01"
            text="Registrars Maintenance of Client Companies"
          />
          <SmallCardWithNumber num="02" text="Maintenance of Shareholders" />
          <SmallCardWithNumber
            num="03"
            text="Fund Management (Asset Management, Money Market Fund, Equity Fund, Eurobond)"
          />
          <SmallCardWithNumber
            num="04"
            text="Corporate Actions (New Issues, Right Issues, Bank Mandating, Mergers and Acquisition)"
          />

          <SmallCardWithNumber num="05" text="Dematerialization" />
          <SmallCardWithNumber
            num="06"
            text="e-Bonus Service / e- Dividend Payment"
          />
          <SmallCardWithNumber num="07" text="Probate and Transmission" />
          <SmallCardWithNumber num="08" text="Uncompromised Due Diligence" />

          <SmallCardWithNumber num="09" text="Daily Share Account Balances" />
          <SmallCardWithNumber
            num="10"
            text="User-friendly online access experience"
          />
          <SmallCardWithNumber
            num="11"
            text="Electronic data storage and retrieval system"
          />
          <SmallCardWithNumber
            num="12"
            text="Electronic data capturing system."
          />
        </div>
      </section>
      <CallService />
    </>
  );
}

export default DataRegisterMaintenence;
