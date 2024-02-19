import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import Arrow from "../../Atoms/Arrow";
import React from "react";
import { Link } from "react-router-dom";


interface GalleryItemProps {
  id: string;
  title:string;
  folder: string;
}

const GalleryItem:React.FC<GalleryItemProps> = ({
  id,title,folder
}) => {
  return (
    <div className="galleryItem" key={id}>
      <Container>
        <Col>
          <Row>
            <img
              src={'/Images/'+folder+'/1.jpg'}
              alt="..."
              className="galleryItemImagexz"
            />
          </Row>
          <Row className="galleryItemRow" style={{marginTop:'16px'}}>
            <Col lg={10} sm={10} md={10} xs={10} className="galleryItemContent">
              <p className="galleryItemText1">{title}</p>
            </Col>
            <Col lg={2} sm={2} md={2} xs={2} style={{marginTop:'4px'}}>
              <Link to={"/galleryImages/"+folder}>
              <Arrow color={"#952043"} />
              </Link>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default GalleryItem;
