import { BsArrowUpCircleFill } from "react-icons/bs";
import { FaAddressCard, FaChalkboardTeacher } from "react-icons/fa";
import { IoShareSocialSharp, IoBagCheckSharp } from "react-icons/io5";

import "./BottomNav.css";

function BottomNav() {
  return (
    <div className="bottomnav_main">
      <BsArrowUpCircleFill title="Home" />

      <FaAddressCard title="Contact" />

      <IoShareSocialSharp title="Share On Social Media" />

      <IoBagCheckSharp title="Products" />

      <FaChalkboardTeacher title="Dr.Gen" />
    </div>
  );
}

export default BottomNav;
