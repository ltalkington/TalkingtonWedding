import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Details() {
  return (
    <Container id="frosted-div">
      <h1 className="home-page-text">When</h1>
      <p className="home-page-text"> August 27th, 2022</p>
      <hr></hr>
      <h1 className="home-page-text">Where</h1>
      <p className="home-page-text">
        {" "}
        <a href="https://www2.rivercity.com/hotel" target="_blank">
          River City Casino <br />
        </a>
        Saint Louis, Missouri
      </p>
      <hr></hr>
      <h1 className="home-page-text">Lodging</h1>
      <p className="home-page-text">
        {" "}
        Lodging will be available at River City Casino, please contact the
        front-desk and let them know that you are attending Logan and
        MacKenzie's wedding. Alternatively, you can reach out to Logan and
        MacKenzie for more information.
      </p>
      <hr></hr>
      <h1 className="home-page-text">Flights</h1>
      <p className="home-page-text">
        {" "}
        Flights are available from Saint Louis Lambert Airport or MidAmerica in
        Mascoutah, IL. Flights are offered by Southwest, American, Allegiant,
        and more.
      </p>
      <hr></hr>
      <h1 className="home-page-text">Registry</h1>
      <p className="home-page-text">
        {" "}
        We are registered at the following registries.
      </p>
      <a
        href="https://www.amazon.com/wedding/a/registry/14MIO0ZVFJ491?tag=wedch-995-20"
        target="_blank"
      >
        Amazon
      </a>{" "}
      |{" "}
      <a
        href="https://www.macys.com/wgl/registry/guest/MACKENZIE-FRIEDMAN-LOGAN-TALKINGTON/7288723?ranMID=3184&ranEAID=4UDRE6bZt0Q&ranSiteID=4UDRE6bZt0Q-liQG3EeGuJI3Wqw7VGVahg&LinkshareID=4UDRE6bZt0Q-liQG3EeGuJI3Wqw7VGVahg&m_sc=aff&PartnerID=LINKSHARE&cm_mmc=LINKSHARE-_-5-_-63-_-MP563&LSNSUBSITE=PR"
        target="_blank"
      >
        Macy's
      </a>{" "}
      |{" "}
      <a
        href="https://www.target.com/gift-registry/gift-giver?registryId=a17883e0-ffb7-11eb-8ad9-3d212c61fb2f&type=WEDDING&clkid=25bf0827N724c11ecb1d479a81054fdee&lnm=81938&afid=The%20Knot%2C%20Inc%20and%20Subsidiaries&ref=tgt_adv_xasd0002"
        target="_blank"
      >
        {" "}
        Target
      </a>{" "}
      <br />
      <Link to="/rsvp" className="App-link">
        {" "}
        RVSP for Wedding
      </Link>{" "}
    </Container>
  );
}

export default Details;
