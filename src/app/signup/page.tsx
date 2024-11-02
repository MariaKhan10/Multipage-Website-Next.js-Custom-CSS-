import React from 'react';
import './signup.css';

const Signup = () => {
  return (
    <div id="signup">
      <section className="signup-section">
        <div className="signup-container">
          <div className="left-content">
            <h1>Join our Royal Circle</h1>
            <p>
              Unlock exclusive access to the latest princess gowns, fancy frocks, and timeless pieces crafted just for you. Be the first to know about new arrivals, receive styling tips, and enjoy special offers. Sign up now to add a touch of elegance to your wardrobe and embrace the charm of every occasion!
            </p>
          </div>
          <div className="form-container">
            <h2 className="form-title">Sign Up</h2>
            <div className="input-field">
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                name="full-name"
              />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
              />
            </div>
            <button className="submit-button">Submit</button>
            <p className="additional-text">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
