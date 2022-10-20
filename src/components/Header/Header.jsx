import { motion } from "framer-motion"
import "./Header.css"
import person from "../../img/cover.png"

function Header() {
  return (
    <div id="home">
      <div className="header_main">
        <div className="header_container">
          <div className="header_left">
            <motion.div
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="header_left-text">
                <h1>
                  Divination{" "}
                  <span style={{ color: "red", fontStyle: "italic" }}>
                    through
                  </span>{" "}
                  <br />
                  Native Spiritual Healing!
                </h1>
                <p>
                  Ancestral spiritual guidance, financial breakthrough, marriage
                  problems, break ups and divorce. Divine spiritual healing and
                  cleansing for evil spirits, generational curses, bad luck,
                  witchcraft, tokoloshe and bad dreams.
                </p>

                <a href="tel:+256782442281">
                  <button>+256782442281</button>
                </a>
                <p style={{ fontSize: "12px", fontStyle: "italic" }}>
                  *Disclaimer: &nbsp;All services are fully spiritual and
                  results may vary.
                </p>
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
  )
}

export default Header
