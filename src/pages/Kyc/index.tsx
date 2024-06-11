
import Banner from "../../components/Banner";
import SmallCardWithIcon from "../../components/cards/SmallCardWithIcon";
import CallService from "../../components/CallService";

function Kyc() {

  return (
    <>
      <Banner page="KYC Service" link="" img="/images/kyc-banner.png" />
      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div className="lg:w-[44%] w-full">
          <img
            src="/images/kyc-img.png"
            alt=""
            className="w-full object-cover rounded-[20px]"
          />
        </div>
        <div className="lg:w-[56%] w-full font-syne">
          <h4 className=" font-bold font-syne capitalize text-black">
            KYC Service
          </h4>
          <p className=" 2xl:mt-3 mt-3 font-sora text-grayPrimary2">
            Our KYC is an address verification system to ascertain the validity
            and genuineness of customer’s information(address).
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora text-grayPrimary2">
            It is an essential part of Customer due diligence process. Our
            service offering is geared towards ensuring clean and accurate data
            and effective communication to customers.
          </p>
        </div>
      </section>
      <section className="lg:pt-24 pt-16">
        <div>
          <p className="text-bluePrimary font-semibold text-lg ">
            Our service is open to businesses such as :
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 mt-14">
          <SmallCardWithIcon img="/icons/kyc1.svg" text="Banks" />
          <SmallCardWithIcon img="/icons/kyc2.svg" text="Micro-finance Bank" />
          <SmallCardWithIcon
            img="/icons/kyc3.svg"
            text="Non-financial service"
          />
          <SmallCardWithIcon img="/icons/kyc4.svg" text="E-commerce" />
        </div>
      </section>
     <CallService/>
    </>
  );
}

export default Kyc;
