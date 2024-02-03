import { Col, Container, Row } from "react-bootstrap";

interface StarProps {
  color?: string;
}

const Star: React.FC<StarProps> = ({ color = "white" }) => {
  return (
    <Container>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2"
            viewBox="0 0 281 2"
            fill="none"
          >
            <path
              d="M0.5 1H281"
              stroke="url(#paint0_linear_18_87)"
              stroke-width="1.5"
            />
            <defs>
              <linearGradient
                id="paint0_linear_18_87"
                x1="278"
                y1="0.500506"
                x2="-3"
                y2="0.499645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color={color} />
                <stop offset="1" stop-color={color} stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          </div>
          <div style={{marginRight:'14px',marginLeft:'14px'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 0L10.489 5.51098L16 8L10.489 10.489L8 16L5.51098 10.489L0 8L5.51098 5.51098L8 0Z"
              fill={color}
            />
          </svg>
          </div>
          <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="281"
            height="2"
            viewBox="0 0 281 2"
            fill="none"
          >
            <path
              d="M280.5 1L0 1.00002"
              stroke="url(#paint0_linear_18_89)"
              stroke-width="1.5"
            />
            <defs>
              <linearGradient
                id="paint0_linear_18_89"
                x1="3"
                y1="1.49952"
                x2="284"
                y2="1.50035"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color={color} />
                <stop offset="1" stop-color={color} stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Star;
