import { Col, Container, Row } from "react-bootstrap";
import EventStep from "../../Molecules/EventsStep";
import "./styles.css";
import EventDescription from "../../Molecules/EventDescription";
import { useState } from "react";
import data from "../../Utils/data.json"

function EventsBody() {
  const [currentStep,setCurrentStep] = useState(0)

  const getSteps = data.homeEvents.steps.map((value,key) => (
              <Col lg={4} sm={4}>
              <EventStep stepNumber={key+1} title1={value.title1} title2={value.title2} currentStep={currentStep} setCurrentStep={setCurrentStep} />
            </Col>
  ));

  return (
    <div className="eventBody">
      <Container>
        <Row>
          {getSteps}
        </Row>
        <Row>
          <EventDescription imageUrl={data.homeEvents.steps[currentStep].imageUrl} description={data.homeEvents.steps[currentStep].description}   />
        </Row>
      </Container>
    </div>
  );
}

export default EventsBody;
