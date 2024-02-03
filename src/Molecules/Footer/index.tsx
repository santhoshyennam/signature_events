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
                <Col lg={"auto"} className="title" style={{ cursor: 'pointer'}}>
                  <Link to={"/"+step.toLowerCase()} style={{textDecoration:'none',color:'inherit'}} >
                <p style={{ paddingTop: "24px" }}>{step}</p>
                </Link>
              </Col>
              )
            })
          }
          <Col lg={{ span: 4, offset: 4 }}>
            <Row>
              <Col>
                <p>Follow us on:</p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg={12} md={12} sm={12}>
                <Link to={data.contactDetails.mailto}>
                <img src="Images/mail.png" alt=".." />
                </Link>
                <Link to={data.contactDetails.instagram}>
                <img src="Images/instagram.png" alt=".." style={{ marginLeft: "40px" }} />
                  </Link>
                  
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="hr"></div>
        <Row>
          <Col lg={2}>
            <p> Terms & Conditions </p>
          </Col>
          <Col lg={1}>
            <div className="vr"></div>
          </Col>
          <Col lg={2}>
            <p>Privacy Policy</p>
          </Col>
          <Col lg={7}>
            © SignatureEvents 2023. All right reserved
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
