import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <>
      <nav className="nav_main">
        <div className="nav_logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav_list">
          <ul>
            <li>
              <a href="/#product">
                <p className="link">Instructions</p>
              </a>
            </li>
            <li>
              <a href="/#contact">
                <p className="link">Contact</p>
              </a>
            </li>
            <li>
              <a href="/#product">
                <p className="link">Products</p>
              </a>
            </li>
            <li>
              <a href="/#testimonial">
                <p className="link">Testimonial</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="nav_btn">
          <button className="nav_btn-order">
            <a href="/#contact">
              <p className="link">Order Now</p>
            </a>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
