import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../Molecules/Banner";
import GalleryNavbar from "../../Molecules/GalleryNavbar";
import GalleryItem from "../../Molecules/GalleryItem";
import "./styles.css";
import data from "../../Utils/data.json"
import { useState } from "react";
import SubmitForm from "../../Organisms/SubmitForm";

function Gallery() {

  const [currentItem,setCurrentItem] = useState(0)

  return (
    <div>
      <Banner title1={data.banner.gallery.title1} title2={data.banner.gallery.title2}  />
      <GalleryNavbar currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <Container>
        <Row className="galleryItems">
          {
            data.gallery[currentItem].map((item:any) => {
                return (
                  <Col lg={4}>
                  <GalleryItem title={item.title} text1={item.text1} text2={item.text2} imageUrl={item.imageUrl} id={item.id} />
                </Col>
                )
            })
          }
        </Row>
      </Container>
      <SubmitForm />
    </div>
  );
}

export default Gallery;
