import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Strona Główna
          </Link>
        </li>
        <li className="nav-item" style={{ marginLeft: "auto" }}>
          <Link to="/bilety" className="nav-link">
            Bilety
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
