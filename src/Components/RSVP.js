import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import RVSPNames from "./RSVPNames";
import RSVPGroup from "./RSVPGroup";
import RSVPYes from "./RSVPYes";
import RVSPReservation from "./RSVPReservation";
import RSVPConfirmation from "./RSVPConfirmation";
import RSVPNo from "./RSVPNo";
import { Row, Col, Button, Form, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RVSP() {
  const [step, setStep] = useState(1);
  const [groupID, setGroupID] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [progress, setProgress] = useState(0);
  const [RSVP, setRSVP] = useState();
  const [guests, setGuests] = useState();

  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
  ]);
  const [dietRequests, setDietRequests] = useState();
  const [songRequests, setSongRequests] = useState();

  switch (step) {
    case 1:
      return (
        <div className="App-header" id="App-header">
          <RVSPNames
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            progress={progress}
            setProgress={setProgress}
            step={step}
            setStep={setStep}
            groupID={groupID}
            setGroupID={setGroupID}
            guests={guests}
            setGuests={setGuests}
          ></RVSPNames>
        </div>
      );
    case 2:
      return (
        <div className="App-header" id="App-header">
          <RSVPGroup
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            progress={progress}
            setProgress={setProgress}
            step={step}
            setStep={setStep}
            RSVP={RSVP}
            setRSVP={setRSVP}
            groupID={groupID}
            setGroupID={setGroupID}
            guests={guests}
            setGuests={setGuests}
          ></RSVPGroup>
        </div>
      );
    case 3:
      return (
        <div className="App-header" id="App-header">
          <RSVPYes
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            progress={progress}
            setProgress={setProgress}
            step={step}
            setStep={setStep}
            RSVP={RSVP}
            setRSVP={setRSVP}
            inputFields={inputFields}
            setInputFields={setInputFields}
            groupID={groupID}
            setGroupID={setGroupID}
            guests={guests}
            setGuests={setGuests}
          ></RSVPYes>
        </div>
      );
    case 4:
      return (
        <div className="App-header" id="App-header">
          <RVSPReservation
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            progress={progress}
            setProgress={setProgress}
            step={step}
            setStep={setStep}
            RSVP={RSVP}
            setRSVP={setRSVP}
            inputFields={inputFields}
            setInputFields={setInputFields}
            dietRequests={dietRequests}
            setDietRequests={setDietRequests}
            songRequests={songRequests}
            setSongRequests={setSongRequests}
            groupID={groupID}
            setGroupID={setGroupID}
            guests={guests}
            setGuests={setGuests}
          ></RVSPReservation>
        </div>
      );
    case 5:
      return (
        <div className="App-header" id="App-header">
          <RSVPConfirmation
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            progress={progress}
            setProgress={setProgress}
            step={step}
            setStep={setStep}
            RSVP={RSVP}
            setRSVP={setRSVP}
            inputFields={inputFields}
            setInputFields={setInputFields}
            dietRequests={dietRequests}
            setDietRequests={setDietRequests}
            songRequests={songRequests}
            setSongRequests={setSongRequests}
            groupID={groupID}
            setGroupID={setGroupID}
            guests={guests}
            setGuests={setGuests}
          ></RSVPConfirmation>
        </div>
      );

    case 7:
      return (
        <div className="App-header" id="App-header">
          <RSVPNo
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            progress={progress}
            setProgress={setProgress}
            step={step}
            setStep={setStep}
            RSVP={RSVP}
            setRSVP={setRSVP}
            inputFields={inputFields}
            setInputFields={setInputFields}
            dietRequests={dietRequests}
            setDietRequests={setDietRequests}
            songRequests={songRequests}
            setSongRequests={setSongRequests}
            groupID={groupID}
            setGroupID={setGroupID}
            guests={guests}
            setGuests={setGuests}
          ></RSVPNo>
        </div>
      );
    //   if (step == 1) {
    //     return (
    //       <div>
    //         <h1> Your Progress</h1>
    //         <ProgressBar now={progress} />
    //         <br />
    //         <RVSPNames
    //           firstName={firstName}
    //           setFirstName={setFirstName}
    //           lastName={lastName}
    //           setLastName={setLastName}
    //           progress={progress}
    //           setProgress={setProgress}
    //           step = {step}
    //           setStep = {setStep}
    //         ></RVSPNames>
    //       </div>
    //     );
    //     if (step == 2) {
    //     return (
    //       <div>
    //         <h1> Your Progress</h1>
    //         <ProgressBar now={progress} />
    //         <br />
    //         <RVSPNames
    //           firstName={firstName}
    //           setFirstName={setFirstName}
    //           lastName={lastName}
    //           setLastName={setLastName}
    //           progress={progress}
    //           setProgress={setProgress}
    //         ></RVSPNames>
    //       </div>
    //     );
  }
}

export default RVSP;
