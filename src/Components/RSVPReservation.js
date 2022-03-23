import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { Row, Col, Button, Form, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RVSPReservation({
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
  inputFields,
  setInputFields,
  dietRequests,
  setDietRequests,
  songRequests,
  setSongRequests,
  groupID,
  setGroupID,
  guests,
  setGuests,
}) {
  const nextStep = () => {
    setProgress(90);
    setStep(5);
  };

  return (
    <div id="frosted-glass" className="special-fix">
      <h1> Your Progress</h1>
      <ProgressBar now={progress} variant="success" /> <br />
      <hr />
      <h1>
        {" "}
        {firstName}, we are glad that you can attend. These are the final
        questions we have.
      </h1>
      <hr />
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>
              Do you or your guests have allergies/diet restrictions that we
              should know of(i.e Peanuts)?
            </Form.Label>
            <Form.Control
              value={dietRequests}
              onChange={(e) => setDietRequests(e.target.value)}
              type="dietRequests"
              placeholder="Ex. Peanut Allergy...."
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>
              Do you have any song requests? If so, request one song below.
            </Form.Label>
            <Form.Control
              value={songRequests}
              onChange={(e) => setSongRequests(e.target.value)}
              type="song requests"
              placeholder="Ex. Dancing Queen"
            />
          </Form.Group>
        </Row>

        <Button id="buttonsForm" onClick={nextStep}>
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default RVSPReservation;
