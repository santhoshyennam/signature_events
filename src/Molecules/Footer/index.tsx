import { Col, Container, Row } from "react-bootstrap";
import Leaf from "../../Atoms/Leaf";
import Title from "../../Atoms/Title";
import "./styles.css";
import { Link } from "react-router-dom";
import data from "../../Utils/data.json"

function Footer() {
  const steps = ["Services","Testimonials","Gallery","About"]

  return (
    <div className="footer">
      <Container>
        <Row className="row">
          <Col lg={2}>
            <Leaf color="#952043" width="21" height="39" />
            <Title color="#952043" width="149" height="65" />
          </Col>
        </Row>
        <Row>
          {
            steps.map((step)=> {
              return (
                <Col lg={1} md={2} sm={2} xs={3} className="title" style={{ cursor: 'pointer'}}>
                  <Link to={"/"+step.toLowerCase()} style={{textDecoration:'none',color:'inherit'}} >
                <p style={{ paddingTop: "10px" }}>{step}</p>
                </Link>
              </Col>
              )
            })
          }
          {/* <Col lg={{ span: 4, offset: 4 }}>
            <Row>
              <Col>
                <p>Follow us on:</p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={12} md={12} sm={12}>
                <Link to={data.contactDetails.mailto}>
                <img src="/Images/mail.png" alt=".." />
                </Link>
                <Link to={data.contactDetails.instagram}>
                <img src="/Images/instagram.png" alt=".." className="instaIcon" />
                  </Link>
                  
              </Col>
            </Row>
          </Col> */}
        </Row>
        <div className="hr"></div>
        <Row>
        <Col lg={6} xs={12}>
          <div style={{display:'flex'}}>
          <p> Terms & Conditions </p>
          <div className="vr" style={{marginLeft:'10px',marginTop:'5px'}}></div>
          <p style={{marginLeft:'10px'}}>Privacy Policy</p>
          </div>
          </Col>
          <Col lg={6} xs={12}  className="d-flex justify-content-end">
            © SignatureEvents 2023. All right reserved
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
