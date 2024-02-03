import { Container } from "react-bootstrap";
import AboutUs from "../../Molecules/AboutUs";
import Banner from "../../Molecules/Banner";
import ContactUs from "../../Organisms/ContactUs";
import data from "../../Utils/data.json"
import GallerySuggestions from "../../Organisms/GallerySuggestions";
import SubmitForm from "../../Organisms/SubmitForm";
function About() {
  return (
    <div>
      <Banner title1={data.banner.about.title1} title2={data.banner.about.title2} />
      <AboutUs />
      <img src="Images/myNetwork.png" alt=".." width="100%" />
      <ContactUs />
      <Container>
      <div style={{ width: '100%',height: '1px',backgroundColor: '#c59771',marginTop: '80px'}}></div>
      <GallerySuggestions title="Our Gallery" showAll={true} />
      </Container>
      <SubmitForm/>
    </div>
  );
}

export default About;
