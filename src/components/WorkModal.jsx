import React from 'react';
import './WorkModal.css';

function WorkModal({ isOpen, onClose, title, image, description }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onClose}>閉じる</button>
      </div>
    </div>
  );
}

export default WorkModal;