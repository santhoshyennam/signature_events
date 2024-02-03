import HomeImage from "../../Molecules/HomeImage";
import HomeLayout1 from "../../Molecules/HomeLayout1";
import Events from "../../Organisms/Events";
import HomeServices from "../../Organisms/HomeServices";
import SubmitForm from "../../Organisms/SubmitForm";
import GallerySuggestions from "../../Organisms/GallerySuggestions";
import { Container } from "react-bootstrap";
import "./styles.css"

function Home() {

  return (
    <div style={{width:'100%',height:'100%'}}>
      <HomeImage />
      <HomeLayout1 />
      <Events />
      <HomeServices />
      <Container>
      <div className="homeHr"></div>
      <GallerySuggestions title="Our Gallery" showAll={true} />
      </Container>
      <SubmitForm />
    </div>
  );
}

export default Home;
