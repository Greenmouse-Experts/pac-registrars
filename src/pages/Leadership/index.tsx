import Banner from "../../components/Banner";
import { IoMdArrowForward } from "react-icons/io";
import { LeadershipModal } from "../../components/modals/LeadershipModal";
import { useState } from "react";

interface IBio{
  name: string;
  title: string;
  bio: string[];
  image: string;
}

const LeaderBio:IBio[] = [
  {
    name: "Chris Oshiafi",
    title: "Chairman",
    bio: [
      "The Chief Executive Officer comes with over two decades of experience in Structured Finance, Consulting, Investment Banking and Venture Capital/Private Equity. He holds a 2nd Class (Upper Division) in Accounting & Finance from the University of London and Master of Business Administration degree from the University of Lagos.",
      "He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), an Associate of the Chartered Insurance Institute of London, (ACII) UK and Chartered Institute of Taxation of Nigeria (ACIT). He also attended various programs at the prestigious Columbia Business School, New York, United States and INSEAD Business School, Fontainebleau, France, the IESE Business School in Barcelona, Spain and the Chief Executive Programme (CEP 17) Class of the Lagos Business School.",
      "He was the Pioneer Managing Director/CEO of Truebond Investments & Capital Limited, a Company with diverse interests in Oil & Gas, Telecommunications, Power and the Capital Markets. He has also worked with the firm of Damitop Consulting Limited as Managing Partner where he worked on a number of World Bank projects for the Federal and several State Governments. He served as Executive Director (Investment Banking) of Citizens International Bank (now Enterprise Bank Limited) until his appointment as the pioneer Chief Executive Officer of PanAfrican Capital Holdings Limited."
    ],
    image: "/images/leader-2.png"
  },
  {
    name: "Nentok Gomwalk",
    title: "Director",
    bio: [
      "Nentok Gomwalk is the Group Head Finance, Investment and Strategy of Pan African Capital Holdings. He is a graduate of Business Administration from Ahmadu Bello University Zaria, he is also a member of the Association of Certified Chartered Accountants (ACCA) UK a globally recognised body of chartered accountants. ",
      " He has well over 20 years of work experience in different sectors of the Nigerian economy. He started his career as a finance manager in a distribution company, then proceeded to Lister Oil Limited where he served as a member of the finance unit and technical assistant to the Terminal manger on finance. ",
      "He moved to financial services in 2012 as Head of Finance with Eurocomm Securities, then moved to GTI group as Head of Finance and Treasury where he set up the accounting unit for the asset management arm of the group. He resumed at Comercio Partners as the first group CFO, where he set up the accounting unit for the group and all relevant SOPs."
    ],
    image: "/images/leader-1.png"
  },
  {
    name: "Sina Alimi",
    title: "Executive Director",
    bio: [
      "Sina is the Deputy Chief Executive Officer of PanAfrican Capital Holdings, a Proprietary Investment Company with presence in Lagos, Accra, Nairobi and Mauritius. He also serves as a member of the Board of Directors for several companies within the Group. Acquiring a Chartered Accountant status in 1991, his career spans over twenty-five (25) cutting across Deal Structuring, Project Finance, Mergers & Acquisitions, Privatization and Asset Management.",
      "Having worked with Diamond Bank Limited where he started his banking career in Audit and Banking Operations, Sina later joined the Investment Banking Division of Fountain Trust Bank Plc in 1997 and subsequently served as Group Head, Corporate Finance and Head, Investment Banking Group. While in Corporate Finance, Sina was actively involved in high profile projects and advisory mandates in the private sector as well as the privatization Programme of the Federal Government of Nigeria.",
      "The alumnus of Lagos Business School (LBS) and IESE Business School Barcelona Spain is also a graduate of accounting from the prestigious University of Lagos, where he graduated as one of the best in his class. Sina is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and Chartered Institute of Taxation of Nigeria (CITN)."
    ],
    image: "/images/leader-3.png"
  },
  {
    name: "Eric Okoruwa",
    title: "Executive Director",
    bio: [
      "Eric Okoruwa is the Group Executive Director of PanAfrican Capital Holdings with over 20 years’ experience in investment banking and financial advisory. Eric has been involved in various high-profile transactions, raising over $5 billion and N300 billion from both foreign and local financial institution and capital markets across diverse sectors. While at Fountain Trust bank Plc, he worked on a number of high-profile private sector advisory transactions as well as the Federal Government privatization program of the Federal Government of Nigeria. He holds a Bachelor of Science Degree in Business Administration from the University of Lagos and a Master’s degree in Marketing from the University of Lagos. He has attended severalExecutive courses, Advanced Manager’sProgramme (AMP) from the Lagos Business School, “Leading Organizational Change” – Whatrton University of Pennsylvania and the Lagos Business School Global Chief Executive Officer (GCEO) programme for Africa in conjunction with Strathmore University Business School and IESE Business School Navarra, New York. He also attended various international and local courses on company Valuation and Issues Pricing, Factoring, Mergers & Acquisitions, Bonds & Derivatives, Asset Backed Securities, Structured Finance and International Trade Finance."
    ],
    image: "/images/leader-4.png"
  },
  {
    name: "Ifeanyi John",
    title: "Managing Director/CEO",
    bio: [
      "Ifeanyi is an astute share registration professional with over 13 years’ work experience in capital market transactions, business development, innovation & strategy, client relationship management and business transformation.",
      "He is a member of the Institute of Capital Market Registrars (ICMR) and Chartered Institute of Loans and Risk Management (FMCILRM).",
      "Ifeanyi is currently the Managing Director/CEO of PAC Registrars Limited, he held strategic positions in Africa Prudential Plc.",
      "He holds an HND Quantity Surveying and a master’s degree in Marketing."
    ],
    image: "/images/leader-5.png"
  }
];



function Leadership() {
  const [open, setOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<IBio>({
    name: "",
    title: "",
    bio: [],
    image: ""
  });

  const handleOpen = (leader:IBio) => {
    setSelectedLeader(leader);
    setOpen(!open);
  };

  return (
    <>
      <Banner page="Leadership" link="/" img="/images/leader-banner.png" />
      <section className="bg-[#F1F1F1] grid grid-cols-[repeat(auto-fill,_minmax(22.5rem,_1fr))] gap-11 md:py-32 py-10">
        {LeaderBio.map((leader, index) => (
          <div key={index} className="relative about-shadow flex justify-center bg-white">
            <img
              src={leader.image}
              alt={leader.name}
              className="h-[380px] w-[310px] 2xl:h-[510px] 2xl:w-[450px] mix-blend-luminosity"
            />
            <div className="bg-bluePrimary absolute bottom-0 px-12 py-7 text-white rounded-t-[10px] flex items-end justify-between w-full">
              <div>
                <h6 className="text-lg font-semibold ">{leader.name}</h6>
                <p className="font-normal text-base mt-2">{leader.title}</p>
              </div>
              <p
                onClick={() => handleOpen(leader)}
                className="flex cursor-pointer items-center gap-2 text-base font-semibold text-nowrap text-white"
              >
                Learn More{" "}
                <span>
                  <IoMdArrowForward />
                </span>
              </p>
            </div>
          </div>
        ))}
      </section>
      <LeadershipModal
        handleOpen={handleOpen}
        open={open}
        img={selectedLeader?.image || ""}
        leaderBio={selectedLeader?.bio || []}
      />
    </>
  );
}

export default Leadership;
