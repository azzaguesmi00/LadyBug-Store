import React from 'react';
import styled from 'styled-components'; // Import styled-components
import { Link } from 'react-router-dom';
import '../Styles/Hero.css';

const DotsOverlay = styled.div`
  position: fixed;
 
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle, rgba(255, 0, 0, 0.5) 10%, transparent 10%), radial-gradient(circle, rgba(0, 0, 0, 0.5) 10%, transparent 10%);
    background-size: 50px 50px; /* Size of the dots */
    background-position: 0 0, 25px 25px; /* Adjust the starting position */
    animation: moveDots 10s infinite linear;
  }

  @keyframes moveDots {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <section className="hero">
      {/* Dots background */}
      <DotsOverlay />
      <div className="hero-content">
        <h1>Welcome to Ladybug Store!</h1>
        <p>Your favorite spot for all things stylish and fun.</p>
        <Link to="/shop">
          <button className="shop-now-btn">Shop Now</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

