import "./Navbar.css";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <>
      <nav className="nav_main">
        <div className="nav_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav_list">
          <ul>
            <li>
              <p>Instructions</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
            <li>
              <p>Products</p>
            </li>
            <li>
              <p>Testimonial</p>
            </li>
          </ul>
        </div>

        <div className="nav_btn">
          <button className="nav_btn-order">
            <p>Order Now</p>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
