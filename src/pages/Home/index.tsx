import Hero from "../../components/HomeComp/Hero";
import FinancialPlaning from "../../components/HomeComp/FinancialPlaning";
import Hero2 from "../../components/HomeComp/Hero2";
import Services from "../../components/HomeComp/Services";
import Clients from "../../components/HomeComp/Clients";
import Faqs from "../../components/HomeComp/Faqs";

function Home() {
  return (
    <>
      <Hero />
      <Hero2 />
      <FinancialPlaning />
      <Services />
      <Clients />
      <Faqs />
    </>
  );
}

export default Home;
