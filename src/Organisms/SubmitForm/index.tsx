import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './styles.css';
import AlertView from '../../Atoms/AlertView';

interface FormValues {
  fullName: string;
  mobileNumber: string;
}

const SubmitForm: React.FC = () => {
  const initialState: FormValues = {
    fullName: '',
    mobileNumber: '',
  };

  const [values, setValues] = useState<FormValues>(initialState);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");

  const submitCallback = async () => {
    try {
      setLoading(true);
      setSuccess('')
      if (!values.fullName.trim()) {
        throw new Error('Full Name is required');
      }

      if (!values.mobileNumber.trim()) {
        throw new Error('Mobile Number is required');
      } 
      setError('')

      const response = await fetch('http://localhost:3200/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setSuccess("Details are submitted successfully");
    } catch (error:any) {
      setError(`An error occurred during form submission: ${error.message}`);
    } finally {
      setLoading(false);
      setValues(initialState);
    }
  };

  return (
    <div className="content mb-3">
      <Container>
        <Col className="submitBackgroundImage mx-auto" lg={10} md={10} sm={10}>
          <Row>
            <p className="submitTitle">Plan your next event with us!</p>
          </Row>
          <Row>
            <p className="description">
              Got questions about us? Our team is here to help. Contact us for
              quick and friendly support.
            </p>
          </Row>
          <Row>
            <Col lg={5} md={8} sm={8} className="mx-auto">
              <input
                className="submitInputBox"
                type="text"
                placeholder="Full Name"
                value={values.fullName}
                onChange={(e) => setValues({ ...values, fullName: e.target.value })}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={5} md={8} sm={8} className="mx-auto">
              <input
                className="submitInputBox"
                type="text"
                placeholder="Mobile Number"
                value={values.mobileNumber}
                onChange={(e) => setValues({ ...values, mobileNumber: e.target.value })}
              />
            </Col>
          </Row>
          <Row>
            <Col className="submit">
              <button className="submitButton" onClick={submitCallback} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </Col>
          </Row>
        </Col>
        {error && (
            <Row style={{marginTop:'10px'}}>
              <Col lg={8} className='mx-auto'>
                <AlertView title='Oh snap! You got an error!' description={error} variant='danger' setShow={setError} />
              </Col>
            </Row>
          )}
          {success && (
            <Row style={{marginTop:'10px'}}>
              <Col lg={8} className='mx-auto'>
                <AlertView title='Congrats!' description={success} variant='success' setShow={setSuccess} />
              </Col>
            </Row>
          )}
      </Container>
    </div>
  );
};

export default SubmitForm;
