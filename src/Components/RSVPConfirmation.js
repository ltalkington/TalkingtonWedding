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
  groupID,
  setGroupID,
  guests,
  setGuests,
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

  const goingToWedding = () => {
    if (RSVP === "0") {
      return (
        <div>
          <h1 id="form-info">
            {" "}
            {firstName}, we are sorry that you cannot go, please confirm the
            information below to respond.
          </h1>
          <h1 id="form-info">
            {" "}
            Your Name: {firstName} {lastName}
          </h1>

          <h1 id="form-info"> You cannot make it to the wedding </h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1 id="form-info">
            {" "}
            {firstName}, we are glad that you can attend. Please Confirm the
            information below
          </h1>
          <hr />
          <h1 id="form-info">
            {" "}
            Your Name: {firstName} {lastName}
          </h1>
          <hr />
          <h1 id="form-info"> You are you going to the wedding</h1>
          <hr />
          <h1 id="form-info">
            {" "}
            Your diet request/allergies are {dietRequests}{" "}
          </h1>
          <hr />
          <h1 id="form-info"> Your song request is {songRequests}</h1>
          <hr />
        </div>
      );
    }
  };

  const submitButton = async (e) => {
    e.preventDefault();
    let numberGoing = inputFields.length;
    let data = {
      groupID: groupID,
      isGoing: RSVP,
      numberGoing: numberGoing + 1,
      dietRequests: dietRequests,
      songRequests: songRequests,
    };

    // On submit of the form, send a GET request with the date to the server
    const response = await fetch("http://localhost:8080/createreservation", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200 || response.status === 201) {
      alert("Successfully added the Employee!");
    } else {
      alert(`Failed to add employee, status code = ${response.status}`);
    }
  };

  return (
    <div id="frosted-glass" className="special-fix">
      <h1 id="form-info"> Group # {groupID}</h1>
      <h1 id="form-info"> Your Progress</h1>
      <ProgressBar now={progress} variant="success" /> <br />
      <br />
      <Form>
        {goingToWedding()}
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
        <hr />
        <Button
          id="buttonsForm"
          onClick={(e) => {
            nextStep();
            submitButton(e);
          }}
        >
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default RVSPConfirmation;
