import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import data from "../../Utils/data.json";
import GetAQuote from "../GetAQuote";

function HomeLayout1() {
  return (
    <div className="homeLayout">
      <Container>
        <Row>
          <Col lg={5}>
            <img
              src="Images/consultation.png"
              alt=".."
              className="homeLayoutImage"
              
            />
          </Col>
          <Col lg={7} className="homeLayoutBody">
            <Row className="homeLayoutTitle">
              <Col>
                <Row>
                  <p className="homeLayout1">{data.homeLayout.title[0]}</p>
                </Row>
                <Row>
                  <p className="homeLayout1">
                    {data.homeLayout.title[1]}{" "}
                    <span>{data.homeLayout.title[2]}</span>{" "}
                  </p>
                </Row>
                <Row>
                  <p className="homeLayout1"> {data.homeLayout.title[3]} </p>
                </Row>
                <Row>
                  <p className="homeLayout1"> {data.homeLayout.title[4]} </p>
                </Row>
              </Col>
            </Row>
            <Row className="homeLayoutTitle">
              <Col className="homeLayoutDescription1" lg={12}>
                <p className="homeLayoutText">{data.homeLayout.description1}</p>
              </Col>
            </Row>
            <Row className="homeLayoutTitle">
              <Col className="homeLayoutDescription2" lg={8}>
                <p className="homeLayoutText">{data.homeLayout.description2}</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="homeLayoutHr"></div>
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={4} sm={6}>
                <div className="homeLayoutQuoteButton" style={{cursor:'pointer'}}>
                  <GetAQuote/>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeLayout1;
