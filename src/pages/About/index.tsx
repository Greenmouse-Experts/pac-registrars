
import WhoWeAre from "../../components/AboutComp/WhoWeAre";
import Values from "../../components/AboutComp/Values";
import Banner from "../../components/Banner";

function About() {
  return (
    <>
      <Banner page="About Us" link="/" />
      <WhoWeAre />
      <Values />
    </>
  );
}

export default About;
