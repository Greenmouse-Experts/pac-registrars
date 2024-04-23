
import Banner from "../../components/Banner";
import List from "../../components/List";

function DataRegisterMaintenence() {
  return (
    <>
      <Banner page="Data Register Maintenance" link="" />

      <section className="md:py-32 py-10 bg-[#f4f4f4] flex items-center justify-between ">
        <div className="font-syne w-full">
          <p className="text-orangePrimary t font-medium ">
            Data Register Maintenance
          </p>
          <h4 className=" font-bold font-syne capitalize mb-5">
            Core Share Registration services include
          </h4>
          <div className="flex md:flex-row flex-col items-start justify-between">
            <div className="md:w-[48%] w-full relative">
              <img
                src="/images/management-1.png"
                alt=""
                className="w-full h-[350px] object-cover object-center"
              />
              <img
                src="/icons/arrow-down-large.svg"
                alt=""
                className="absolute right-[-25px] bottom-[-25px] w-44"
              />
            </div>
            <div className="md:w-[48%] w-full font-syne">
              <List
                items={[
                  "Maintenance of client companies Register of Shareholders which includes change of addresses, Bank mandate, Probate or Letters of administration, Change of names etc",
                  "Payment of dividend warrants/interest to shareholders/bondholders respectively.",
                  "Registration of share transfers.",
                  "Issuing of share certificates.",
                  "Distribution of annual reports and accounts.",
                  "Registrar to Offer Services",
                  "Security Data Consultancy Services",
                  "Debenture Stock Data Management",
                  "Government Bond Issue Registrars/ Data Management",
                ]}
              />
            </div>
          
          </div>
          <div className="flex md:flex-row flex-col-reverse items-start justify-between sm:mt-16 mt-10">
          <div className="md:w-[48%] w-full font-syne">
              <List
                items={[
                  "Organizing and officiating at AGMs/EGMs.",
                  "Verification of Shareholders/bondholders signature",
                  "Liaising with CSCS to update the register of shareholders/ Registration of share transfers.",
                  "Production and filling of statutory reports with the Corporate Affairs Commission.",
                  "Primary Market Activities - new issue/offer for sale (IPO)/Rights issue/private placements",
                  "Rendering statutory reports to NSE and SEC on behalf of client companies",
                  "Settlement Services for foreign denominated securities etc.",
                 
                ]}
              />
            </div>
            <div className="md:w-[48%] w-full relative">
              <img
                src="/images/management-2.webp"
                alt=""
                className="w-full h-[350px] object-cover object-center"
              />
              
            </div>
           
          
          </div>
        </div>
      </section>
    </>
  );
}

export default DataRegisterMaintenence;

