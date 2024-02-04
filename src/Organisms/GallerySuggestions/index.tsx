import { Col, Container, Row } from "react-bootstrap";
import './styles.css'
import GalleryItem from "../../Molecules/GalleryItem";
import data from "../../Utils/data.json"
import { Link } from "react-router-dom";
import {shuffleArray} from "../../Utils/common.js"

function GallerySuggestions(props:any) {
    return (
      <div className="gallerySuggestions">
        <Container>
            <Row >
                <Col lg={10} md={9} sm={8} xs={8}>
                    <p className="gallerySuggestionsTitle">{ props.title || 'Suggestions'}</p>
                </Col>
                {/* { !props.showAll && <Col lg={2} md={3} sm={4} style={{display:'flex',alignContent:'end'}}>
                    <p className="gallerySuggestionsButton">Previous</p>
                    <p className="gallerySuggestionsButton" style={{marginLeft:'10px'}}> Next</p>
                </Col>
                } */}
                {
                  props.showAll && 
                  
                  <Col lg={2} md={3} sm={4} xs={4} style={{display:'flex',alignContent:'end',cursor:'pointer'}}>
                    <Link to="/gallery" style={{textDecoration:'none'}}>
                    <p className="gallerySuggestionsButton" style={{color:'#952043'}}>View All</p>
                    </Link>
                  </Col>
                }
            </Row>
            <Row>
            {
            shuffleArray(data.galleryItems).slice(0, 3).map((item:any) => {
                return (
                  <Col lg={4} sm={4} xs={12}>
                  <GalleryItem title={item.title} folder={item.folder} id={item.id} />
                </Col>
                )
            })
            }
            </Row>
        </Container>
        <div className="gallerySuggestionsHr"></div>
      </div>
    );
  }
  
  export default GallerySuggestions;
  