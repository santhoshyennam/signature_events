import { Col, Container, Row } from "react-bootstrap";
import Leaf from "../../Atoms/Leaf";
import "./styles.css";
import Title from "../../Atoms/Title";
import Star from "../../Atoms/Star";
import data from '../../Utils/data.json'

function HomeImage() {
  return (
    <div className="backgroundImage">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={2}></Col>
          <Col lg={8}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ marginRight: '8px' }}><Leaf color="white" /></div>
    <Title color="white" />
  </div>
</Col>

          <Col lg={2}>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="owner">{data.homeImage.owner}</p>
          </Col>
        </Row>
        {/* <Row>
        <Star />
        </Row> */}
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <p className="content">
              {data.homeImage.description}
            </p>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeImage;
