import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import HomeServicesImage from "../../Molecules/HomeServicesImage";
import data from "../../Utils/data.json";

function HomeServices() {
  return (
    <div className="HomeServices">
      <Container>
      <Row>
        <Col>
          <p>{data.homeServices.title1}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="servicesTitle">
          {data.homeServices.title2[0]} <span className="styleService">{data.homeServices.title2[1]} </span> {data.homeServices.title2[2]}
            YOU.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <div className="serviceVr"></div>
          </div>
        </Col>
      </Row>
      <div className="homeServiceImages">
        <Container>
          <Row>
            {
              data.homeServices.imageGrid.map((item)=> {
                return (
                  <Col lg={4} style={{ paddingTop: "8px", paddingBottom: "8px" }}>
                  <HomeServicesImage title={item.title} imageUrl={item.imageUrl} />
                </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
      </Container>
    </div>
  );
}

export default HomeServices;
