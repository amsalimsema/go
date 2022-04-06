import { BsPersonCircle, BsFillBagFill, BsFillShareFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";

import "./BottomNav.css";

function BottomNav() {
  return (
    <div className="bottomnav_main">
      <a href="/#contact">
        <FaAddressCard title="Contact" />
        <p>Contact</p>
      </a>

      <a href="/#contact">
        <BsFillShareFill title="Share On Social Media" />
        <p>Social</p>
      </a>

      <a href="/#product">
        <BsFillBagFill title="Products" />
        <p>Products</p>
      </a>

      <a href="/#instructions">
        <BsPersonCircle title="Dr.Gen" />
        <p>Dr.Gen</p>
      </a>
    </div>
  );
}

export default BottomNav;
