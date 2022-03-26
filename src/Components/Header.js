import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
function Header() {
  return (
    <Navbar variant="dark" className="color-nav">
      <Container>
        <Navbar.Brand id="header-id">
          {" "}
          <em>The Talkington Wedding</em>
        </Navbar.Brand>
        <Nav className="justify-content-end ">
          <Nav.Link className="App-link" href="/">
            Home
          </Nav.Link>
          <Nav.Link href="/RSVP">RSVP</Nav.Link>
          <Nav.Link href="/FAQ">FAQ</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
