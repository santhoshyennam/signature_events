import { Col, Container, Row } from "react-bootstrap";
import './styles.css'
import GalleryItem from "../../Molecules/GalleryItem";
import data from "../../Utils/data.json"
import { Link } from "react-router-dom";

function GallerySuggestions(props:any) {
    return (
      <div className="gallerySuggestions">
        <Container>
            <Row >
                <Col lg={10} md={9} sm={8}>
                    <p className="gallerySuggestionsTitle">{ props.title || 'You can also look at'}</p>
                </Col>
                { !props.showAll && <Col lg={2} md={3} sm={4} style={{display:'flex',alignContent:'end'}}>
                    <p className="gallerySuggestionsButton">Previous</p>
                    <p className="gallerySuggestionsButton" style={{marginLeft:'10px'}}> Next</p>
                </Col>
                }
                {
                  props.showAll && 
                  
                  <Col lg={2} md={3} sm={4} style={{display:'flex',alignContent:'end',cursor:'pointer'}}>
                    <Link to="/gallery" style={{textDecoration:'none'}}>
                    <p className="gallerySuggestionsButton" style={{color:'#952043'}}>View All</p>
                    </Link>
                  </Col>
                }
            </Row>
            <Row>
            {
            data.gallery[0].map((item:any) => {
                return (
                  <Col lg={4}>
                  <GalleryItem title={item.title} text1={item.text1} text2={item.text2} imageUrl={item.imageUrl} id={item.id} />
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
  