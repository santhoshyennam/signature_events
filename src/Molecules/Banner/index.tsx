import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import React from "react";

interface BannerProps {
  title1: string;
  title2: string;
}

const Banner:React.FC<BannerProps> = ({title1, title2}) => {
  return (
    <div className="backgroundBanner">
      <Container>
        <Row>
          <Col lg={12} sm={12}>
            <p className="bannerText1">{title1}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} sm={12}>
            <p className="bannerText2">{title2}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
