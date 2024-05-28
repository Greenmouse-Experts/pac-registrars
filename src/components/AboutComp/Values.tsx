function Values() {
  return (
    <>
      <section className=" md:py-28 py-10 bg-bluePrimary 2xl:mb-0 mb-20">
        <div className="">
         
          <h4 className=" font-bold font-syne capitalize text-white ">
            Our Core Values
          </h4>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-10">
          <div className="bg-white py-8 px-20 relative">
            <h4 className="text-2xl font-syne font-semibold">Our Mission</h4>
            <p className="text-[#606060] 2xl:mt-5 mt-3 2xl:leading-[33px] font-sora ">
              Our mission is to excel as a Data Management and Advisory Services
              Firm, delivering unparalleled expertise and innovative solutions
              to our clients.
            </p>
            <div className="bg-bluePrimary w-fit rounded-full p-5  absolute -top-10 -left-10">
              <img src="/icons/mission.svg" alt="mission" className=" w-20 h-20"/>
            </div>
          </div>
          <div className="bg-white py-8 px-20 relative">
            <h4 className="text-2xl font-syne font-semibold">Our Vision</h4>
            <p className="text-[#606060] 2xl:mt-5 mt-3 2xl:leading-[33px] font-sora ">
              Empowering clients through quality services, innovating to add
              enduring value, continuously exceeding expectations, fostering
              trust through excellence, driving success, together.
            </p>

            <div className="bg-bluePrimary w-fit rounded-full p-5  absolute -top-10 -left-10">
              <img src="/icons/vision.svg" alt="mission" className=" w-20 h-20"/>
            </div>
          </div>
        </div>
      </section>
      <section className="  md:py-32 py-10 bg-[#F9F9F9]">
        <div className="">
          <p className="text-bluePrimary font-semibold ">
            Our Company Ethos and Values
          </p>
          <h4 className=" font-bold font-syne capitalize text-black ">
            Our Core Values
          </h4>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
         
            <div className=" bg-white shadow-sm  p-8 flex flex-col gap-6 about-shadow">
              <img src="/icons/about-1.svg" alt="" className="h-[69px] w-[69px]" />
              <h6 className="font-syne font-semibold text-2xl">Service</h6>
              <p className="text-grayPrimary2 md:leading-[33.3px] leading-7">
                We prioritize exceptional client experiences, delivering
                tailored solutions, and fostering long-term relationships built
                on trust and mutual success.
              </p>
            </div>
            <div className=" bg-white shadow-sm  p-8 flex flex-col gap-6 about-shadow">
              <img src="/icons/about-2.svg" alt="" className="h-[69px] w-[69px]" />
              <h6 className="font-syne font-semibold text-2xl">
                Professionalism
              </h6>
              <p className="text-grayPrimary2 md:leading-[33.3px] leading-7">
                Delivering top-notch services, upholding confidentiality, and
                adhering to professional standards we foster trust and
                reliability with clients and stakeholders.
              </p>
            </div>
            <div className=" bg-white shadow-sm  p-8 flex flex-col gap-6 about-shadow">
              <img src="/icons/about-3.svg" alt="" className="h-[69px] w-[69px]" />
              <h6 className="font-syne font-semibold text-2xl">Integrity</h6>
              <p className="text-grayPrimary2 md:leading-[33.3px] leading-7">
                Representing honesty, transparency, and ethical behavior in all
                dealings. We build credibility and long-term success by
                maintaining standards and ethical conduct.
              </p>
            </div>
         
          
            <div className=" bg-white shadow-sm  p-8 flex flex-col gap-6 about-shadow">
              <img src="/icons/about-4.svg" alt="" className="h-[69px] w-[69px]" />
              <h6 className="font-syne font-semibold text-2xl">Respect</h6>
              <p className="text-grayPrimary2 md:leading-[33.3px] leading-7">
                We are committed to treating clients, colleagues, and partners
                with dignity, fairness, and understanding by fostering an
                environment of mutual respect
              </p>
            </div>
            <div className=" bg-white shadow-sm  p-8 flex flex-col gap-6 about-shadow">
              <img src="/icons/about-5.svg" alt="" className="h-[69px] w-[69px]" />
              <h6 className="font-syne font-semibold text-2xl">Innovation</h6>
              <p className="text-grayPrimary2 md:leading-[33.3px] leading-7">
                We prioritize creativity, forward-thinking, and continuous
                improvement in all aspects of our services. By embracing
                innovation, we stay at the forefront of industry trends
              </p>
            </div>
            <div className=" bg-white shadow-sm  p-8 flex flex-col gap-6 about-shadow">
              <img src="/icons/about-6.svg" alt="" className="h-[69px] w-[69px]" />
              <h6 className="font-syne font-semibold text-2xl">Team Spirit</h6>
              <p className="text-grayPrimary2 md:leading-[33.3px] leading-7">
                By fostering a culture of Team Spirit, we empower our team to
                thrive in a collaborative environment, productive, and success
                for our clients and our organization.
              </p>
            </div>
         
        </div>
      </section>
    </>
  );
}

export default Values;
