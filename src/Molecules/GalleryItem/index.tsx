import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import Arrow from "../../Atoms/Arrow";
import React from "react";
import { Link } from "react-router-dom";


interface GalleryItemProps {
  id: string;
  imageUrl: string;
  title:string;
  text1: string;
  text2: string;
}

const GalleryItem:React.FC<GalleryItemProps> = ({
  id,imageUrl,title,text1,text2
}) => {
  return (
    <div className="galleryItem" key={id}>
      <Container>
        <Col>
          <Row>
            <img
              src={imageUrl}
              alt="..."
              className="galleryItemImage"
            />
          </Row>
          <Row className="galleryItemRow">
            <Col lg={4} sm={2} md={2} xs={5}>
              <p className="galleryItemTitle">{title}</p>
            </Col>
          </Row>
          <Row className="galleryItemRow">
            <Col lg={10} sm={10} md={10} xs={10} className="galleryItemContent">
              <p className="galleryItemText1">{text1}</p>
            </Col>
            <Col lg={2} sm={2} md={2} xs={2} style={{marginTop:'4px'}}>
              <Link to={"/galleryImages/"+id}>
              <Arrow color={"#952043"} />
              </Link>
            </Col>
          </Row>
          <Row className="galleryItemRow">
            <Col className="galleryItemContent">
              <p className="galleryItemText2">{text2}</p>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default GalleryItem;
