import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import React from "react";

interface TestimonialsPeopleCardProps {
  imageUrl: string;
  title: string;
  rating?: string;
  description: string;
}

const TestimonialsPeopleCard: React.FC<TestimonialsPeopleCardProps> = (
  {
    imageUrl,
    title,
    rating="",
    description,
  }
) => {
  return (
    <div className="testimonialsPeopleCard">
      <Container>
        <Row>
          <Col lg={12}>
            <img src={imageUrl} alt="..." />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="personName">{title}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="testimonialsPeopleCardDescription">
              {description}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestimonialsPeopleCard;
