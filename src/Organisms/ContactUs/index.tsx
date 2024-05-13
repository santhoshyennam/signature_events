import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import { Link } from "react-router-dom";
import data from "../../Utils/data.json";
import { useState } from "react";
import AlertView from "../../Atoms/AlertView";

interface FormValues {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

function ContactUs() {
  const initialState: FormValues = {
    name: "",
    email: "",
    service: "wedding",
    budget: "2000$-5000$",
    message: "",
  };

  const [values, setValues] = useState<FormValues>(initialState);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");

  const submitCallback = async () => {
    try {
      setLoading(true);
      setSuccess("");
      if (!values.name.trim()) {
        throw new Error("Name is required");
      }
      if (!values.email.trim()) {
        throw new Error("Email is required");
      }
      if (!values.service.trim()) {
        throw new Error("Service is required");
      }
      if (!values.budget.trim()) {
        throw new Error("Budget is required");
      }
      if (!values.message.trim()) {
        throw new Error("Message is required");
      }
      setError("");

      const response = await fetch("http://localhost:3200/contactDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setValues(initialState);
      setSuccess("Details are submitted successfully");
    } catch (error: any) {
      setError(`An error occurred during form submission: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col lg={9}>
            <div className="contactLeftView">
              <Row>
                <p className="letsTalk">{data.contactDetails.title}</p>
              </Row>
              <Row lg={7}>
                <p className="contactContent1">
                  {data.contactDetails.description}
                </p>
              </Row>

              <Row>
                <Col xs={12}>
                  <p className="emailHeading">Email</p>
                  <p className="emailDescription">
                    {data.contactDetails.email}
                  </p>
                </Col>
              </Row>

              <Row>
                <p className="socialHeading">Social</p>
              </Row>
              <Row>
                <Link
                  to={data.contactDetails.instagram}
                  className="socialMediaLink"
                >
                  Instagram
                </Link>
              </Row>
              <Row>
                <Link
                  to={data.contactDetails.twitter}
                  className="socialMediaLink"
                >
                  Twitter
                </Link>
              </Row>
              <Row>
                <Link
                  to={data.contactDetails.facebook}
                  className="socialMediaLink"
                >
                  Faceboook
                </Link>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="contactRightView">
              {/* <Row>
                <p className="inputTitle">Name</p>
              </Row>
              <Row lg={7}>
                <input className="inputBox" type="text" value={values.name} name="name"
                  onChange={(e) => setValues({ ...values, name: e.target.value })} />
              </Row>
              <Row>
                <p className="inputTitle"> Email </p>
              </Row>
              <Row lg={7}>
                <input className="inputBox" type="text" value={values.email} name="email"
                  onChange={(e) => setValues({ ...values, email: e.target.value })} />
              </Row>
              <Row>
                <p className="inputTitle">
                  What service are you interested in{" "}
                </p>
              </Row>
              <Row lg={7}>
                <select className="inputBox" name="service">
                  <option>wedding</option>
                  <option>decoration</option>
                  <option>photography</option>
                  <option>dinner party</option>
                  <option>entertainment</option>
                  <option>birthdays</option>
                </select>
              </Row>
              <Row>
                <p className="inputTitle"> Budget</p>
              </Row>
              <Row lg={7}>
                <select className="inputBox" name="budget">
                  <option>2000$-5000$</option>
                  <option>6000$-10000$</option>
                  <option>11000$-15000$</option>
                  <option>16000$-above</option>

                </select>
              </Row>
              <Row>
                <p className="inputTitle"> Message</p>
              </Row>
              <Row lg={7}>
                <input type="text" className="messageBox" name="message"   value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })} />
              </Row>
              <Row>
                <Col lg={8} className="mx-auto">
                  <button type="submit" className="contactSubmitButton" disabled={loading} onClick={submitCallback}>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
                </Col>
              </Row>
              { error !== '' && <Row style={{ marginTop: '10px'}}>
              <Col lg={12}>
             <AlertView setShow={setError} title="You got an error!" description={error} variant="danger" />
              </Col>
              </Row>}
             { success !== '' && <Row style={{ marginTop: '10px'}}>
              <Col lg={12}>
             <AlertView setShow={setSuccess} title="Congrats!" description={success} variant="success" />
              </Col>
              </Row>} */}
              {/* <img src="images/saree function/11.jpg" alt="" width={'100%'} height={'500px'} /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
