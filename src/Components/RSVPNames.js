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
  groupID,
  setGroupID,
  guests,
  setGuests,
}) {
  const nextStep = () => {
    setProgress(25);
    setStep(2);
  };
  const submitButton = async (e) => {
    e.preventDefault();

    let data = {
      firstName: firstName,
      lastName: lastName,
    };

    // On submit of the form, send a GET request with the date to the server
    const response = await fetch(
      `http://talkingtonwedding.com:9004/displayguests/filter/${firstName}/${lastName}`,
      { headers: { "Content-Type": "application/json" } }
    );
    const guest = await response.json();
    if (guest[0]) {
      setGuests(guest[0]);
      console.log(guest[0].guestID, "this is guest info");
      setGroupID(guest[0].groupID);
      console.log("guest group ID", guest[0].groupID);

      nextStep();
    } else {
      alert("unauthorized user");
    }
  };
  return (
    <div id="frosted-glass" className="special-fix">
      <h1 id="form-info"> Your Progress</h1>
      <ProgressBar now={progress} variant="success" /> <br />
      <hr />
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
        <Button
          id="buttonsForm"
          onClick={(e) => {
            submitButton(e);
          }}
        >
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default RVSPNames;
