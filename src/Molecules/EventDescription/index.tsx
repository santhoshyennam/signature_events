import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import data from "../../Utils/data.json";
import React from "react";
import { Link } from "react-router-dom";

interface EventDescriptionProps {
  description: string;
  imageUrl: string;
}

const EventDescription:React.FC<EventDescriptionProps> = ({description,imageUrl}) => {
  return (
    <div className="eventDescription">
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <img
              src={imageUrl}
              alt=".."
              className="eventDescriptionImage"
              width={'80%'}
            />
          </Col>
          <Col lg={6} md={12}>
            <Row>
              <Col>
              <p className="eventDescription1">
                {description}
              </p>
              </Col>
            </Row>
            <Row>
              <Col lg={3} md={3} sm={6}>
                <div className="eventDescriptionContactButton" style={{ cursor:'pointer'}}>
                  <Link to="/about" style={{ textDecoration:'none', color:'white'}}>
                    <p>Contact Us</p>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EventDescription;
