import { motion } from "framer-motion";
import "./Header.css";
import person from "../../img/person.png";

function Header() {
  return (
    <div id="home">
      <div className="header_main">
        <div className="header_container">
          <div className="header_left">
            <motion.div
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="header_left-text">
                <h1>Gen Organics</h1>
                <p>
                  Proudly made from mother nature. Formulated from the finest
                  organic ingredients to nourish, protect and care for your
                  skin.
                </p>
                <div className="header_left-btn">
                  <button className="header-btn">
                    <a href="/#contact">
                      <p className="link">General Enquiries & Sales</p>
                    </a>
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
    </div>
  );
}

export default Header;
