import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  list: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,description,imageUrl,list
})=> {
  return (
    <div className="serviceCard">
      <Container>
        <Row>
            <img
              src={imageUrl}
              alt=".."
              className="serviceCardImage"
              width={'100%'}
              height={'260px'}
              style={{ objectFit:'cover'}}
            />
          </Row>
          <Row>
          <Col>
                <p className="serviceCard1">{title}</p>
              </Col>
          </Row>
          <Row>
          <Col className="serviceCardDescription1" lg={12}>
                <p>
                  {description}{" "}
                </p>
              </Col>
          </Row>
          <Col lg={7} className="serviceCardBody">
            <Row lg={7} className="list-items">
              {
                list.map((item:any)=> {
                  return (
                    <Col className="list-item">
                    <div className="dot"></div>
                    <p className="list-item-content">{item}</p>
                  </Col>
                  )
                })
              }
            </Row>
          </Col>
      </Container>
    </div>
  );
}

export default ServiceCard;
