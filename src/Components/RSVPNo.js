import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { Row, Col, Button, Form, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RVSPNo({
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

  const submitButton = async (e) => {
    e.preventDefault();
    let numberGoing = inputFields.length;
    let data = {
      groupID: groupID,
      isGoing: 1,
      numberGoing: numberGoing + 1,
      dietRequests: dietRequests,
      songRequests: songRequests,
    };

    // On submit of the form, send a GET request with the date to the server
    const response = await fetch("http://localhost:9004/createreservation", {
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
      <ProgressBar now={progress} variant="success" /> <br /> <hr></hr>
      <h1 id="form-info">
        {" "}
        {firstName}, we are sorry that you cannot attend, do you have anyone
        else that won't be attending with you?
      </h1>{" "}
      <hr></hr>
      <br />
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
        <Button id="buttonsForm" onClick={addFields}> Add More....</Button>
        <br />
        <br />
        <Button id="buttonsForm" onClick={nextStep}>
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default RVSPNo;
