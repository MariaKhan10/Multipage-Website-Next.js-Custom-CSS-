import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact">
      <section className="contact-section">
        <div className="contact-container">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">Feel Free to Contact Us.</p>
          </div>
          <div className="form-wrapper">
            <div className="flex-wrap">
              <div className="input-field">
                <div className="relative">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" />
                </div>
              </div>
              <div className="input-field">
                <div className="relative">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>
              <div className="input-field" style={{ flex: '0 0 100%' }}>
                <div className="relative">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="h-32" defaultValue={""} />
                </div>
              </div>
              <div className="input-field" style={{ flex: '0 0 100%' }}>
                <button className="submit-button">Submit</button>
              </div>
              <div className="contact-info">
                <a href="mailto:mariasattire@email.com">mariasattire@email.com</a>
                <p>
                  Pechs, Khi
                  <br />
                  Karachi, Pakistan
                </p>
                <span className="social-icons">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
