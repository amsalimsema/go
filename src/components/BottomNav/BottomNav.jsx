//import { BsArrowUpCircleFill } from "react-icons/bs";
import { FaAddressCard, FaChalkboardTeacher } from "react-icons/fa";
import { IoShareSocialSharp, IoBagCheckSharp } from "react-icons/io5";
//import { Link } from "react-router-dom";

import "./BottomNav.css";

function BottomNav() {
  return (
    <div className="bottomnav_main">
      {/* <a href="/#home">
        <BsArrowUpCircleFill title="Home" />
        <p>Home</p>
      </a> */}
      <a href="/#contact">
        <FaAddressCard title="Contact" />
        <p>Contact</p>
      </a>

      <a href="/#contact">
        <IoShareSocialSharp title="Share On Social Media" />
        <p>Social</p>
      </a>

      <a href="/#product">
        <IoBagCheckSharp title="Products" />
        <p>Products</p>
      </a>

      <a href="/#instructions">
        <FaChalkboardTeacher title="Dr.Gen" />
        <p>Dr.Gen</p>
      </a>
    </div>
  );
}

export default BottomNav;
