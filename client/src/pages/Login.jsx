import React, { useState } from "react";
import { Link } from 'react-router-dom'
import '../styles/Login.css';
import BannerImage from '../assets/login-banner-image.png';
import TopTriangle from '../assets/top-triangle-3d.png';
import BottomHalfCircle from '../assets/bottom-half-circle-3d.png';
import BottomRightTriangle from '../assets/bottom-right-triangle-3d.png';
import GoogleLogo from '../assets/google-logo.png';



const Login = () => {
  
  const handleLogin=(e)=>{
    e.preventDefault();
    console.log("Login Button Clicked");
    console.log("Form Data :",formData);
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-wrapper">

         
       <div className="blur-background">
        <div className="white-background">
            <header className='login-header'>

            </header>
          <section className='login-section'>
            <div className="home-row">
              <div className="home-left-column">
                <form className="login-div" onSubmit={handleLogin}>
                  <h1 className="welcome-large-text">Welcome Back</h1>
                  <p className="login-small-text">Enter your Sign in credentials and get started</p>
                  <div className="login-form">
                    <input type="text" id="email" className="login-textbox email-textbox" placeholder="Enter your email" onChange={handleChange} />
                    <div className="password-input-div">
                      <input type="password" id="password" className="login-textbox password-textbox" placeholder="Enter your password" onChange={handleChange}/>
                    </div>
                    <input type="checkbox" className="remember-me-checkbox" />
                    <label className="remember-me-text">Remember me</label>
                    <span className="forgot-password-text">Forgot Password?</span>
                    <button className="auth-button" id="btnSignin">Sign in</button>
                    <button className="signin-with-google-button"><img src={GoogleLogo} alt="google logo" className="google-logo-image" /> Sign in with Google</button>
                    <p className="login-small-text dont-have-account-text">Don’t have an account?<Link to="/signup" className="sign-up-text">Sign up</Link></p>
                    <p className="validation-message-text">Email or password is incorrect, please try again!</p>
                  </div>
                </form>
              </div>
              <div className="home-right-column">
                <img src={BannerImage} alt="Home Banner Image" className="home-banner-image" />
                <img src={TopTriangle} alt="Top Middle Triangle" className="elements-3d top-middle-triangle" />
                <img src={BottomHalfCircle} alt="Bottom Middle Half Circle" className="elements-3d bottom-middle-half-circle" />
              </div>
            </div>
            <img src={TopTriangle} alt="Top Left Triangle" className="elements-3d top-left-triangle" />
            <img src={BottomHalfCircle} alt="Bottom Left Half Circle" className="elements-3d bottom-left-half-circle" />
            <img src={BottomRightTriangle} alt="Bottom Right Triangle" className="elements-3d bottom-right-triangle" />
          </section>
            <footer className="login-footer">
                <p className="footer-text">© {new Date().getFullYear()} Logics Global. All rights reserved.</p>
            </footer>
           </div>
        </div>   


    </div>


  )
}

export default Login
