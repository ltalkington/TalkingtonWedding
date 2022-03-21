import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { Row, Col, Button, Form, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RVSPNames({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  progress,
  setProgress,
  step,
  setStep,
}) {
  const nextStep = () => {
    setProgress(25);
    setStep(2);
  };
  return (
    <div>
      <h1 id="form-info"> Your Progress</h1>
      <ProgressBar now={progress} variant="success" /> <br />
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridfName">
            <Form.Label id="form-info">First Name</Form.Label>
            <Form.Control
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="firstname"
              placeholder="First Name....."
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridlName">
            <Form.Label id="form-info">Last Name</Form.Label>
            <Form.Control
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="lastname"
              placeholder="Last Name....."
            />
          </Form.Group>
        </Row>
        <Button variant="primary" onClick={nextStep}>
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default RVSPNames;
