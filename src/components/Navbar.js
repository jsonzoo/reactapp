import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import './style/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);


  // listens to window resizing - prevents slide in aniamtion from triggering when minimizing
  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) {
        navRef.current.classList.add('no-transition');
        setTimeout(() => {
          // removes no-transition right after resizing
          navRef.current.classList.remove('no-transition');
        }, 200);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="logo">
        <a href="https://www.gmma7.org/" target="_blank" rel="noopener noreferrer">
          <img alt="GMMA" src="/gmma7.png" />
        </a>
      </div>

      <nav
        ref={navRef}
        className={`nav-links ${isOpen ? 'open' : ''}`}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
        <Link to="/missions" onClick={() => setIsOpen(false)}>MISSIONS</Link>
        <Link to="/events" onClick={() => setIsOpen(false)}>EVENTS</Link>
        <Link to="/connect" onClick={() => setIsOpen(false)}>CONNECT</Link>
      </nav>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </header>
  );
}