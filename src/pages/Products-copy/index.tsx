
import { BsDot } from "react-icons/bs";
import Banner from "../../components/Banner";

function Products() {
  const hide =  {
    name: "Boluwatife Efeoghene",
    title: "Team Lead, Operations",
    bio: [
      "Boluwatife Efeoghene is an investment banker with 1 decade of experience within the capital market. Her experience cuts across Customer service operations, finance, relationship management, and business development.",
      "She holds B.Sc. from the National Open University of Nigeria and an MBA from Ladoke Akintola University of Technology. She is an Associate member of the Institute of Capital Market Registrars (ICMR). She is currently the Team Lead, Operations prior to her joining PAC Registrars and Investor Services, she worked with Africa Prudential Plc."
    ],
    image: "/images/leader-11.png",
  }
  console.log(hide)
  return (
    <>
      <Banner page="Products" link="" />

      <section className="py-10 bg-[#f4f4f4] flex items-center justify-between ">
        <div className="font-syne w-full">
          <p className="text-orangePrimary font-medium ">
            Products
          </p>
          <h4 className=" font-bold font-syne capitalize mb-10">
            Our Products
          </h4>
          <div className="flex md:flex-row flex-col md:items-start items-center justify-between">
            <div className="md:w-[40%] w-full">
              <img
                src="/images/product-1.jpg"
                alt=""
                className="w-full h-[200px] object-cover object-center"
              />
            </div>
            <div className="md:w-[55%] w-full font-syne">
              <h4 className=" font-bold font-syne capitalize">
                Register Maintenance Services
              </h4>
              <ul className="flex flex-col">
                <li className="flex items-start gap-1">
                  <span>
                    <BsDot color="black" size={30} />
                  </span>
                  Government Bond Management
                </li>
                <li className="flex items-start gap-1">
                  <span>
                    <BsDot color="black" size={30} />
                  </span>{" "}
                  Corporate Bond/Debentures Stock Management
                </li>
                <li className="flex items-start gap-1">
                  <span>
                    <BsDot color="black" size={30} />
                  </span>{" "}
                  Corporate Equity Data Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 md:mx-10 mx-0 py-10 bg-bluePrimary text-white">
        <h4 className=" font-bold font-syne text-start capitalize">
          Registrar to Offer Services
        </h4>
        <div className="h-[3px] bg-white my-5 w-full" />
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="md:w-[40%] w-full relative"></div>
          <div className="md:w-[55%] w-full font-syne">
            <ul className="flex flex-col">
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>
                Government Bond Management
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                Corporate Bond/Debentures Stock Management
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                Corporate Equity Data Management
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-10 bg-[#f4f4f4] flex items-center justify-between ">
        <div className="font-syne w-full">
          <p className="text-orangePrimary  font-medium ">
            Products
          </p>
          <h4 className=" font-bold font-syne capitalize mb-10">
            Our Products
          </h4>
          <div className="flex md:flex-row flex-col md:items-start items-center justify-between">
            <div className="md:w-[40%] w-full relative">
              <img
                src="/images/product-2.jpg"
                alt=""
                className="w-full h-[200px] object-cover object-center"
              />
            </div>
            <div className="md:w-[55%] w-full font-syne">
              <h4 className=" font-bold font-syne capitalize">
                Security Data Consultancy Services
              </h4>
              <ul className="flex flex-col">
                <li className="flex items-start gap-1">
                  <span>
                    <BsDot color="black" size={30} />
                  </span>
                  Government Bond Management
                </li>
                <li className="flex items-start gap-1">
                  <span>
                    <BsDot color="black" size={30} />
                  </span>{" "}
                  Corporate Bond/Debentures Stock Management
                </li>
                <li className="flex items-start gap-1">
                  <span>
                    <BsDot color="black" size={30} />
                  </span>{" "}
                  Corporate Equity Data Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 md:mx-10 mx-0 py-10 bg-bluePrimary text-white">
        <h4 className=" font-bold font-syne text-start capitalize">
          Web Registry
        </h4>
        <div className="h-[3px] bg-white my-5 w-full" />
        <div className="flex md:flex-row flex-col items-start justify-between">
          <div className="md:w-[20%] w-full relative"></div>
          <div className="md:w-[30%] w-full font-syne">
            <ul className="flex flex-col">
              <p className="text-lg mb-2">Investors Portal</p>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>
                E-Change Of Basic Details
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                E-View & Print Of Account Statements
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                E-Dividend/Bonus/Verification Confirmation
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                AGM & EGM Notification
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                Bank Mandates
              </li>
              <p className="text-lg my-2">Others</p>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>
                E-Voting
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                E-IPO and Allotment
              </li>
            </ul>
          
          </div>
          <div className="md:w-[30%] w-full font-syne">
          <ul className="flex flex-col">
              <p className="text-lg mb-2">Client Portal</p>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>
                View Own Security Information
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                View & Print Own Register
              </li>
             
              <p className="text-lg my-2">Stockbrokers Portal</p>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>
                E-Stock Delivery
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                View & Print Customers Statement
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
