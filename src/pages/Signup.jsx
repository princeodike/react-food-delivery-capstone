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

function Signup({ onAuthSuccess }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
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
      `${provider} signup is simulated in this frontend-only version. Please use the email form below.`
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

    if (!agreedTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }

    setSuccessMsg('Account created successfully! Redirecting to Home...');
    onAuthSuccess({ email: email.trim() });

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
          <h1>Signup</h1>

          <div className="social-auth-row">
            <button
              type="button"
              className="social-btn"
              onClick={() => handleSocialClick('Google')}
            >
              <GoogleIcon />
              <span>Signup with Google</span>
            </button>
            <button
              type="button"
              className="social-btn"
              onClick={() => handleSocialClick('Facebook')}
            >
              <FacebookIcon />
              <span>Signup with facebook</span>
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
              <label htmlFor="signup-email">Email Address</label>
              <input
                id="signup-email"
                type="email"
                placeholder="JohnDoecompany@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <div className="password-input-wrap">
                <input
                  id="signup-password"
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

            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
              />
              <span>
                I agree to the <u>Terms of Service</u> and <u>Privacy Policy</u>
              </span>
            </label>

            <button type="submit" className="auth-submit-btn">
              signup
            </button>
          </form>

          <p className="auth-switch-text">
            Already Have An Account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;