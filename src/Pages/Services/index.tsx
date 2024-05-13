import { Container } from "react-bootstrap";
import Banner from "../../Molecules/Banner";
import ServiceContent from "../../Organisms/ServiceContent";
import SubmitForm from "../../Organisms/SubmitForm";
import data from "../../Utils/data.json"
import GallerySuggestions from "../../Organisms/GallerySuggestions";

function Services() {
  return (
    <div>
      <Banner title1={data.banner.services.title1} title2={data.banner.services.title2} />
      <ServiceContent />
      <Container>
      <div style={{ width: '100%',height: '1px',backgroundColor: '#c59771'}}></div>
      <GallerySuggestions title="Our Gallery" showAll={true} />
      </Container>
      {/* <SubmitForm /> */}
    </div>
  );
}

export default Services;
