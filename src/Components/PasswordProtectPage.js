import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { Row, Col, Button, Form, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PasswordProtectPage({ password, setStep, step }) {
  const [passwordCheck, setPasswordCheck] = useState();
  const submitButton = () => {
    if (passwordCheck === password) {
      setStep(1);
    } else {
      alert("wrong password");
    }
  };
  return (
    <div id="frosted-glass" className="special-fix">
      <hr />
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridfName">
            <Form.Label id="form-info">
              Please fill out our RSVP on our Wedding RSVP or fill out the
              Google Doc below
            </Form.Label>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQQ5-R9VITU4aFN1AMf0y8hbXGm3iUNdYr3M-fnxclEcrOqg/viewform?usp=sf_link">
              {" "}
              Google Docs RSVP
            </a>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default PasswordProtectPage;
