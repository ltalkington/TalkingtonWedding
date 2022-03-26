import React from "react";
import { Accordion } from "react-bootstrap";
import { useState, useEffect } from "react";

function FAQ() {
  const [employees, setEmployees] = useState();

  return (
    <header className="App-header2">
      <h1> FAQ</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header id="acc-header">
            Where is the Wedding?
          </Accordion.Header>
          <Accordion.Body id="acc-text">
            The Wedding and Reception will be at River City Hotel and Casino in
            Saint Louis Missouri. <br /> Address: 777 River City Casino Blvd,
            St. Louis, MO 63125
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Do we have to stay at River City Hotel and Casino?{" "}
          </Accordion.Header>
          <Accordion.Body id="acc-text">
            No! While it is an option, we have multiple rooms blocked out for
            the wedding for ease of travel for guests. However, There are
            multiple other hotels in the Saint Louis Area to pick from. There
            are plently of options in downtown STL, by the Airport, in South
            Saint Louis County, and even in Saint Charles County if that would
            peak your interest. All locations are between 5-40 mintues of a
            drive. If you have any further questions regarding accomadations,
            please contact Logan or MacKenzie.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What kind of food will be served at the wedding?{" "}
          </Accordion.Header>
          <Accordion.Body id="acc-text">
            At the reception, the food that will be served will be a buffet
            style menu, featuring options for all with allergies, restrictive
            diets, and other issues. If Logan or MacKenzie needs to be aware of
            an allergy or diet concern , please list that on the RSVP.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Will there be a gap between the Cermony and Reception?{" "}
          </Accordion.Header>
          <Accordion.Body id="acc-text">
            Yes. There will be a gap between the cermony and Reception. In
            between that time feel free to check into a hotel, gamble at the
            casino, check out STL entertainment, catch up with family, or grab a
            drink at the cocktail hour.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Will I be able to take photos on my personal phone?{" "}
          </Accordion.Header>
          <Accordion.Body id="acc-text">
            There will times to take photos on your personal phone. Times that
            are not allowed for photography are during the cermony, if the
            photographer/annoucer asks for no photos, or if your phone has
            volume for photos. Other times will be allowed.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Will there be a dress code? </Accordion.Header>
          <Accordion.Body id="acc-text">
            While there is no formal dress code, both MacKenzie and Logan ask
            you to please dress appropriately. The cermony will be held outside
            with shade and a breeze but it could still get a little hot/humid,
            especially in August. So feel free to wear a suit or your best
            jeans. We will accept all, but please no pajamas.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Will there be parking available? </Accordion.Header>
          <Accordion.Body id="acc-text">
            Parking will be available for everyone at River City Hotel and
            Casino. The parking lot is large enough to hold everyone that is
            invited to the wedding.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            Will there be options to watch the cermony virtually?{" "}
          </Accordion.Header>
          <Accordion.Body id="acc-text">
            We will allow a stream for all of those guests that cannot be at our
            wedding in person that would still like to attend.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            I am from out of town, what should I do in Saint Louis for the night
            before/after the wedding?{" "}
          </Accordion.Header>
          <Accordion.Body id="acc-text">
            Saint Louis is a host to tons of culture. Some of our favorite
            options are going to Cardinals games, going to Ted Drewes Frozen
            Custard, going to TopGolf in Chesterfield, eating at Twisted Ranch,
            or try one of the many breweries in town (this is the home of
            Budweiser by the way).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>What is the Wedding Hashtag? </Accordion.Header>
          <Accordion.Body id="acc-text">#TalkingForever</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            What is the preferred method of RSVP?
          </Accordion.Header>
          <Accordion.Body id="acc-text">
            RSVP can be done over this website with the link{" "}
            <a href="/rsvp"> here</a>, by sending the physical RSVP back to
            MacKenzie and Logan, or by sending a note to MacKenzie and Logan.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </header>
  );
}

export default FAQ;
