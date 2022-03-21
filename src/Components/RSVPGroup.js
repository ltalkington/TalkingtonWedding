import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { Row, Col, Button, Form, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RVSPGroup({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  progress,
  setProgress,
  step,
  setStep,
  RSVP,
  setRSVP,
}) {
  const nextStep = () => {
    setProgress(50);
    setStep(3);
  };
  return (
    <div>
      <h1 id="form-info"> Your Progress</h1>
      <ProgressBar now={progress} variant="success" /> <br />
      <h1 id="form-info"> Hello {firstName}</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridfName">
            <Form.Label id="form-info">
              Are you going to be joining us on our special day?
            </Form.Label>
            <Form.Select
              value={RSVP}
              onChange={(e) => setRSVP(e.target.value)}
              type="RSVP"
            >
              <option> Yes, I will be in attendance</option>
              <option> No, I will be with you in spirit</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button variant="primary" onClick={nextStep}>
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default RVSPGroup;
