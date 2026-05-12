import React from 'react'
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/login-banner-image.png';
import TopTriangle from '../assets/top-triangle-3d.png';
import BottomHalfCircle from '../assets/bottom-half-circle-3d.png';
import BottomRightTriangle from '../assets/bottom-right-triangle-3d.png';
import GoogleLogo from '../assets/google-logo.png';


const Signup = () => {
  return (
    <div className="login-wrapper">

         
       <div className="blur-background">
        <div className="white-background">
            <header className='login-header'>

            </header>
          <section className='login-section'>
            <div className="home-row">
              <div className="home-left-column">
                <div className="login-div">
                  <h1 className="welcome-large-text">Welcome</h1>
                  <p className="login-small-text">Enter your Sign up credentials and get started</p>
                  <div className="login-form">
                    <input type="text" id="email" className="login-textbox email-textbox" placeholder="Enter your email" />
                    <div className="password-input-div">
                      <input type="password" id="password" className="login-textbox password-textbox" placeholder="Enter your password" />
                    </div>
                    <button className="auth-button sign-up-button" id="btnSignup">Sign up</button>
                    <button className="signin-with-google-button"><img src={GoogleLogo} alt="google logo" className="google-logo-image" /> Sign up with Google</button>
                    <p className="login-small-text dont-have-account-text">Already have an account?<Link to="/login" className="sign-up-text">Sign in</Link></p>
                    <p className="validation-message-text">Email or password is incorrect, please try again!</p>
                  </div>
                </div>
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

export default Signup
