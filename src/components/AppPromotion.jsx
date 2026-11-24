import React, { useState } from 'react';

function AppPromotion() {
  const [storeMessage, setStoreMessage] = useState('');

  const handleStoreClick = (storeName) => {
    setStoreMessage(`The FOOD mobile app for ${storeName} is coming soon!`);
    setTimeout(() => setStoreMessage(''), 3000);
  };

  return (
    <section className="app-promo-section">
      <div className="container app-promo-grid">
        {/* Phone Mockup matching Figma */}
        <div className="phone-mockup-wrap">
          <div className="phone-frame">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="phone-logo">
                F<span>OO</span>D
              </div>
              <p className="phone-heading">Login To Your Account</p>
              <div className="phone-input">jondoecompany@gmail.com</div>
              <div className="phone-input">••••••••••••••</div>
              <div className="phone-btn">Login</div>
              <span className="phone-or">OR</span>
              <div className="phone-socials">
                <span>G Google</span>
                <span>f Facebook</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Copy matching Figma */}
        <div className="app-promo-content">
          <p className="section-subtitle">Download our app</p>
          <h2 className="section-title">
            Get The Groceries App <br />
            Order More Easily.
          </h2>
          <p className="app-promo-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>

          <div className="store-buttons">
            <button
              type="button"
              className="store-btn"
              onClick={() => handleStoreClick('Google Play')}
            >
              <span className="store-icon">▶</span>
              <div>
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </div>
            </button>

            <button
              type="button"
              className="store-btn"
              onClick={() => handleStoreClick('App Store')}
            >
              <span className="store-icon"></span>
              <div>
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </button>
          </div>

          {storeMessage && <p className="inline-info-msg">{storeMessage}</p>}
        </div>
      </div>
    </section>
  );
}

export default AppPromotion;