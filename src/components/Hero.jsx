import React, { useState } from 'react';
import heroWomanImg from '../assets/images/Cheerful Woman Enjoying Fresh Salad.png';
import burgerImg from '../assets/images/burger.jpg.jpg';
import { PlayIcon, ClockIcon, CartIcon } from './Icons';

function Hero() {
  const [showOrderProcess, setShowOrderProcess] = useState(false);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        {/* Left Content matching Figma */}
        <div className="hero-content">
          <div className="hero-pill">
            <span>More than Faster</span>
            <span role="img" aria-label="strawberry">🍓</span>
          </div>

          <h1 className="hero-title">
            Be The Fastest <br />
            In Delivering <br />
            Your <span>Food</span>
          </h1>

          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          <div className="hero-cta-group">
            <a href="#menu" className="btn-primary">
              Order Now
            </a>

            <button
              type="button"
              className="btn-outline"
              onClick={() => setShowOrderProcess((prev) => !prev)}
            >
              <span className="play-circle">
                <PlayIcon />
              </span>
              Order Process
            </button>
          </div>

          {showOrderProcess && (
            <div className="order-process-box">
              <strong>Order Process:</strong> 1. Choose your meal from our menu
              &rarr; 2. Add items &amp; adjust quantity in cart &rarr; 3. Fast
              30-minute doorstep delivery!
            </div>
          )}
        </div>

        {/* Right Visual matching Figma */}
        <div className="hero-visual">
          <div className="hero-red-backdrop" />

          <img
            src={heroWomanImg}
            alt="Cheerful woman enjoying fresh salad"
            className="hero-main-img"
          />

          <svg
            className="hero-dashed-arrow"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              d="M10 65 C35 60, 50 40, 35 30 C22 22, 25 45, 48 40 C62 37, 68 22, 65 10"
              stroke="#EE4035"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <polygon points="60,8 70,5 66,15" fill="#EE4035" />
          </svg>

          <div className="hero-triangle-accent" />

          {/* Floating Card 1: Fresh Orange */}
          <div className="floating-card card-orange">
            <div className="mini-food-dot">🍊</div>
            <p className="mini-title">Fresh Orange</p>
            <p className="mini-price">$44.60</p>
            <span className="mini-sub">Free Shipping</span>
            <a href="#menu" className="mini-cart-btn" aria-label="Order orange">
              <CartIcon size={14} />
            </a>
          </div>

          {/* Floating Card 2: Delivery Time */}
          <div className="floating-card card-delivery">
            <ClockIcon />
            <div>
              <strong>Delivery</strong>
              <span>30 Min</span>
            </div>
          </div>

          {/* Floating Card 3: American Burger */}
          <div className="floating-card card-burger">
            <div>
              <strong>American Burger</strong>
              <div className="stars">★★★★★</div>
              <span className="burger-price">$8.75</span>
            </div>
            <img
              src={burgerImg}
              alt="American Burger"
              className="floating-burger-thumb"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;