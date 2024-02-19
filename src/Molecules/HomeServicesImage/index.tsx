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
            <p className="homeServicesTitle">{title}</p>
    </div>
  );
}

export default HomeServicesImage;
