import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { validateLoginForm } from "../utils/validators";
import "../styles/Login.css";
import BannerImage from "../assets/login-banner-image.png";
import TopTriangle from "../assets/top-triangle-3d.png";
import BottomHalfCircle from "../assets/bottom-half-circle-3d.png";
import BottomRightTriangle from "../assets/bottom-right-triangle-3d.png";
import GoogleLogo from "../assets/google-logo.png";


const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setApiError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const validationErrors = validateLoginForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser(formData);

      console.log("Login Success:", response);


      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);

      setApiError(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="blur-background">
        <div className="white-background">
          <header className="login-header"></header>

          <section className="login-section">
            <div className="home-row">
              <div className="home-left-column">
                <form className="login-div" onSubmit={handleLogin}>
                  <h1 className="welcome-large-text">Welcome Back</h1>

                  <p className="login-small-text">
                    Enter your Sign in credentials and get started
                  </p>

                  <div className="login-form">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      className="login-textbox email-textbox"
                      placeholder="Enter your email"
                      onChange={handleChange}
                    />

                    {errors.email && (
                      <p className="validation-message-text">{errors.email}</p>
                    )}

                    <div className="password-input-div">
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        className="login-textbox password-textbox"
                        placeholder="Enter your password"
                        onChange={handleChange}
                      />
                    </div>

                    {errors.password && (
                      <p className="validation-message-text">{errors.password}</p>
                    )}

                    {apiError && <p className="validation-message-text">{apiError}</p>}

                    <div className="remember-forgot-row">
                      <div>
                        <input
                          type="checkbox"
                          className="remember-me-checkbox"
                        />

                        <label className="remember-me-text">Remember me</label>
                      </div>

                      <span className="forgot-password-text">
                        Forgot Password?
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="auth-button"
                      disabled={loading}
                    >
                      {loading ? "Signing In..." : "Sign in"}
                    </button>

                    <button type="button" className="signin-with-google-button">
                      <img
                        src={GoogleLogo}
                        alt="google logo"
                        className="google-logo-image"
                      />
                      Sign in with Google
                    </button>

                    <p className="login-small-text dont-have-account-text">
                      Don’t have an account?
                      <Link to="/signup" className="sign-up-text">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>

              <div className="home-right-column">
                <img
                  src={BannerImage}
                  alt="Home Banner"
                  className="home-banner-image"
                />

                <img
                  src={TopTriangle}
                  alt="triangle"
                  className="elements-3d top-middle-triangle"
                />

                <img
                  src={BottomHalfCircle}
                  alt="half-circle"
                  className="elements-3d bottom-middle-half-circle"
                />
              </div>
            </div>

            <img
              src={TopTriangle}
              alt="triangle"
              className="elements-3d top-left-triangle"
            />

            <img
              src={BottomHalfCircle}
              alt="half-circle"
              className="elements-3d bottom-left-half-circle"
            />

            <img
              src={BottomRightTriangle}
              alt="triangle"
              className="elements-3d bottom-right-triangle"
            />
          </section>

          <footer className="login-footer">
            <p className="footer-text">
              © {new Date().getFullYear()} Logics Global. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
