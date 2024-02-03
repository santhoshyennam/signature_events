import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import TestimonialsPeopleCard from "../TestimonialsPeopleCard";
import data from '../../Utils/data.json'

function TestimonialsPeople() {
  return (
    <div className="testimonialsPeople">
      <Container>
        <Row>
          <Col>
            <p className="testimonialsPeopleTitle">
              {data.testimonials.peopleTitle}
            </p>
          </Col>
        </Row>
        <Row>
          {
            data.testimonials.people.map((person)=>{
              return (
                <Col lg={3}>
                <TestimonialsPeopleCard imageUrl={person.imageUrl} title={person.name} description={person.description} />
              </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

export default TestimonialsPeople;
