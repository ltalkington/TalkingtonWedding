import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { Row, Col, Button, Form, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FinalConfirm({ RSVP }) {
  const [passwordCheck, setPasswordCheck] = useState();
  let navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const confirmCheck = () => {
    if (RSVP == 1) {
      return <h1> You have confirmed that you are going to our wedding! </h1>;
    } else {
      return (
        <h1> You have confirmed that you are not going to our wedding! </h1>
      );
    }
  };
  return (
    <div id="frosted-glass" className="special-fix">
      <hr />
      {confirmCheck()}
      <Button
        id="buttonsForm"
        onClick={() => {
          navigateHome();
        }}
      >
        {" "}
        Return to Home Page
      </Button>
      <hr />
    </div>
  );
}

export default FinalConfirm;
