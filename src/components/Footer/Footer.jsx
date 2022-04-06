import {
  BsWhatsapp,
  BsMessenger,
  BsInstagram,
  BsTwitter,
  BsTelephoneFill,
} from "react-icons/bs";
import "./Footer.css";
import gen from "../../img/logoP.png";
import pic from "../../img/face.png";

import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <div className="footer_wrap">
        <Contact />
        <div id="footer" className="footer">
          <div className="footer_right">
            <motion.div
              className="footer_right_inner"
              whileInView={{ scale: [0.7, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div>
                <h3>Talk to </h3>
                <h3>Our Specialist</h3>
                <br />
                <p>Dr.Gen</p>
                <button>
                  <Link to="/">
                    <small>START NOW</small>
                  </Link>
                </button>
              </div>
              <div>
                <div
                  whileInView={{ scale: [0.7, 1] }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <img src={pic} alt="pic" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="footer_left">
            <div>
              <a href="/#contact">
                <BsWhatsapp title="WhatsApp" style={{ color: "#25D366" }} />
              </a>

              <a href="/#contact">
                <BsMessenger title="Messenger" style={{ color: "#006AFF" }} />
              </a>

              <a href="/#product">
                <BsInstagram title="Instagram" style={{ color: "#8a3ab9" }} />
              </a>

              <a href="/#instructions">
                <BsTwitter title="Twitter" style={{ color: " #00acee" }} />
              </a>
              <a href="/#instructions">
                <BsTelephoneFill
                  title="Make a call"
                  style={{ color: "rgb(0,0,0,0.6)" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_copyright">
          <img src={gen} alt="footer logo" />
          <p>
            &copy;{new Date().getFullYear()}&nbsp;Gen Organics. Made in Uganda
            with &#10084;&#65039;
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
