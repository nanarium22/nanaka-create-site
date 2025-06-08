// src/components/NavBar.jsx
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">トップ</Link></li>
        <li><Link to="/profile">自己紹介</Link></li>
        <li><Link to="/works">制作</Link></li>
        <li><Link to="/interest">探求</Link></li>
      </ul>
    </nav>
  );
}
export default NavBar;