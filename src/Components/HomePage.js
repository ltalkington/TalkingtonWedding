import "../App.css";
import "../index.css";
import "./assets/css/main.css";
import { Link } from "react-router-dom";
import Details from "./Details";
import image1 from "./assets/css/images/pic01.jpg";
import image2 from "./assets/css/images/pic02.jpg";
import image3 from "./assets/css/images/pic03.jpg";

import florida2 from ".//Img/florida2.JPG";
import riverCity from ".//Img/grand-court.jpeg";
import forestPark from ".//Img/forestpark.JPEG";
import florida4 from ".//Img/florida4.JPG";

function HomePage() {
  return (
    <div id="page-wrapper">
      <section id="banner">
        <div class="inner">
          <h2>Logan and MacKenzie</h2>
          <p>
            Are Getting Married
            <br />
          </p>
          <ul class="actions special">
            <li></li>
          </ul>
        </div>
        <a href="#one" class="more scrolly">
          Learn More
        </a>
      </section>

      <section id="one" class="wrapper style1 special">
        <div class="inner">
          <header class="major">
            <h2>We are excited to share our wedding with you</h2>
            <p className="home-page-text">
              Please see below for more information regarding the event times,
              event space, and more.
            </p>
          </header>
          <ul class="icons major">
            <li>
              <span class="icon fa-gem major style1">
                <span class="label">When is the Wedding?</span>
              </span>
            </li>
            <li>
              <span class="icon fa-heart major style2">
                <span class="label"></span>
              </span>
            </li>
            <li>
              <span class="icon fa-gem major style3">
                <span class="label">r</span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section id="two" class="wrapper alt style2">
        <section class="spotlight">
          <div class="image">
            <img src={florida4} alt="" />
          </div>
          <div class="content">
            <h2>
              When is the Wedding?
              <br />
            </h2>
            <p className="home-page-text">August 27th, 2022</p>
          </div>
        </section>
        <section class="spotlight">
          <div class="image">
            <img src={riverCity} alt="" />
          </div>
          <div class="content">
            <h2>
              Where is the wedding?
              <br />
            </h2>
            <p>
              <a
                href="https://www2.rivercity.com/hotel"
                target="_blank"
                className="home-page-text"
              >
                River City Casino
              </a>
              <br />
              <p className="home-page-text"> Saint Louis, Missouri </p>
            </p>
          </div>
        </section>
        <section class="spotlight">
          <div class="image">
            <img src={forestPark} alt="" />
          </div>
          <div class="content">
            <h2>
              Lodging Information
              <br />
            </h2>
            <p className="home-page-text">
              Lodging will be available at River City Casino, please contact the
              front-desk and let them know that you are attending Logan and
              MacKenzie's wedding. Alternatively, you can reach out to Logan and
              MacKenzie for more information.
            </p>
          </div>
        </section>
      </section>

      <section id="three" class="wrapper style3 special">
        <div class="inner">
          <header class="major">
            <h2>Other Information</h2>
            <p>
              Below you can find some other information that can assist with
              your arrival to our wedding and ensuring you have an enjoyable
              time.
            </p>
          </header>
          <ul className="features">
            <li class="icon fa-heart">
              <h3>Flight Information</h3>
              <p>
                Flights are available from Saint Louis Lambert Airport or
                MidAmerica in Mascoutah, IL. Flights are offered by Southwest,
                American, Allegiant, and more.
              </p>
            </li>
            <li className="icon fa-heart style1">
              <h3>Wedding Registries</h3>
              <p>
                <a
                  href="https://www.amazon.com/wedding/a/registry/14MIO0ZVFJ491?tag=wedch-995-20"
                  target="_blank"
                  className="anchor-new"
                >
                  Amazon
                </a>{" "}
                |{" "}
                <a
                  href="https://www.macys.com/wgl/registry/guest/MACKENZIE-FRIEDMAN-LOGAN-TALKINGTON/7288723?ranMID=3184&ranEAID=4UDRE6bZt0Q&ranSiteID=4UDRE6bZt0Q-liQG3EeGuJI3Wqw7VGVahg&LinkshareID=4UDRE6bZt0Q-liQG3EeGuJI3Wqw7VGVahg&m_sc=aff&PartnerID=LINKSHARE&cm_mmc=LINKSHARE-_-5-_-63-_-MP563&LSNSUBSITE=PR"
                  target="_blank"
                  className="anchor-new"
                >
                  Macy's
                </a>{" "}
                |{" "}
                <a
                  href="https://www.target.com/gift-registry/gift-giver?registryId=a17883e0-ffb7-11eb-8ad9-3d212c61fb2f&type=WEDDING&clkid=25bf0827N724c11ecb1d479a81054fdee&lnm=81938&afid=The%20Knot%2C%20Inc%20and%20Subsidiaries&ref=tgt_adv_xasd0002"
                  target="_blank"
                  className="anchor-new"
                >
                  {" "}
                  Target
                </a>{" "}
              </p>
            </li>
            <li class="icon fa-heart">
              <h3>Alternative Lodging</h3>
              <p>
                Saint Louis offers many options for Lodging including Airbnb,
                hotels, and more. There are roughly 100+ hotels to chose and
                many more options outside of the city in Saint Charles county
                and more. If you have questions about hotels ask Logan or
                MacKenzie.
              </p>
            </li>
            <li class="icon fa-heart">
              <h3>Dress Code</h3>
              <p>Our dress code is smart casual to semi-formal.</p>
            </li>
            <li class="icon fa-heart">
              <h3>Explore Saint Louis</h3>
              <p>
                If you aren't familiar with Saint Louis, we recommend that you
                go see/do at least one of the following! Go to Ted Drewes, visit
                the Arch, go the Anhueser Busch Brewery, Nine Mile Garden, or
                take a walk on Grant's Trail. All of these are within minutes of
                driving from River City Casino.
              </p>
            </li>
            <li class="icon fa-heart">
              <h3>Event details</h3>
              <p>
                While our wedding cermony will be outside in August, it should
                be relatively cool with fans blowing and shade that covers the
                entire area, we did want to make that fact known. Our reception
                at night will be held inside in a ball room. So make sure you
                are prepared for a little heat as August in Missouri can be a
                little toasty.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id="cta" className="wrapper style4 ">
        <div class="inner">
          <header>
            <h2>Would you like to RSVP? (Coming Soon)</h2>
          </header>
          <ul class="actions stacked">
            <li>
              <Link to="/RSVP" className="button fit primary">
                RSVP
              </Link>
            </li>
            <li>
              <Link to="/FAQ" class="button fit">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <footer id="footer">
        <ul class="icons">
          <li>
            <a href="#" class="icon brands fa-twitter">
              <span class="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-facebook-f">
              <span class="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-instagram">
              <span class="label">Instagram</span>
            </a>
          </li>

          <li>
            <a href="#" class="icon solid fa-envelope">
              <span class="label">Email</span>
            </a>
          </li>
        </ul>
        <ul class="copyright">
          <li> Logan and Mackenzie Talkington EST 2022</li>
        </ul>
      </footer>
    </div>

    // <Details></Details>
  );
}

export default HomePage;
