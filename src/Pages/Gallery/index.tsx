import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../Molecules/Banner";
import GalleryItem from "../../Molecules/GalleryItem";
import "./styles.css";
import data from "../../Utils/data.json"
import SubmitForm from "../../Organisms/SubmitForm";

function Gallery() {
 
  return (
    <div>
      <Banner title1={data.banner.gallery.title1} title2={data.banner.gallery.title2}  />
      <Container style={{ marginTop: '30px',marginBottom:'40px'}}>
        <Row className="galleryItems">
          {
            data.galleryItems.map((item:any) => {
                return (
                  <Col lg={4}>
                  <GalleryItem title={item.title} folder={item.folder} id={item.id} />
                </Col>
                )
            })
          }
        </Row>
      </Container>
      {/* <SubmitForm /> */}
    </div>
  );
}

export default Gallery;
