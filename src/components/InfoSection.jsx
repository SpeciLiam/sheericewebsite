// src/components/InfoSection.jsx
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './InfoSection.css'; // Create this CSS file for styling

const InfoSection = () => {
  return (
    <section className="info-section">
      <p>
        SheerIce family group for UGA AASA. Follow us on Instagram:
      </p>
      <div className="social-links">
        <a
          href="https://www.instagram.com/uga_aasa/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram className="instagram-icon" />
          UGA AASA
        </a>
        <a
          href="https://www.instagram.com/sheericesheercold/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram className="instagram-icon" />
          UGA SheerIce
        </a>
      </div>
    </section>
  );
};

export default InfoSection;
