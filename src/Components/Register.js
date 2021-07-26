import React from "react";
import "./Register.css";
import Logo from "../images/logo 2.0.svg";
import Poster1 from "../images/Advertise 1.svg";
import Poster2 from "../images/Group 14.svg";
import google from "../images/Google1.svg";
import facebook from "../images/Facebook1.svg";
import linkedin from "../images/LinkedIn1.svg";

const Register = () => {
  return (
    <div className="registerBody">
      <div className="registerLeft">
        <div className="registerLogo">
          <img src={Logo} alt="" />
        </div>
        <div className="registerHeading">
          <h2>Portfol</h2>
        </div>
        <div className="registerTitle">
          <h3>Discover the world’s top Designers & Creatives.</h3>
        </div>
        <div className="registerImage">
          <img src={Poster1} alt="" />
        </div>
      </div>
      <div className="registerRight">
        <div className="rightHead">
          <p>Sign Up to Portfol</p>
        </div>
        <div className="rightSocial">
          <div className="registerSocialOne">
            <img src={google} alt="" />
            {/* <a href="">Sign Up with Google</a> */}
          </div>
          <div className="registerSocialTwo">
            <img src={facebook} alt="" />
          </div>
          <div className="registerSocialThree">
            <img src={linkedin} alt="" />
          </div>
          <div className="orHeading">
            <img src={Poster2} alt="" />
          </div>
          <div className="username">
            <p>Username</p>
            <input type="text" />
          </div>
          <span className="email">
            <p>Email</p>
            <input type="email" />
          </span>
          <div className="password">
            <p>Password</p>
            <input type="password" />
          </div>
          <div className="cpassword">
            <p>Confirm Password</p>
            <input type="password" />
          </div>
          <div className="profession">
            <p>Profession</p>
            <select class="form-select">
              <option selected>Film Maker</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="ckeckBox">
            <input type="checkbox" />
            <p align="left">
              Creating an account means you’re okay with our Terms of Service,
              Privacy Policy, and our default Notification Settings.
            </p>
          </div>
          <div className="registerButton">
            <div></div>
            <a href="/login">Sign Up</a>
          </div>
          <div className="loginRedirect">
            <p>
              Already a member ?
              <span>
                <a href=""> Sign In Now</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
