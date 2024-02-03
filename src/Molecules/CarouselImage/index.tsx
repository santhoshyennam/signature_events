import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import CarouselIcon from "../../Atoms/CarouselIcon";
import React from "react";

interface CarouselImageProps {
  eventName: string;
  title: string;
  description: string;
  imageUrl: string;
} 

const CarouselImage:React.FC<CarouselImageProps> = ({
  eventName,
  title,
  description,
  imageUrl
})=> {
  return (
    <div className="carouselBackgroundImage" style={{backgroundImage:'url('+imageUrl+')'}}>
      <Container>
        <Col lg={5} className="carouselContent">
          <Row>
            <Col lg={1}>
              <CarouselIcon />
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="carouselDescription">
                {description}
              </p>
            </Col>
          </Row>
          <Row className="carouselTextContent">
            <Col lg={10}>
              <p className="carouselText1">{title}</p>
            </Col>
          </Row>
          <Row className="carouselTextContent">
            <Col>
              <p className="carouselText2">{eventName}</p>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default CarouselImage;
