
import Banner from "../../components/Banner";
import SmallCard from "../../components/SmallCard";

function DataRegisterMaintenence() {
  return (
    <>
      <Banner page="Data Register Maintenance" link="" img="/images/maintenance-banner.png" />

   
      <section className="lg:pt-24 lg:pb-32 py-16">
        <div>
          <p className="text-bluePrimary font-medium ">
          Some of our services includes:
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 mt-14">
          <SmallCard text="Registrars Maintenance of Client Companies" />
          <SmallCard text="Maintenance of Shareholders" />
          <SmallCard text="Fund Management (Asset Management, Money Market Fund, Equity Fund, Eurobond)" />
          <SmallCard text="Corporate Actions (New Issues, Right Issues, Bank Mandating, Mergers and Acquisition)" />


          <SmallCard text="Dematerialization" />
          <SmallCard text="e-Bonus Service / e- Dividend Payment" />
          <SmallCard text="Probate and Transmission" />
          <SmallCard text="Uncompromised Due Diligence" />

          <SmallCard text="Daily Share Account Balances" />
          <SmallCard text="User-friendly online access experience" />
          <SmallCard text="Electronic data storage and retrieval system" />
          <SmallCard text="Electronic data capturing system." />
        </div>
      </section>
     
    </>
  );
}

export default DataRegisterMaintenence;

