import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SendIcon } from './Icons';

function Footer() {
  const [email, setEmail] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState({ type: '', text: '' });

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setNewsletterMsg({
        type: 'error',
        text: 'Please enter a valid email address.',
      });
      return;
    }

    setNewsletterMsg({
      type: 'success',
      text: 'Subscribed! Weekly updates will arrive via email.',
    });
    setEmail('');
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand-logo">
              F<span>OO</span>D
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <p className="footer-contact-info">
              support@fooddelivery.com &bull; +1 (555) 234-5678
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#home">About Us</a></li>
              <li><a href="#services">Blog</a></li>
              <li><a href="#menu">All Products</a></li>
              <li><a href="#contact">Locations Map</a></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Order tracking</a></li>
              <li><a href="#menu">Wish List</a></li>
              <li><Link to="/login">My account</Link></li>
              <li><Link to="/signup">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <p className="newsletter-copy">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe} noValidate>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" aria-label="Subscribe">
                <SendIcon />
              </button>
            </form>
            {newsletterMsg.text && (
              <p className={`form-feedback ${newsletterMsg.type}`}>
                {newsletterMsg.text}
              </p>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>All Rights Reserved @ Company 2022</p>
          <div className="footer-legal">
            <a href="#contact">Terms &amp; Conditions</a>
            <a href="#contact">Privacy &amp; Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;