// src/components/Modal.jsx
import React, { useEffect, useRef } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, content, image }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      // Focus the modal when it opens
      modalRef.current.focus();
      // Prevent background scrolling
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'show' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        tabIndex="-1"
        ref={modalRef}
        onKeyDown={handleKeyDown}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close Modal">
          &times;
        </button>
        <h2 id="modal-title">{title}</h2>
        {image && <img src={image} alt={title} className="modal-image" />}
        <p id="modal-description">{content}</p>
        {/* Placeholder for additional content */}
        <div className="modal-additional-content">
          {/* Add more elements here as needed */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
