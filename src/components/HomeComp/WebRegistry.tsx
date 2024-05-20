

function WebRegistry() {
  return (
    <section className="py-24 text-[#111111] lg:px-20">
      <div className="flex md:flex-row md:gap-0 gap-5 flex-col items-center justify-between px-10">
        <div className=" lg:w-[33%] w-full font-syne">
          <h4 className="font-bold font-syne capitalize">
            Over view of <br /> Web Registry
          </h4>
          <p className=" font-semibold mt-3">
            Diverse Solutions Tailored to Your Needs: Explore Our Comprehensive
            Service Offerings
          </p>
        </div>
        <div className=" md:w-[54%] w-full">
          <p className="font-sora text-[1.3rem] leading-10 font-[300]">
            To help our clients go from dreaming to doing, we have our core
            beliefs that are central to their investing success. We’re here to
            help with any questions you have on your path to find financial
            security.
          </p>
          <p className=" mt-5 2xl:leading-[33px] leading-6">
            Our core beliefs serve as the cornerstone of their investing
            success, guiding them along their journey towards financial
            security.
          </p>
        </div>
      </div>

      {/* services cards */}
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 ">
        <div className="md:max-w-[400px] w-full h-[23rem] shadow-md flex flex-col items-start bg-white text-black rounded-lg overflow-hidden">
          <img src="/images/web-1.png" alt="registry" className="w-full" />

          <p className="font-sora text-lg font-semibold text-center mt-10 lg:px-4 px-2  text-balance truncate w-full ">
            Easily accessible from anywhere, with any device at any time
            via the internet.
          </p>

          <div className="flex gap-1 items-center mt-auto  w-full mb-3 px-2">
            <div className="h-[2px] bg-bluePrimary w-[10%]" />
            <div className="h-[1px] bg-bluePrimary w-[90%]" />
          </div>
        </div>
        <div className="md:max-w-[400px] w-full h-[23rem] shadow-md flex flex-col items-start bg-white text-black rounded-lg overflow-hidden">
          <img src="/images/web-2.png" alt="registry" className="w-full" />

          <p className="font-sora text-lg font-semibold text-center mt-10 lg:px-4 px-2  text-balance truncate w-full ">
            Fully secured and easy to
            use.
          </p>

          <div className="flex gap-1 items-center mt-auto  w-full mb-3 px-2">
            <div className="h-[2px] bg-bluePrimary w-[10%]" />
            <div className="h-[1px] bg-bluePrimary w-[90%]" />
          </div>
        </div>
        <div className="md:max-w-[400px] w-full h-[23rem] shadow-md flex flex-col items-start bg-white text-black rounded-lg overflow-hidden">
          <img src="/images/web-3.png" alt="registry" className="w-full" />

          <p className="font-sora text-lg font-semibold text-center mt-10 lg:px-4 px-2  text-balance truncate w-full ">
            Time saving to the Registrar, Client, Stockbroker and  shareholders
          </p>

          <div className="flex gap-1 items-center mt-auto  w-full mb-3 px-2">
            <div className="h-[2px] bg-bluePrimary w-[10%]" />
            <div className="h-[1px] bg-bluePrimary w-[90%]" />
          </div>
        </div>
        <div className="md:max-w-[400px] w-full h-[23rem] shadow-md flex flex-col items-start bg-white text-black rounded-lg overflow-hidden">
          <img src="/images/web-4.png" alt="registry" className="w-full" />

          <p className="font-sora text-lg font-semibold text-center mt-10 lg:px-4 px-2  text-balance truncate w-full ">
          Self-service platform for the 
shareholders, brokers and 
clients
          </p>

          <div className="flex gap-1 items-center mt-auto  w-full mb-3 px-2">
            <div className="h-[2px] bg-bluePrimary w-[10%]" />
            <div className="h-[1px] bg-bluePrimary w-[90%]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebRegistry;
