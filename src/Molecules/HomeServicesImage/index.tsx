import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import Arrow from "../../Atoms/Arrow";

interface HomeServiceImageProps {
  imageUrl: string;
  title: string;
}


const HomeServicesImage: React.FC<HomeServiceImageProps> = ({
  imageUrl,
  title
}) => {
  return (
    <div className="homeServicesBackgroundImage" style={{backgroundImage:'url('+imageUrl+')'}}>
      <Container className="d-flex align-items-end">
        <Row>
          <Col>
            <p className="homeServicesTitle">{title}</p>
          </Col>
          <Col>
            <div className="arrowIcon">
              <Arrow />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeServicesImage;
