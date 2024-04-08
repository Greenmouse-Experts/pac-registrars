import { BsDot } from "react-icons/bs";
import Banner from "../../components/Banner";

function DataRegisterMaintenence() {
  return (
    <>
      <Banner page="Data Register Maintenance" link="" />

      <section className="py-10 bg-[#f4f4f4] flex items-center justify-between ">
        <div className="font-syne w-full">
          <p className="text-orangePrimary text-[12px] font-medium ">
            Data Register Maintenance
          </p>
          <h4 className=" font-bold font-syne capitalize mb-5">
            Core Share Registration services include
          </h4>
          <div className="flex md:flex-row flex-col items-start justify-between">
            <div className="md:w-[32%] w-full relative">
              <img
                src="/images/whoweare.png"
                alt=""
                className="w-full h-[350px] object-cover"
              />
              <img
                src="/icons/arrow-down-large.svg"
                alt=""
                className="absolute right-[-25px] bottom-[-25px] w-44"
              />
            </div>
            <div className="md:w-[32%] w-full font-syne">
              <div>
                <ul className="flex flex-col">
                  <li className="flex items-start gap-1">
                    <span>
                      <BsDot color="black" size={30} />
                    </span>
                    Maintenance of client companies Register of Shareholders
                    which includes change of addresses, Bank mandate, Probate or
                    Letters of administration, Change of names etc.
                  </li>
                  <li className="flex items-start gap-1">
                    <span>
                      <BsDot color="black" size={30} />
                    </span>{" "}
                    Payment of dividend warrants/interest to
                    shareholders/bondholders respectively.
                  </li>
                  <li className="flex items-start gap-1">
                    <span>
                      <BsDot color="black" size={30} />
                    </span>{" "}
                    Registration of share transfers.
                  </li>
                  <li className="flex items-start gap-1">
                    <span>
                      <BsDot color="black" size={30} />
                    </span>{" "}
                    Issuing of share certificates.
                  </li>
                  <li className="flex items-start gap-1">
                    <span>
                      <BsDot color="black" size={30} />
                    </span>{" "}
                    Distribution of annual reports and accounts.
                  </li>
                  <li className="flex items-start gap-1">
                    <span>
                      <BsDot color="black" size={30} />
                    </span>{" "}
                    Registrar to Offer Services
                  </li>
                  <li className="flex items-start gap-1">
                    <span>
                      <BsDot color="black" size={30} />
                    </span>
                    Security Data Consultancy Services
                  </li>

                  <li className="flex items-start gap-1">
                    <span>
                      <BsDot color="black" size={30} />
                    </span>
                    Debenture Stock Data Management
                  </li>
                  <li className="flex items-start gap-1">
                    <span>
                      <BsDot color="black" size={30} />
                    </span>
                    Government Bond Issue Registrars/ Data Management
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-[32%] w-full font-syne">
            <div>
              <ul className="flex flex-col">
                <li className="flex items-start gap-1">
                <span>
                    <BsDot color="black" size={30}/>
                </span>
                Organizing and officiating at AGMs/EGMs.
                </li>
                <li className="flex items-start gap-1">
                <span>
                    <BsDot color="black" size={30}/></span> Verification of Shareholders/bondholders signature
                </li>
                <li className="flex items-start gap-1">
                <span>
                    <BsDot color="black" size={30}/></span> Liaising with CSCS to update the register of shareholders/ Registration of share transfers.
                </li>
                <li className="flex items-start gap-1">
                <span>
                    <BsDot color="black" size={30}/></span> Production and filling of statutory reports with the Corporate Affairs Commission.
                </li>
                <li className="flex items-start gap-1">
                <span>
                    <BsDot color="black" size={30}/></span> Primary Market Activities – new issue/offer for sale (IPO)/Rights issue/private placements
                </li>
                <li className="flex items-start gap-1">
                <span>
                    <BsDot color="black" size={30}/></span> Rendering statutory reports to NSE and SEC on behalf of client companies
                </li>
                <li className="flex items-start gap-1">
                <span>
                    <BsDot color="black" size={30}/></span>Settlement Services for foreign denominated securities etc.
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DataRegisterMaintenence;
