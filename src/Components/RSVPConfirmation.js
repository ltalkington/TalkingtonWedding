import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { Row, Col, Button, Form, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RVSPConfirmation({
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
}) {
  const nextStep = () => {
    setProgress(90);
    setStep(5);
  };
  const showGuests = () => {
    for (let i = 0; i < inputFields.length; i++) {
      return (
        <h1>
          {" "}
          {inputFields[i].firstName} {inputFields[i].lastName}{" "}
        </h1>
      );
    }
  };

  return (
    <div>
      <h1 id="form-info"> Your Progress</h1>
      <ProgressBar now={progress} variant="success" /> <br />
      <h1 id="form-info">
        {" "}
        {firstName}, we are glad that you can attend. Please Confirm the
        information below
      </h1>
      <br />
      <Form>
        <h1 id="form-info">
          {" "}
          Your Name: {firstName} {lastName}
        </h1>

        <h1 id="form-info"> {RSVP} </h1>
        <h1 id="form-info"> Your guests are </h1>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <h1 id="form-info">
                {" "}
                Guest {index + 1}: {inputFields[index].firstName}{" "}
                {inputFields[index].lastName}
              </h1>
            </div>
          );
        })}
        <h1 id="form-info"> Your diet request/allergies are {dietRequests} </h1>

        <h1 id="form-info"> Your song request is {songRequests}</h1>

        <Button variant="primary" onClick={nextStep}>
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default RVSPConfirmation;
