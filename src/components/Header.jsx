import React, { useState } from 'react';
import ModalMenu from './ModalMenu';
import './Header.css';

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="header">
      <button className="menu-btn" onClick={() => setShowModal(true)}>
        ☰
      </button>
      {showModal && <ModalMenu onClose={() => setShowModal(false)} />}
    </header>
  );
}

export default Header;