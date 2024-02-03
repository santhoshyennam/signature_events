import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";

function TestimonialsHeading(props:any) {
  return (
    <div className="testimonials">
      <Container>
        <Row>
          <Col>
            <p className="testimonialsTitle">
              {props.title}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex align-items-center justify-content-center">
              <div className="testimonialVr"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestimonialsHeading;
