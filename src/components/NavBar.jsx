// src/components/NavBar.jsx
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">トップ</Link></li>
        <li><Link to="/profile">自己紹介</Link></li>
        <li><Link to="/works"></Link></li>
        <li><Link to="/interest"></Link></li>
      </ul>
    </nav>
  );
}
export default NavBar;