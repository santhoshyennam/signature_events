import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import ServiceCard from "../../Molecules/ServiceCard";
import data from '../../Utils/data.json'

function ServiceContent() {
  return (
    <div className="services">
      <Container>
      <Row>
        <Col>
          <p className="servicesTitle">
            {/* {data.services.title[0]} <span className="styleService">{data.services.title[1]} </span> {data.services.title[2]} */}
            {data.services.title[0]} {data.services.title[1]} {data.services.title[2]}
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
      </Container>
      <Container>
      <Row>
        {
          data.services.services.map((service) =>{
            return (
              <Col lg={4} sm={4} xs={12}>
              <ServiceCard title={service.title} description={service.description} imageUrl={service.imageUrl} list={service.list} />
              </Col>
            )
          })
        }
      </Row>
      </Container>
    </div>
  );
}

export default ServiceContent;
