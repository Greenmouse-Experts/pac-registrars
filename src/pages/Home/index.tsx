import Hero from "../../components/HomeComp/Hero";
import FinancialPlaning from "../../components/HomeComp/FinancialPlaning";
import Hero2 from "../../components/HomeComp/Hero2";
import Services from "../../components/HomeComp/Services";
import Clients from "../../components/HomeComp/Clients";
import Faqs from "../../components/HomeComp/Faqs";
import WebRegistry from "../../components/HomeComp/WebRegistry";

function Home() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Services />
      <WebRegistry/>
      <FinancialPlaning />
      <Clients />
      <Faqs />
    </>
  );
}

export default Home;
