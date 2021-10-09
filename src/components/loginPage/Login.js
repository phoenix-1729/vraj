import React from "react";
import "./Login.css";
import PersonIcon from "@mui/icons-material/PersonOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import log from "../assets/log.svg";
import register from "../assets/register.svg";

function Login() {
  const navRef = React.useRef(null);
  const onAddClick = (e) => {
    navRef.current.classList.add("sign-up-mode");
  };
  const onRemoveClick = (e) => {
    navRef.current.classList.remove("sign-up-mode");
  };

  return (
    <div className="container" ref={navRef}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <PersonIcon fontSize="large" className="icon" />
              <input
                type="text"
                placeholder="Username or email or phone number"
              />
            </div>
            <div className="input-field">
              <LockIcon fontSize="large" className="icon" />
              <input type="password" placeholder="Password" />
            </div>
            <p className="forget-password">Forgot Password?</p>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FacebookOutlinedIcon/>
              </a>
              <a href="#" className="social-icon">
                <InstagramIcon/>
              </a>
              <a href="#" className="social-icon">
                <GoogleIcon/>
              </a>
              <a href="#" className="social-icon">
                <TwitterIcon />
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <PersonIcon fontSize="large" className="icon" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <MailOutlineIcon fontSize="large" className="icon"/>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <LockIcon fontSize="large" className="icon" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FacebookOutlinedIcon/>
              </a>
              <a href="#" className="social-icon">
                <InstagramIcon/>
              </a>
              <a href="#" className="social-icon">
                <GoogleIcon/>
              </a>
              <a href="#" className="social-icon">
                <TwitterIcon />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={onAddClick}
            >
              Sign up
            </button>
          </div>
          <img src={log} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={onRemoveClick}
            >
              Sign in
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
