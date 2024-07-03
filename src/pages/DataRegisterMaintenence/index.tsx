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
          <p>
            For companies that truly care about their shareholders, PAC
            Registrars & Investor Services is your preferred choice. We maintain
            client companies’ register of shareholders with technology driven
            solutions and personalized service backed up by a full complement of
            experienced and well-trained staff
          </p>
        </div>
        <div>
          <p className="text-bluePrimary font-medium ">
            Some of our Security Register Management services include:
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 mt-14">
          <SmallCardWithNumber num="01" text="Share Register Maintenance" />
          <SmallCardWithNumber
            num="02"
            text="Organizing and Officiating at Meetings (AGM, EGM, Court-ordered meetings)"
          />
          <SmallCardWithNumber
            num="03"
            text=".Corporate Actions (New Issues, Rights Issues, Share reconstruction, Private Placements, Mergers & Acquisitions etc)"
          />
          <SmallCardWithNumber
            num="04"
            text="Payment of Dividend and Interest to Shareholders and Bondholders respectively"
          />

          <SmallCardWithNumber num="05" text="Investor Relations" />
          <SmallCardWithNumber num="06" text="Transmission of shares" />
          <SmallCardWithNumber num="07" text="Certificate Dematerialization" />
          <SmallCardWithNumber
            num="08"
            text="Information Sensitivity Analysis to Clients"
          />

          <SmallCardWithNumber
            num="09"
            text="Reporting (Rendering statutory reports to regulators)"
          />
          <SmallCardWithNumber num="10" text="CSCS Liaison" />
          <SmallCardWithNumber num="11" text="Electronic Annual Report" />
          <SmallCardWithNumber
            num="12"
            text="WebRegistry – Real Time portal designed for the convenience of shareholders and clients"
          />
        </div>
      </section>
      <CallService />
    </>
  );
}

export default DataRegisterMaintenence;
