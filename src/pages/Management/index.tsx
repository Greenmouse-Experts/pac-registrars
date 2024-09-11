import { useState } from "react";
import Banner from "../../components/Banner";
import { IoMdArrowForward } from "react-icons/io";
import { LeadershipModal } from "../../components/modals/LeadershipModal";

interface IBio {
  name: string;
  title: string;
  bio: string[];
  image: string;
}

const ManagementBio: IBio[] = [
  {
    name: "Ifeanyi John",
    title: "Managing Director/CEO",
    bio: [
      "Ifeanyi is an astute share registration professional with over 15 years’ work experience in capital market transactions, business development, innovation & strategy, client relationship management and business transformation. Prior to joining PAC Registrars and Investor Services, he worked with Africa Prudential Plc, where he served in various capacities including Head, Business Development. While in Africa Prudential Plc, he was part of the team that championed disruptive innovation in the registrar’s business in Nigeria pioneering many e-products.",
      "He is an Associate of the Institute of Capital Market Registrars (ICMR) and Chartered Institute of Loans and Risk Management (CILRM). He holds degree in Quantity Surveying and an MBA.",
    ],
    image: "/images/leader-5.png",
  },
  {
    name: "Dennis Ogbu",
    title: "Head, Business Development",
    bio: [
      "Dennis Ogbu holds a Bsc. Degree in Accounting from Abia State University and an MBA in Financial Management from the University of Calabar. He is an Associate of the Chartered institute of Economists (ACE).",
      "He is a multi-talented Accountant with over two decade significant experience in Business development and Administration, Corporate Finance, sale/Client Relationship Management, Accounting and Risk Management. He worked at Strategy Energy Limited for 7 years before he joined PanAfrican Capital Holdings in 2007 and has worked in different Business Units with the Group. His records over the years show strong competence in deal origination, Business development, negotiation, implementation and Financing.",
    ],
    image: "/images/leader-6.png",
  },
  {
    name: "Amadi Clifford",
    title: "System Administrator",
    bio: [
      "Amadi Clifford holds B.Sc. in Business Administration from Lagos State University, Higher National Diploma in Computer Science from the Polytechnic Ibadan and MBA in Business Management from International Management Institute, Berlin – Germany.",
      "He is a certified Information Technology Infrastructure Library (ITIL) and Data Capture, Data-Based Administrator (DCDM). He is a Member of the Institute of Capital Market Registrars as an Associate Member. He has over 15 years’ experience in System Administration, which cuts across Network/System Support, Software Development, IT Leadership, and Digital Automation Transformation Implementation, hardware Management, Server Programming & Maintenance, Data Base Management and Networking and Website Building.",

      "He has brought his wealth of knowledge and expertise to drive PAC Registrars and Investor Services Limited Continuous requisite for innovation and is responsible for overseeing the technology architecture framework to achieve the objective of accelerating a digital environment to improve productivity and amplified customer experience.",
    ],
    image: "/images/leader-7.png",
  },
  {
    name: "Aderonke Omotade",
    title: "Head, Operations & Compliance",
    bio: [
      "Aderonke is a seasoned professional with over 14 years’ experience in Customer Operations, Finance, Compliance, Internal control and Risk Management, Internal Audit & Assurance.",
      "Aderonke holds her first degree in Business Administration from University of Lagos. She is an Associate of Institute of Chartered Accountants of Nigeria, a Certified Lead Auditor in Information Security Management System. She is currently the Head, Operations and Compliance and prior to her joining PAC Registrars and Investor Services, she worked with Africa Prudential Plc.",
    ],
    image: "/images/leader-8.png",
  },
  // {
  //   name: "Moses Ojo",
  //   title: "Chief Economist/Head, Investment Research",
  //   bio: [
  //     "Moses is a professional in the financial services industry with about sixteen years post qualification experience that spans through investment research (macroeconomic, equity, fixed income and sectoral research), portfolio and fund management, securities dealings and financial advisory services.",
  //     "He has worked for First Trustees Nigeria Ltd, now a part of FBNQuest Ltd (a member of FBN Holdings Ltd), FutureView Financial Services Ltd and Dunn Loren Merrifield. Moses has a degree in accounting from Lagos State University, he is a fellow of both the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Stockbrokers (CIS), an associate of both the Chartered Institute of Taxation of Nigeria (CITN) and the Association of Certified Chartered Accountants (ACCA), London.",

  //     "He has attended courses on investment banking both at home and abroad. Moses is the Chief Economist/Head, Investment Research of PanAfrican Capital Holdings Ltd.",
  //   ],
  //   image: "/images/leader-9.png",
  // },
  {
    name: "Babatunde Oyeniyi",
    title: "Head Business Solutions",
    bio: [
      "Babatunde Oyeniyi is an investment banker with 2 decades of experience within the capital market. His experience cuts across finance, capital raising, relationship management, business development, product management and business solutions.",
      "He holds an HND from the Yaba College of Technology and an MBA from Ladoke Akintola University of Technology.",
      "He is also a member of the Nigerian Institute of Management (NIM), Institute of Chartered Secretaries and Administrators of Nigeria (ICSAN), The Institute of Chartered Accountant of Nigeria (ICAN) and an Associate member of the Institute of Capital Market Registrars (ICMR).",
      "He has a lot of professional qualifications and certifications within these areas of expertise. Babatunde is currently the Divisional Head, Business Solution at PAC Registrars and Investor Services Limited.",
    ],
    image: "/images/leader-10.png",
  },
 
];

function Management() {
  const [open, setOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<IBio>({
    name: "",
    title: "",
    bio: [],
    image: "",
  });

  const handleOpen = (leader: IBio) => {
    setSelectedLeader(leader);
    setOpen(!open);
  };

  return (
    <>
      <Banner page="Management" link="/" img="/images/management-banner.png" />
      <section className="bg-[#F1F1F1] grid grid-cols-[repeat(auto-fill,_minmax(22.5rem,_1fr))] gap-11 md:py-32 py-10">
        {ManagementBio.map((leader, index) => (
          <div
            key={index}
            className="relative about-shadow flex h-[400px] w-full 2xl:h-[510px]   justify-center bg-white"
          >
            <img
              src={leader.image}
              alt={leader.name}
              className=" w-full  object-cover"
            />
            <div className="bg-bluePrimary absolute bottom-0 2xl:px-12 px-7 2xl:py-7 py-5 text-white rounded-t-[10px] flex items-end justify-between w-full">
              <div>
                <h6 className="text-lg font-semibold ">{leader.name}</h6>
                <p className="font-normal text-base mt-2 text-start">
                  {leader.title}
                </p>
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

export default Management;

