import Banner from "../../components/Banner";

function Client() {
  return (
    <>
      <Banner page="Clients" link="" img="/images/client-banner.png" />
      <section className="md:py-32 py-10 bg-[#f4f4f4] flex items-center justify-between ">
        <div className="font-syne w-full">
          <p className="text-bluePrimary font-medium ">Clients and Partners </p>
          <h4 className=" font-bold font-syne capitalize">
            Our Clients and Partners
          </h4>

          <div className="grid md:grid-cols-4 grid-col-1 gap-4 w-full my-10">
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-14.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-3.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-1.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-36.png" alt="" className="max-h-32" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-5.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-16.svg" alt="" className="h-36" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-7.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-15.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex  flex-col items-center gap-1 justify-center rounded-xl ">
              <img src="/images/client-6.svg" alt="" className="max-h-28" />
              <p className="text-center text-sm font-semibold opacity-75 text-bluePrimary">PACAM EQUITY FUND </p>
            </div>
            <div className="bg-white px-10 h-[150px] flex  flex-col items-center gap-1 justify-center rounded-xl ">
              <img src="/images/client-6.svg" alt="" className="max-h-28" />
              <p className="text-center text-sm font-semibold opacity-75 text-bluePrimary">PACAM EUROBOND FUND</p>
            </div>
            <div className="bg-white px-10 h-[150px] flex  flex-col items-center gap-1 justify-center rounded-xl ">
              <img src="/images/client-6.svg" alt="" className="max-h-28" />
              <p className="text-center text-sm font-semibold opacity-75 text-bluePrimary">PACAM FIXED INCOME FUND  </p>
            </div>
            <div className="bg-white px-10 h-[150px] flex  flex-col items-center gap-1 justify-center rounded-xl ">
              <img src="/images/client-6.svg" alt="" className="max-h-28" />
              <p className="text-center text-sm font-semibold opacity-75 text-bluePrimary">PACAM MONEY MARKET FUND </p>
            </div>
           
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-22.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-2.svg" alt="" className="max-h-28" />
            </div>
            {/* <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-38.png" alt="" className="max-h-28" />
            </div> */}
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-25.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-39.png" alt="" className="max-h-28" />
            </div>
           
          
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-9.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-4.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-40.png" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-11.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-10.svg" alt="" className="max-h-28" />
            </div>

            <div className="bg-white px-10 h-[150px] flex  flex-col items-center gap-1 justify-center rounded-xl ">
              <img src="/images/client-30.jpg" alt="" className="max-h-28" />
              <p className="text-center text-sm font-semibold opacity-75 text-bluePrimary">GEO Fluids Plc</p>
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-31.png" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-32.png" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-33.png" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-34.png" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-35.png" alt="" className="max-h-28" />
            </div>

            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-8.svg" alt="" className="max-h-28" />
            </div>

            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-12.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-13.svg" alt="" className="max-h-28" />
            </div>

            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-29.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-30.svg" alt="" className="max-h-28" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-31.svg" alt="" className="max-h-28" />
            </div>

            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-21.svg" alt="" className="max-h-28" />
            </div>

            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-26.svg" alt="" className="max-h-28" />
            </div>

            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-29.jpg" alt="" className="max-h-32" />
            </div>
            <div className="bg-white px-10 h-[150px] flex items-center justify-center rounded-xl ">
              <img src="/images/client-41.jpg" alt="" className="max-h-32" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Client;
