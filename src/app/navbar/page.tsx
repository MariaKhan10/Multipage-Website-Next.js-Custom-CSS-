"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="navbar">
        <div className="nav-container">
          {/* Logo and Site Title */}
          <a className="logo">
            <Image
              alt="logo"
              width={40}
              height={80}
              src="/pictures/logo.png"
              className="logo-image"
            />
            <span className="site-title">Maria’s Royal Attire</span>
          </a>

          {/* Hamburger Menu Button for Mobile */}
          <button onClick={toggleMenu} className="hamburger-btn">
            <svg className="hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Desktop Navbar Links */}
          <nav className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/accessories" className="nav-link">Festive Favourites</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/signup" className="nav-link">Sign Up</Link>
          </nav>

          {/* Log In Button for Desktop */}
          <button className="login-btn">
            Log In
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <Link href="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
            <Link href="/accessories" className="mobile-link" onClick={toggleMenu}>Festive Favourites</Link>
            <Link href="/contact" className="mobile-link" onClick={toggleMenu}>Contact</Link>
            <Link href="/signup" className="mobile-link" onClick={toggleMenu}>Sign Up</Link>
            <button className="mobile-login-btn" onClick={toggleMenu}>Log In</button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
