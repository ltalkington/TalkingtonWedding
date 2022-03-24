import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { Row, Col, Button, Form, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RVSPYes({
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
  groupID,
  setGroupID,
  guests,
  setGuests,
  hasGuests,
  setHasGuests,
}) {
  const nextStep = () => {
    setProgress(75);
    if (inputFields[0].firstName != "") {
      setHasGuests(true);
    }
    setStep(4);
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const addFields = () => {
    let newfield = { firstName: "", lastName: "" };
    setInputFields([...inputFields, newfield]);
  };
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };
  return (
    <div id="frosted-glass" className="special-fix">
      <h1 id="form-info"> Your Progress</h1>
      <ProgressBar now={progress} variant="success" /> <br />
      <h1 id="form-info">
        {" "}
        {firstName}, we are glad that you can attend. We have some additional
        questions.
      </h1>
      <Form>
        <Form.Label id="form-info">
          {" "}
          Who are you going to bring with you?
        </Form.Label>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <Row className="mb-3 inline-form">
                <Form.Group as={Col}>
                  <Form.Label id="form-info">First Name</Form.Label>
                  <Form.Control
                    value={inputFields.firstName}
                    onChange={(e) => handleFormChange(index, e)}
                    type="firstName"
                    name="firstName"
                    placeholder="First Name....."
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    value={inputFields.lastName}
                    onChange={(e) => handleFormChange(index, e)}
                    type="lastName"
                    name="lastName"
                    placeholder="Last Name....."
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Button
                    id="button-form-inline"
                    onClick={() => removeFields(index)}
                  >
                    Remove
                  </Button>
                </Form.Group>
              </Row>
              <hr />
            </div>
          );
        })}

        <Button id="buttonsForm" onClick={addFields}>
          {" "}
          Add More....
        </Button>
        <br />
        <br />

        <Button id="buttonsForm" onClick={nextStep}>
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default RVSPYes;
