import { motion } from "framer-motion"
import ara from "../../img/ara.png"
import ara2 from "../../img/ara2.png"
import ara5 from "../../img/ara5.png"
import ara3 from "../../img/ara3.png"

import "./service.css"
function Service() {
  return (
    <div id="home">
      <div className="service_main">
        <div className="service_container">
          <div className="service_left">
            <motion.div
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="service_left-text">
                <h4>
                  Get rid of
                  <span style={{ color: "red", fontStyle: "italic" }}>
                    {" "}
                    Bad Luck
                    <br />
                  </span>{" "}
                  and{" "}
                  <span style={{ color: "red", fontStyle: "italic" }}>
                    all evil Witchcraft!
                  </span>
                </h4>
                <p>
                  The evil chains of bad luck, generational curses, depression,
                  failure, sickness and bad dreams will be broken!
                </p>
                <p>
                  {" "}
                  &#10004;&nbsp;&nbsp;Suffering a Persistant illness?
                  <br />
                  &#10004;&nbsp;&nbsp;Working Hard but NO Progress?
                  <br />
                  &#10004;&nbsp;&nbsp;Struggling with an Addiction?
                  <br />
                  &#10004;&nbsp;&nbsp;Need to Recieve a MIRACLE?
                </p>
              </div>
            </motion.div>
          </div>
          <div className="service_right">
            <motion.div
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 2 }}
            >
              <img src={ara} alt="person" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* second */}

      <div className="service_main">
        <div className="service_container-2">
          <div className="service_right">
            <motion.div
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 2 }}
            >
              <img src={ara2} alt="person" />
            </motion.div>
          </div>
          <div className="service_left">
            <motion.div
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="service_left-text">
                <h4>
                  All the life problems <br />
                  <span style={{ color: "red", fontStyle: "italic" }}>
                    you face end Today!
                  </span>
                </h4>
                <p>
                  I specialize in sentimental life problems; in work, in
                  business, family affairs, court cases, spiritual illnesses, in
                  marriage, and in love. I want you to be with your loved one. I
                  want you to succeed in your business and work. Allow me to
                  help you with any problem you’re facing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* third */}
      <div className="service_main">
        <div className="service_container">
          <div className="service_left">
            <motion.div
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="service_left-text">
                <h4>
                  Divine Spiritual
                  <br />
                  <span style={{ color: "red", fontStyle: "italic" }}>
                    {" "}
                    Cleansing & Healing!
                  </span>
                </h4>
                <p>
                  We are unaware of living with tokoloshe, black magic,
                  witchcraft, evil spirits and curses until its too late. This
                  result into laziness, persistent financial problems, poor
                  health, bad dreams, illness and addictions. I can help you
                  over come any of these issues— generational curses and omens
                  by cleansing you and your entire family.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="service_right">
            <motion.div
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 2 }}
            >
              <img src={ara3} alt="person" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* fourth */}

      <div className="service_main">
        <div className="service_container-2">
          <div className="service_right">
            <motion.div
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 2 }}
            >
              <img src={ara} alt="person" />
            </motion.div>
          </div>
          <div className="service_left">
            <motion.div
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="service_left-text">
                <h4>
                  <span style={{ color: "red", fontStyle: "italic" }}>
                    Wiccan Spells
                  </span>{" "}
                  <br />
                  Restore Lost Love
                </h4>
                <p>
                  I have the spiritual divine powers to work on all kinds of
                  love and relationship problems— marriage issues like cheating
                  partners, divorce, lost lover rituals, finding the right lover
                  for you, spiritual counseling and guidance, sexual problems in
                  both men and women and any more. Contact me Today and find the
                  help you need.
                </p>

                <h4>
                  <span style={{ color: "red", fontStyle: "italic" }}>
                    Strong Wanga Spells <br />
                  </span>{" "}
                  For Love, Luck & Riches!
                </h4>
                <p>
                  Family misunderstandings, reconciling with a loved one, can’t
                  get children, recovering lost property, bad dreams and court
                  cases. Do not hesitate to contact me in private. The rituals I
                  perform give results in just 48 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* fifth */}
      <div className="service_main">
        <div className="service_container">
          <div className="service_left">
            <motion.div
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="service_left-text">
                <h4>
                  Spells & Amulets
                  <br />
                  <span style={{ color: "red", fontStyle: "italic" }}>
                    {" "}
                    Open Your Luck!
                  </span>
                </h4>
                <p>
                  Are you battling with accumulating debts, highly taxed
                  mortgages, failing businesses, bank loans or other financial
                  hardships like being blacklisted, unemployed, low salaries and
                  more. I can help you regain great wealth or recover all your
                  lost fortune. I can also help you win lotto or find the wealth
                  in other forms of gambling
                </p>
              </div>
            </motion.div>
          </div>
          <div className="service_right">
            <motion.div
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 2 }}
            >
              <img src={ara5} alt="person" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
