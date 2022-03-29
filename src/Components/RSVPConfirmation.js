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
  hasGuests,
  setHasGuests,
}) {
  const nextStep = () => {
    setProgress(90);
    setStep(8);
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
          {anyDietRequests()}

          {anySongRequests()}
        </div>
      );
    }
  };
  const anyDietRequests = () => {
    if (dietRequests) {
      return (
        <div>
          <h1 id="form-info">
            {" "}
            Your diet request/allergies are {dietRequests}{" "}
          </h1>
          <hr></hr>
        </div>
      );
    } else {
      return (
        <div>
          <h1 id="form-info">
            {" "}
            Your don't have any allergies or diet requests{" "}
          </h1>
          <hr></hr>
        </div>
      );
    }
  };

  const anySongRequests = () => {
    if (songRequests) {
      <div>
        <hr />
        <h1 id="form-info"> Your song request is {songRequests}</h1>
        <hr />
      </div>;
    } else {
      return (
        <div>
          <h1 id="form-info"> Your don't have any song requests </h1>
          <hr></hr>
        </div>
      );
    }
  };

  const guestIterator = () => {
    return (
      <div>
        {console.log("we make it")}
        <hr />

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
      </div>
    );
  };

  const anyGuests = () => {
    console.log(inputFields);
    let guestNameList = false;
    for (let input in inputFields) {
      if (inputFields[input].firstName.length > 1) {
        guestNameList = true;
      }
      console.log(inputFields[input]);
    }
    if (hasGuests) {
      return (
        <div>
          {console.log("we make it")}
          <h1 id="form-info"> Your guest(s) are </h1>
          {guestIterator()}
          <hr />
        </div>
      );
    } else {
      return (
        <div>
          <h1 id="form-info"> You don't have any Guests </h1>
          <hr></hr>
        </div>
      );
    }
  };

  const submitButton = async (e) => {
    console.log(guests);
    e.preventDefault();
    let numberGoing = inputFields.length;
    let data = {
      groupID: groupID,
      isGoing: RSVP,
      numberGoing: numberGoing + 1,
      dietRequests: dietRequests,
      songRequests: songRequests,
    };

    let userData = {
      groupID: groupID,
      firstName: firstName,
      lastName: lastName,
      isGoing: RSVP,
      isPlusOne: 0,
      guestID: guests.guestID,
    };

    const response = await fetch(
      "http://www.talkingtonwedding.com/updateguests",
      {
        method: "PUT",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      alert("Successfully updated the Guest!");
      console.log(userData, "this is first update");
    } else {
      alert(`Failed to update Guest, status code = ${response.status}`);
    }

    const response2 = await fetch(
      "http://www.talkingtonwedding.com/createreservation",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response2.status === 200 || response2.status === 201) {
      alert("Successfully added the Reservation!");
    } else {
      alert(`Failed to add reservation, status code = ${response2.status}`);
    }

    if (hasGuests) {
      for (let input in inputFields) {
        let guestData = {
          groupID: groupID,
          firstName: inputFields[input].firstName,
          lastName: inputFields[input].lastName,
          isPlusOne: 1,
          isGoing: RSVP,
        };

        // On submit of the form, send a GET request with the date to the server
        const response3 = await fetch(
          `http://www.talkingtonwedding.com/displayguests/filter/${guestData.firstName}/${guestData.lastName}`,
          { headers: { "Content-Type": "application/json" } }
        );
        const guest = await response3.json();
        if (guest[0]) {
          const response = await fetch(
            "http://www.talkingtonwedding.com/updateguests",
            {
              method: "PUT",
              body: JSON.stringify(guestData),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.status === 200 || response.status === 201) {
            alert("Successfully updated the Guest!");
            console.log(userData);
          } else {
            alert(`Failed to update Guest, status code = ${response.status}`);
          }
        } else {
          const response4 = await fetch(
            "http://www.talkingtonwedding.com/createguest",
            {
              method: "POST",
              body: JSON.stringify(guestData),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response4.status === 200 || response4.status === 201) {
            alert("Successfully added the Reservation!");
            console.log(guestData);
          } else {
            alert(
              `Failed to add reservation, status code = ${response4.status}`
            );
          }
        }
      }
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
        {anyGuests()}

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
