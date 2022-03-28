import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { Row, Col, Button, Form, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PasswordProtectPage({ password, setStep, step }) {
  const [passwordCheck, setPasswordCheck] = useState();
  const submitButton = () => {
    if (passwordCheck === password) {
      setStep(1);
    } else {
      alert("wrong password");
    }
  };
  return (
    <div id="frosted-glass" className="special-fix">
      <hr />
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridfName">
            <Form.Label id="form-info">Password</Form.Label>
            <Form.Control
              id="form-info-control"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
              type="password"
              placeholder=" enter password....."
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

export default PasswordProtectPage;
