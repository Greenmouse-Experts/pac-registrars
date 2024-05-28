import Banner from "../../components/Banner";

function Media() {
  return (
    <>
      <Banner page="Media" link="" img="/images/media-banner.png"/>
      <section className=" md:py-16 py-10 bg-[#f4f4f4] flex items-center justify-between ">
        <div className="font-syne w-full">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 w-full my-10">
            <div className="bg-white h-[300px] flex items-center justify-center rounded-[16px] overflow-hidden ">
              <img
                src="/images/gallery-1.png"
                alt=""
                className="h-full w-full object-cover object-center "
              />
            </div>
            <div className="bg-white h-[300px] flex items-center justify-center rounded-[16px] overflow-hidden ">
              <img
                src="/images/gallery-2.png"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="bg-white h-[300px] flex items-center justify-center rounded-[16px] overflow-hidden ">
              <img
                src="/images/gallery-3.png"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="bg-white h-[300px] flex items-center justify-center rounded-[16px] overflow-hidden ">
              <img
                src="/images/gallery-4.png"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="bg-white h-[300px] flex items-center justify-center rounded-[16px] overflow-hidden ">
              <img
                src="/images/gallery-5.png"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Media;
