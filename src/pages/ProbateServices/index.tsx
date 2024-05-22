import Banner from "../../components/Banner";
import Button from "../../components/Button";
import SmallCard from "../../components/SmallCard";

function ProbateServices() {
  return (
    <>
      <Banner
        page="Probate/ Transmission"
        link=""
        img="/images/probate-banner.png"
      />
      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div className="lg:w-[44%] w-full">
          <img
            src="/images/probate-img.png"
            alt=""
            className="w-full object-cover rounded-[20px]"
          />
        </div>
        <div className="lg:w-[56%] w-full font-syne">
          <h4 className=" font-bold font-syne capitalize text-black">
            Probate/ Transmission
          </h4>
          <p className=" 2xl:mt-3 mt-3 font-sora text-grayPrimary2">
            PAC Registrars and Investor Services Probate Services helps take
            away the burden being faced by the beneficiaries of a deceased
            person. We are passionate about what we do which is why at the heart
            of our business is to make bereaved families happy again.
          </p>
        </div>
      </section>
      <section className="lg:pt-24 pt-16">
        <div>
         
          <p className="text-bluePrimary font-medium ">
          Our offering is end-to-end and covers but not limited to the following:
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 mt-14">
          <SmallCard text="Procuring Grant of Probate/ Letters of Administration" />
          <SmallCard text="Death certificate processing" />
          <SmallCard text="Endorsement of Bank Certificate" />
          <SmallCard text="Amendments of Letters of Administration" />

          <SmallCard text="Obtaining certificate of additional assets" />
          <SmallCard text="Effects new mandate of the administrators" />
          <SmallCard text="Confirmation of Grant of Probate and Letters of Administration" />
          <SmallCard text="Will Filing and confirmation." />


          <SmallCard text="Receiving" />
          <SmallCard text="Annuity" />
          <SmallCard text="Gathering of Assets" />
        
        </div>
      </section>

      <section className="lg:py-24 py-16 sm:px-[7%] px-0 bg-[#F9F9F9] mt-32 mb-20 sm:mx-10 flex justify-center items-center">
      <form className="flex flex-col 2xl:gap-8 gap-5 lg:w-[53rem] w-full bg-white p-10" >
        <h5 className="font-montserrat text-[1.4rem] font-semibold  ">
          Contact Us
        </h5>
        <p className=" font-medium font-montserrat  ">
        Do you need to process a Letters of Administration or Grant of Probate, click here and fill the attached form. Our staff will contact you and provide the needed information to you.
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
        <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-[#F4F4F4] 2xl:h-[60px]  h-[50px] pl-5 lg:w-[373px] w-full"
          />
          <input
            type="tel"
            placeholder="WhatsApp Number" 
            className="bg-[#F4F4F4] lg:w-[373px] w-full 2xl:h-[60px]  h-[50px] pl-5"
          />
        </div>
        <div className=" ">
          <input
            type="text"
            placeholder="Name of Deceased Person"
            className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
          />
        </div>
        <div className=" ">
          <input
            type="text"
            placeholder="Place of death"
            className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
          />
        </div>
        <div className=" ">
          <input
            type="text"
            placeholder="Relationship with the deceased person"
            className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
          />
        </div>
        <div className=" ">
          <input
            type="text"
            placeholder="Do you have a preferred time for us to call you?"
            className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
          />
        </div>
        <Button type="">Submit</Button>
      </form>
      </section>

   
    </>
  );
}

export default ProbateServices;
