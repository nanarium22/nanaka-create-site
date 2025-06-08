import React from 'react';
import { Link } from 'react-router-dom';
import './ModalMenu.css';

function ModalMenu({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <nav>
          <ul>
            <li><Link to="/profile">自己紹介</Link></li>
            <li><Link to="/works">制作</Link></li>
            <li><Link to="/interest">探求</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ModalMenu;