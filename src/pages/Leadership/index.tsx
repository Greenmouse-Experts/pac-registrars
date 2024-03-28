import Banner from "../../components/Banner";

function Leadership() {
  return (
    <>
      <Banner page="Leadership" link="/" />
      <section className="bg-white py-16">
        <div className="flex gap-6 justify-start flex-wrap">
          <div className="relative shadow-lg flex justify-center">
            <img
              src="/images/leader-1.png"
              alt=""
              className="h-[380px] w-[310px] mix-blend-luminosity"
            />
            <div className="bg-bluePrimary absolute bottom-3 py-3 text-white rounded-lg flex flex-col items-center justify-center w-[90%]">
              <h6 className="text-lg font-semibold ">Tessa Egbe Ikimi</h6>
              <p className="font-normal">Chairperson</p>
            </div>
          </div>
          <div className="relative shadow-lg flex justify-center">
            <img
              src="/images/leader-2.png"
              alt=""
              className="h-[380px] w-[310px] mix-blend-luminosity"
            />
            <div className="bg-bluePrimary absolute bottom-3 py-3 text-white rounded-lg flex flex-col items-center justify-center w-[90%]">
              <h6 className="text-lg font-semibold ">Chris Oshiafi</h6>
              <p className="font-normal">Diretor</p>
            </div>
          </div>
          <div className="relative shadow-lg flex justify-center">
            <img
              src="/images/leader-3.png"
              alt=""
              className="h-[380px] w-[310px] mix-blend-luminosity"
            />
            <div className="bg-bluePrimary absolute bottom-3 py-3 text-white rounded-lg flex flex-col items-center justify-center w-[90%]">
              <h6 className="text-lg font-semibold ">Sina Alimi</h6>
              <p className="font-normal">Director</p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-start flex-wrap mt-10">
          <div className="relative shadow-lg flex justify-center">
            <img
              src="/images/leader-4.png"
              alt=""
              className="h-[380px] w-[310px] mix-blend-luminosity"
            />
            <div className="bg-bluePrimary absolute bottom-3 py-3 text-white rounded-lg flex flex-col items-center justify-center w-[90%]">
              <h6 className="text-lg font-semibold ">Eric Okoruwa</h6>
              <p className="font-normal">Director</p>
            </div>
          </div>
          <div className="relative shadow-lg flex justify-center">
            <img
              src="/images/leader-5.png"
              alt=""
              className="h-[380px] w-[310px] mix-blend-luminosity"
            />
            <div className="bg-bluePrimary absolute bottom-3 py-3 text-white rounded-lg flex flex-col items-center justify-center w-[90%]">
              <h6 className="text-lg font-semibold ">Ifeanyi John</h6>
              <p className="font-normal">Managing Director/CEO</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leadership;
