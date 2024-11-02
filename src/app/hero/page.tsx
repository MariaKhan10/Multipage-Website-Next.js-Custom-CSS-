import Image from "next/image";
import React from "react";
import "./hero.css"; // Link to the custom CSS file

const Hero = () => {
  return (
    <div id="hero">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Designer Evening Dresses.
              <br className="title-break" />
              Superior Collection of Designer Pieces
            </h1>
            <p className="hero-text">
              Dazzle like the stars when you step out to your event wearing your
              pick from our vast catalog of designer evening gowns. With
              occasion wear suitable for any black or white tie event, we are
              confident you will find the perfect evening dress for you.
            </p>
            <div className="hero-buttons">
              <button className="hero-button shop-now">Shop Now</button>
              <button className="hero-button subscribe">Subscribe</button>
            </div>
          </div>
          <div className="hero-image-container">
            <Image
              className="hero-image"
              alt="hero"
              width={500}
              height={500}
              src={"/pictures/image1.png"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
