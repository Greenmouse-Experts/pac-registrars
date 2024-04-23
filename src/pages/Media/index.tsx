import Banner from "../../components/Banner";

function Media() {
  return (
    <>
      <Banner page="Media" link="" />
      <section className=" md:py-32 py-10 bg-[#f4f4f4] flex items-center justify-between ">
        <div className="font-syne w-full">
          <h4 className=" font-bold font-syne capitalize">View Our Gallery</h4>
          <div className="grid md:grid-cols-4 grid-col-1 gap-4 w-full my-10">
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
