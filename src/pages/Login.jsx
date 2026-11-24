import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authBgImg from '../assets/images/login.png';
import {
  ArrowLeftIcon,
  EyeIcon,
  EyeOffIcon,
  GoogleIcon,
  FacebookIcon,
} from '../components/Icons';

function Login({ onAuthSuccess }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [infoMsg, setInfoMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleSocialClick = (provider) => {
    setError('');
    setInfoMsg(
      `${provider} login is simulated in this frontend-only version. Please use the email form below.`
    );
  };

  const handleForgotPassword = () => {
    setError('');
    setInfoMsg(
      'Password recovery is not available in this frontend-only version.'
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setInfoMsg('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password.trim()) {
      setError('Password cannot be empty.');
      return;
    }

    setSuccessMsg('Login successful! Redirecting to Home...');
    onAuthSuccess({ email: email.trim(), rememberMe });

    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="auth-page">
      {/* Left Section */}
      <div className="auth-left">
        <img src={authBgImg} alt="Delicious food platter" />
        <button type="button" className="auth-back-btn" onClick={handleBack}>
          <ArrowLeftIcon />
          <span>Back</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="auth-right">
        <div className="auth-form-box">
          <h1>Login</h1>

          <div className="social-auth-row">
            <button
              type="button"
              className="social-btn"
              onClick={() => handleSocialClick('Google')}
            >
              <GoogleIcon />
              <span>Signin with Google</span>
            </button>
            <button
              type="button"
              className="social-btn"
              onClick={() => handleSocialClick('Facebook')}
            >
              <FacebookIcon />
              <span>Signin with facebook</span>
            </button>
          </div>

          <div className="auth-divider">
            <span>Or Use Your Email</span>
          </div>

          {infoMsg && <div className="auth-alert info">{infoMsg}</div>}
          {error && <div className="auth-alert error">{error}</div>}
          {successMsg && <div className="auth-alert success">{successMsg}</div>}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="login-email">Email Address</label>
              <input
                id="login-email"
                type="email"
                placeholder="JohnDoecompany@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <div className="password-input-wrap">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-pwd-btn"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <div className="login-options-row">
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Keep me logged in</span>
              </label>

              <button
                type="button"
                className="forgot-link"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="auth-submit-btn">
              Log In
            </button>
          </form>

          <p className="auth-switch-text">
            Don&apos;t Have An Account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;