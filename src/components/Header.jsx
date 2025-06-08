import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  return (
    <header className="header">
      <button className="menu-icon" onClick={toggleMenu}>
        ☰
      </button>
      {showMenu && (
        <div className="modal-menu">
          <button className="close-button" onClick={closeMenu}>×</button>
          <nav>
            <ul>
              <li><Link to="/" onClick={closeMenu}>トップ</Link></li>
              <li><Link to="/profile" onClick={closeMenu}>自己紹介</Link></li>
              <li><Link to="/works" onClick={closeMenu}>制作</Link></li>
              <li><Link to="/interest" onClick={closeMenu}>探求</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;