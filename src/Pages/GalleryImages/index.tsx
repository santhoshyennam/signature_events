import { Col, Container, Row } from 'react-bootstrap';
import './styles.css'
import SubmitForm from '../../Organisms/SubmitForm';
import BackArrow from '../../Atoms/BackArrow';
import GallerySuggestions from '../../Organisms/GallerySuggestions';
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import data from "../../Utils/data.json"

type GalleryImages = {
  [key: string]: string[];
};

function GalleryImages() {

  const { id } = useParams();
  const prevMyPathParam = useRef(id);
  const index: string = id || "birthday"
  const navigate = useNavigate();
  const [imagesArray,setImagesArray] = useState<String[]>([]);
  const goBack = () => {
    navigate(-1);
  };

  useEffect(()=>{
    setImagesArray( (data.galleryImages as GalleryImages)[index])
  },[index])

  useEffect(() => {
    // Check if myPathParam has changed
    if (id !== prevMyPathParam.current) {
      // Reload the page when myPathParam changes
      window.location.reload();
    }

    // Update the previous value
    prevMyPathParam.current = id;
  }, [id]);

    return (
      <div>
      <Container className='galleryImagesContainer'>
        <Row>
          <Col lg={6} className='galleryImagesHeading'>
            <div className='backArrow' onClick={goBack} style={{cursor:'pointer'}}><BackArrow color='#952043'/></div>
            <p className='galleryImagesText'>{index.toUpperCase()}</p>
          </Col>
        </Row>
        <Row className='galleryItems'>
        {
          imagesArray.map((item)=> {
            return (
              <Col lg={4} sm={4} md={4} xs={6}>
              <img src={"/images/"+index+"/"+item} alt="..."  className="galleryItemImage"/>
              </Col>
            )
          })
        }
        </Row>
      </Container>
      <div className="galleryImagesHr"></div>
      <GallerySuggestions/>
      <SubmitForm />
      </div>
    );
  }
  
  export default GalleryImages;