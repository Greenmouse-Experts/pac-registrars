import Banner from "../../components/Banner";

function AnnualReport() {


  return (
    <>
      <Banner
        page="Company annual report"
        link=""
        img="/images/annual-banner.png"
      />
      <section className=" md:py-32 py-10 bg-[#f4f4f4]  font-montserrat ">
      <div className="flex items-center justify-between lg:flex-row flex-col gap-10">

      <div className=" flex flex-col items-center justify-center gap-5 card-shadow py-3 md:w-[50%] w-full rounded-[10px]">
          <p className="text-2xl">2022 ANNUAL REPORT AND ACCOUNT</p>

          <p>Secure Electronic Technology Plc</p>
          <img src="/icons/pdf.svg" alt="" />
          <a href="/documents/2022-report.pdf" download >
            <button className="bg-bluePrimary px-4 py-2 text-white text-base font-semibold">
              Download
            </button>
          </a>
        </div>
        <div className=" flex flex-col items-center justify-center gap-5 card-shadow py-3 md:w-[50%] w-full rounded-[10px]">
          <p className="text-2xl">2016 ANNUAL REPORT AND ACCOUNT</p>
          <p>Secure Electronic Technology Plc</p>
          <img src="/icons/pdf.svg" alt="" />
          <a href="/documents/2016-report.pdf" download >
            <button className="bg-bluePrimary px-4 py-2 text-white text-base font-semibold">
              Download
            </button>
          </a>
        </div>
        {/* <div className=" flex flex-col items-center justify-center gap-5 card-shadow py-3 md:w-[33%] w-full rounded-[10px]">
          <p className="text-2xl">2024 Report</p>
          <img src="/icons/pdf.svg" alt="" />
          <a href="/" download onClick={handleDownload}>
            <button className="bg-bluePrimary px-4 py-2 text-white text-base font-semibold">
              Download
            </button>
          </a>
        </div> */}
      </div>
      </section>
    </>
  );
}

export default AnnualReport;
