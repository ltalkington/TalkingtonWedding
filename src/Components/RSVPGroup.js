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
  groupID,
  setGroupID,
  guests,
  setGuests,
}) {
  const nextStep = () => {
    setProgress(50);
    if (RSVP == 0) {
      console.log(RSVP);
      setStep(7);
    } else {
      console.log(RSVP);
      setStep(3);
    }
  };
  return (
    <div id="frosted-glass" className="special-fix">
      <h1 id="form-info"> Group # {groupID}</h1>
      <h1 id="form-info"> Your Progress</h1>
      <ProgressBar now={progress} variant="success" /> <br />
      <hr />
      <h1 id="form-info"> Hello {firstName}</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridfName">
            <Form.Label id="form-info">
              Are you going to be joining us on our special day?
            </Form.Label>
            <hr />
            <Form.Select
              value={RSVP}
              onChange={(e) => setRSVP(e.target.value)}
              type="RSVP"
            >
              <option value={1}> Yes, I will be in attendance</option>
              <option value={0}> No, I will be with you in spirit</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button id="buttonsForm" onClick={nextStep}>
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default RVSPGroup;
