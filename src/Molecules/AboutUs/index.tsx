import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import data from '../../Utils/data.json'
function AboutUs() {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col lg={5}>
            <img
              src={data.about.imageUrl}
              alt=".."
              className="aboutImage"
              width={'100%'}
            />
          </Col>
          <Col lg={7}>
            <Row className="aboutTitle">
            <Col lg={1}></Col>
              <Col>
                <Row>
                  <p className="about1">{data.about.title}</p>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg={1}></Col>
              <Col className="aboutDescription1" lg={7}>
                <p>
                  {data.about.description1}{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={1}></Col>
              <Col className="aboutDescription2" lg={7}>
                <p>
                  {data.about.description2}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
