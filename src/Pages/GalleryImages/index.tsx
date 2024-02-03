import { Col, Container, Row } from 'react-bootstrap';
import './styles.css'
import SubmitForm from '../../Organisms/SubmitForm';
import BackArrow from '../../Atoms/BackArrow';
import GallerySuggestions from '../../Organisms/GallerySuggestions';
import PhotoAlbum from 'react-photo-album';
import ImageAtom from '../../Atoms/Image';
import data from "../../Utils/data.json"
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function GalleryImages() {

  const { id } = useParams();
  const prevMyPathParam = useRef(id);
  const index: number = parseInt(id || "0", 10);
  const content = data.galleryImages[index];
  const images = [   {
    "src": "/Images/decor_13.jpeg",
    "alt": "...",
    "width": 152,
    "height": 203
  }]
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

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
            <p className='galleryImagesText'>{content.text1}</p>
            <p className="galleryImagesTitle">{content.title}</p>
          </Col>
        </Row>
        <Row>
        <Col>
            <p className='galleryImagesLocation'>{content.text2}</p>
          </Col>
        </Row>
        <Row className='photos'>
        <Col>
            <PhotoAlbum
              renderPhoto={({ imageProps: { src, alt, style, ...restImageProps } }) => (
                <ImageAtom src={src} alt={alt} style={style} link={`/${src}`} />
              )}
              photos={content.images || images} // Slice images for the current page
              layout={"masonry"}
            />
            </Col>
        </Row>
      </Container>
      <div className="galleryImagesHr"></div>
      <GallerySuggestions/>
      <SubmitForm />
      </div>
    );
  }
  
  export default GalleryImages;