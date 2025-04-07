
import React from 'react';
import '../Styles/FloatingDots.css'; // Import the CSS for floating dots

const FloatingDots = () => {
  return (
    <div className="floating-dots">
      <div className="dot" style={{ '--i': 1 }}></div>
      <div className="dot" style={{ '--i': 2 }}></div>
      <div className="dot" style={{ '--i': 3 }}></div>
      <div className="dot" style={{ '--i': 4 }}></div>
      <div className="dot" style={{ '--i': 5 }}></div>
    </div>
  );
};

export default FloatingDots;
