import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import React from "react";


interface GalleryNavbarProps {
  currentItem: number;
  setCurrentItem:any;
}


const GalleryNavbar:React.FC<GalleryNavbarProps> =({
  currentItem,setCurrentItem
}) => {
  const steps = ["ALL","WEDDINGS","BIRTHDAYS","CORPORATE","DESTINATION","NON PROFIT"]

  return (
    <div className="galleryNavbar">
      <Container>
        <Row>
          {
            steps.map((step,index)=> {
              return (
                <Col style={{cursor:'pointer'}} className= { currentItem === index ? "gallerynavbarCol": ""} onClick={()=>{setCurrentItem(index)}} > {/* className="gallerynavbarCol" */}
                    {/* onClick={()=> setCurrentStep(step)} */}
                <p className="galleryListItem">{step}</p> 
                {/* galleyListItemSelected */}
              </Col>
              )
            })
          }
        </Row>
        <div className="galleryNavbarHr"></div>
      </Container>
    </div>
  );
}

export default GalleryNavbar;
