// src/components/TileCard.jsx
import React from 'react';
import './TileCard.css';

const TileCard = ({ image, onClick }) => {
  return (
    <div
      className="tile-card"
      onClick={onClick}
      role="button"
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label="Open Modal"
    >
      <img src={image} alt="Tile" className="tile-image" loading="lazy" />
    </div>
  );
};

export default TileCard;
