// src/components/NavBar.jsx
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">トップ</Link></li>
        <li><Link to="/profile">自己紹介</Link></li>
        <li><Link to="/works">制作物</Link></li>
        <li><Link to="/interest">興味があること</Link></li>
        <li><Link to="/study">今勉強していること</Link></li>
        <li><Link to="/quiz">クイズ</Link></li>
      </ul>
    </nav>
  );
}
export default NavBar;