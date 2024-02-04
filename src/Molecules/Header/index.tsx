import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Leaf from "../../Atoms/Leaf";
import Title from "../../Atoms/Title";
import { Link } from "react-router-dom";
import { useState } from "react";
import GetAQuote from "../GetAQuote";
import "./styles.css";

function Header() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const steps = ["SERVICES", "TESTIMONIALS", "GALLERY", "ABOUT"];
  const mobileViewSteps = ["HOME","SERVICES", "TESTIMONIALS", "GALLERY", "ABOUT"];

  const handleNavClick = () => {
    setNavbarExpanded(false);
    setCurrentStep(-1);
  };

  return (
    <div className="headerContainer">
      <Container className="webview">
        <Row className="HeaderRow">
          <Col lg={4} sm={0}></Col>
          <Navbar expand="sm" expanded={navbarExpanded}>
            <Container>
              <Navbar.Brand>
                <Col
                  lg={2}
                  sm={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "start",
                  }}
                  onClick={() => {
                    setNavbarExpanded(false);
                    setCurrentStep(-1);
                  }}
                >
                  <Link
                    to="/home"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Leaf
                      color="#952043"
                      width="21"
                      height="39"
                    />
                    <Title
                      color="#952043"
                      width="149"
                      height="65"
                    />
                  </Link>
                </Col>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={() => setNavbarExpanded(!navbarExpanded)}
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-end">
                  {steps.map((step, index) => (
                    <Nav.Link key={index}>
                      <Col
                        lg={"auto"}
                        sm={"auto"}
                        className="title"
                        onClick={() => {
                          handleNavClick();
                          setCurrentStep(index);
                        }}
                      >
                        <Link
                          to={"/" + step.toLowerCase()}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <p
                            style={{
                              paddingTop: "24px",
                              cursor: "pointer",
                              borderBottom:
                                currentStep === index ? "1px solid #952043" : "",
                              color: "var(--MAROON, #952043)",
                            }}
                          >
                            {step}
                          </p>
                        </Link>
                      </Col>
                    </Nav.Link>
                  ))}
                  <Nav.Link>
                    <GetAQuote
                      styles={{
                        marginTop: "14px",
                        borderRadius: "32px",
                        paddingTop: "10px",
                        cursor: "pointer",
                        color: "var(--MAROON, #952043)",
                  
                      }}
                    />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
      </Container>
      <div className="mobileview">
      {mobileViewSteps.map((step, index) => (
                      <Col
                        lg={"auto"}
                        sm={"auto"}
                        xs={'auto'}
                        className="title"
                        key={index}
                        onClick={() => {
                          handleNavClick();
                          setCurrentStep(index);
                        }}
                      >
                        <Link
                          to={"/" + step.toLowerCase()}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <p
                            style={{
                              paddingTop: "24px",
                              cursor: "pointer",
                              borderBottom:
                                currentStep === index ? "1px solid #952043" : "",
                              color: "var(--MAROON, #952043)",
                              fontSize: '14px'
                            }}
                          >
                            {step}
                          </p>
                        </Link>
                      </Col>
                  ))}
      </div>
    </div>
  );
}

export default Header;
