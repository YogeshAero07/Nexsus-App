import React from "react";
import "./LandingPage.css";
import logo from "../images/Crio Logo.png";
import album from "../images/album.svg";
import favorite from "../images/favorite.svg";
import img1 from "../images/Rectangle 5.1.svg";
import img2 from "../images/Rectangle 5.2.svg";
import img3 from "../images/Rectangle 5.3.svg";
import line1 from "../images/Line 1.svg";
import line2 from "../images/Line 2.svg";
import next from "../images/CaretCircleRight.svg";
import arrow from "../images/Arrow.svg";
import devices from "../images/Devices.svg";
import ImgUpload from "../Components/Container";

const LandingPage = () => {
  return (
    <>
      {/* First Section of Landing Page */}

      <div className="landingBodyOne">
        <div className="landingMenu">
          <div className="landingMenuFrame">
            <div className="menuLogo">
              <img src={logo} alt="logo" />
            </div>
            {/* <div className="logoName">
              <p>Crio</p>
            </div> */}
            <div className="menuItemOne">
              <img src={favorite} alt="" />
              <p>Favorite</p>
            </div>
            <div className="menuItemTwo">
              <img src={album} alt="" />
              <p>Albums</p>
            </div>
            <div className="menuLogin">
              <div className="signinBox">
                <a href="/login">Log in</a>
              </div>
            </div>
            <div className="menuSignup">
              <div className="signupBox">
                <a href="/register">Sign up</a>
              </div>
            </div>
          </div>
          <div className="landingMiddleOne">
            <p>Awesome portfolio websites Create beautiful designs</p>
          </div>
          <div className="landingMiddleTwo">
            <p>Let's Started</p>
          </div>
        </div>
      </div>

      {/* Second Section of Landign Page */}

      <div className="landingBodyTwo">
        <div className="featureTitle">
          <p>See Your Albums</p>
        </div>

        <div className="featureSubtitle">
          <p>
            Creatives around the world use Portfolio to showcase their work.
          </p>
        </div>

        <div className="featureButtons">
          {/* <div className="buttonLeft">
            <a href="">Edit Your site</a>
          </div>
          <div className="buttonRight">
            <a href="">View more example</a>
          </div> */}

          <div className="featureBox">
            <div className="boxTop">
              <div className="topOne">
                <div className="topOneBody">
                  <img src={img1} alt="" />
                  <h4>School</h4>
                  <p>9 Items</p>
                </div>
              </div>
              <div className="topTwo">
                <div className="topTwoBody">
                  <img src={img2} alt="" />
                  <h4>College</h4>
                  <p>24 Items</p>
                </div>
              </div>
              <div className="topThree">
                <div className="topThreeBody">
                  <img src={img3} alt="" />
                  <h4>Journey</h4>
                  <p>6 Items</p>
                </div>
              </div>
            </div>

            <div className="boxBottom">
              <div className="bottomOne">
                <div className="bottomOneBody">
                  <img src={img1} alt="" />
                  <h4>Goa Tour</h4>
                  <p>5 Items</p>
                </div>
              </div>
              <div className="bottomTwo">
                <div className="bottomTwoBody">
                  <img src={img2} alt="" />
                  <h4>Birthday Celebration</h4>
                  <p>15 Items</p>
                </div>
              </div>
              <div className="bottomThree">
                <div className="bottomThreeBody">
                  <img src={img3} alt="" />
                  <h4>Wedding</h4>
                  <p>33 Items</p>
                </div>
              </div>
            </div>
          </div>

          <div className="endingLines">
            <div className="firstLine">
              <img src={line1} alt="" />
            </div>
            <div className="secondLine">
              <img src={line2} alt="" />
            </div>
          </div>

          <div className="nextArrow">
            <div className="arrowBox">
              <img src={next} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Third Section of Landing Page */}

      <div className="landingBodyThird">
        <div className="mainTitle">
          <h3>Showcase your work in minutes</h3>
        </div>

        <div className="mainSubTitle">
          <p>
            Don’t know HTML or CSS? No problem. With Portfolio, our
            easy-to-customize themes are the most beautiful way to present your
            work online.
          </p>
        </div>

        <ImgUpload />

        <div className="mainEnd">
          <p>Get started</p>
          <img src={arrow} alt="" />
        </div>
      </div>

      {/* Fourth Section Landing Page */}

      <div className="landingBodyFour">
        <img src={devices} alt="" />
        <h2>Everything you need to grow online.</h2>
        <p>
          Simple tools for your big ideas.Start your free website trial today,
          no credit card required.
        </p>
      </div>
    </>
  );
};

export default LandingPage;
