import React from "react";
import "./Login.css";
import Logo from "../images/logo 2.0.svg";
import Img1 from "../images/Illustration-1 1.svg";
import Img2 from "../images/Group 14.svg";
import facebook from "../images/Facebook1.svg";
import linkedin from "../images/LinkedIn1.svg";
import google from "../images/Google1.svg";

const Login = () => {
  return (
    <div className="LoginBody">
      <div className="loginLeft">
        <div className="leftLogo">
          <img src={Logo} alt="" />
        </div>
        <div className="leftHeading">
          <h2>Portfol</h2>
        </div>
        <div className="leftTitle">
          <h3>Discover the world’s top Designers & Creatives.</h3>
        </div>
        <div className="leftImage">
          <img src={Img1} alt="" />
        </div>
      </div>

      <div className="loginRight">
        <div className="rightHeading">
          <h3>Sign in to Portfol</h3>
        </div>
        <div className="rightSocial">
          <div className="socialOne">
            <img src={google} alt="" />
            {/* <a href="">Sign in with google</a> */}
          </div>
          <div className="socialTwo">
            <img src={facebook} alt="" />
          </div>
          <div className="socialThree">
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="midHeading">
          <img src={Img2} alt="" />
        </div>
        <div className="loginFirst">
          <p>Email</p>
          <input type="email" />
        </div>
        <div className="loginSecond">
          <p>
            Password
            {/* <span>forget password</span> */}
          </p>
          <input type="password" />
        </div>
        <div className="loginButton">
          <div></div>
          <a href="/register">Sign In</a>
        </div>
        <div className="signUp">
          <p>
            Not a member ?
            <span>
              <a href=""> Sign Up Now</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
