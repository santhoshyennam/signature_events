import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import EventsBody from "../EventsBody";
import data from "../../Utils/data.json"

function Events() {
  return (
    <div className="events">
      <Container>
      <Row className="event_title">
        <Col>
          <p>{data.homeEvents.title1}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="eventsTitle">
          {/* {data.homeEvents.title2[0]} <span className="styleEvent">{data.homeEvents.title2[1]} </span> {data.homeEvents.title2[2]} */}
          {data.homeEvents.title2[0]} {data.homeEvents.title2[1]} {data.homeEvents.title2[2]}
          </p>
        </Col>
      </Row>
      {/* <div className="eventVr"></div> */}
      <Row>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <div className="eventVr"></div>
          </div>
        </Col>
      </Row>
      <EventsBody />
      </Container>
    </div>
  );
}

export default Events;
