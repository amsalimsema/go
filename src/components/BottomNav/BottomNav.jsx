import { BsArrowUpCircleFill } from "react-icons/bs";
import { FaAddressCard, FaChalkboardTeacher } from "react-icons/fa";
import { IoShareSocialSharp, IoBagCheckSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./BottomNav.css";

function BottomNav() {
  return (
    <div className="bottomnav_main">
      <a href="/#home">
        <BsArrowUpCircleFill title="Home" />
      </a>
      <a href="/#contact">
        <FaAddressCard title="Contact" />
      </a>

      <a href="/#contact">
        <IoShareSocialSharp title="Share On Social Media" />
      </a>

      <a href="/#product">
        <IoBagCheckSharp title="Products" />
      </a>

      <a href="/#instructions">
        <FaChalkboardTeacher title="Dr.Gen" />
      </a>
    </div>
  );
}

export default BottomNav;
