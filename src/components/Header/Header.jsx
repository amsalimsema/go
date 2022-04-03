import { motion } from "framer-motion";
import "./Header.css";
import person from "../../img/person.png";

function Header() {
  return (
    <div className="header_main">
      <div className="header_container" id="header">
        <div className="header_left">
          <motion.div
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <div className="header_left-text">
              <h1>Gen Organics</h1>
              <p>
                Proudly Made From Nature. Formulated From The Finest Organic
                Ingredients To Nourish, Protect And Care For Your Skin.
              </p>
              <div className="header_left-btn">
                <button className="header-btn">
                  <p>General Enquiries & Sales</p>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="header_right">
          <motion.div
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 2 }}
          >
            <img src={person} alt="person" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Header;
