import { Col, Row } from "react-bootstrap";
import "./styles.css";
import React, { useState } from "react";
import DownArrow from "../../Atoms/DownArrow";

interface EventStepProps {
  title1: string;
  title2: string;
  stepNumber: number;
  currentStep: number;
  setCurrentStep: any;
}

const EventStep:React.FC<EventStepProps> = ({
  title1,
  title2,
  stepNumber,
  currentStep,
  setCurrentStep
}) => {

  const [border,setBorder] = useState("1px solid var(--MAROON, #952043)")
  const [downArrowVisible,setDownArrowVisible] = useState(false)
  React.useEffect(()=>{   
    if(currentStep === stepNumber -1) {
      setBorder("3px solid var(--MAROON, #952043)")
      setDownArrowVisible(true)
    } else {
      setBorder("1px solid var(--MAROON, #952043)")
      setDownArrowVisible(false)
    }
  },[currentStep])
  return (
    <div style={{marginBottom: '24px'}}>
    <div className="eventStep" onClick={()=> {setCurrentStep(stepNumber-1)}} style={{cursor:'pointer',border}}>
      <Row>
        <Col lg={3} sm={12} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="eventNumber">
            <div className="number">{stepNumber}</div>
          </div>
        </Col>
        <Col lg={9} sm={12} md={12}>
          <Row>
            <p className="eventStepTitle1">{title1}</p>
          </Row>
          <Row>
            <p className="eventStepTitle2">{title2}</p>
          </Row>
        </Col>
      </Row>
    </div>
    <Row style={{ marginTop: '-10px'}}>
      <Col>
        { downArrowVisible && <DownArrow/>}
      </Col>
    </Row>
    </div>
  );
}

export default EventStep;
