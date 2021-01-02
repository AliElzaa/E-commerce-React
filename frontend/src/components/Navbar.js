import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
    return (
      <nav className="navbar">
          {/* logo */}
          <div className="navbar_logo">
              <h2> Golden Shoe </h2>
          </div>
          {/* links */}
          <ul className="navbar__links">
              <li>
                  <Link to="/cart">
                      <i className="fas fa-shopping-cart"></i>
                      Cart
                      <span className="cartlogo__badge">0</span>

                  </Link>
              </li>
              <li>
                  <Link to="/">
                      {/* icon */}
                      Shop

                  </Link>
              </li>
          </ul>
          {/* hamburger menu */}
          <div className="hamburger__menu" onClick={click}>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </nav>
    )
}

export default Navbar;
