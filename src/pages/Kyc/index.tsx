
import Banner from "../../components/Banner";
import List from "../../components/List";
import { NavLink } from "react-router-dom";

function Kyc() {
  return (
    <>
      <Banner page="KYC" link="" />
      <section className="md:py-32 py-10 bg-white flex md:flex-row flex-col-reverse items-center justify-between ">
        <div className="md:w-[55%] w-full md:mt-0 mt-5 font-syne">
          <p className="text-orangePrimary font-medium ">Kyc</p>
          <h4 className=" font-bold font-syne capitalize">KYC</h4>
          <p className=" 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px] font-sora ">
            Our KYC is an address verification system to ascertain the validity
            and genuineness of customer's information(address). It is an
            essential part of Customer due diligence process. Our service
            offering is geared towards ensuring clean and accurate data and
            effective communication to customers.
          </p>
          <div className="mt-2">
            <h6 className="md:text-2xl text-lg mb-2 font-semibold ">
              Our service is open to businesses such as
            </h6>
            <List
              items={[
                "Banks",
                "Micro-finance Banks",
                "Non-financial service",
                "E-commerce ",
              ]}
            />
            <p className=" 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px] md:text-xl text-basefont-sora mb-10">
              Do you need our service, kindly call{" "}
              <span className=" text-orangePrimary">
                <NavLink to="tel:08086790272">
                  +2348086790272 or click HERE
                </NavLink>
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="md:w-[40%] w-full sm:h-[22rem] h-[15rem]  relative">
          <img
            src="/images/kyc.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
    </>
  );
}

export default Kyc;
