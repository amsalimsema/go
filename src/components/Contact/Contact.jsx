import "./Contact.css";
import pic from "../../img/face.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-card">
        <motion.div
          className="contact_card_inner"
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

      <div className="contact-info">
        <motion.div
          className="contact_info_inner"
          whileInView={{ scale: [0.7, 1] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <p>
            Establish the right product routine for your skin from our
            specialists. Ask questions related to skin issues. Are you trying to
            transition from a different product to gen organics? Know where to
            start.
          </p>
          <br />
          <p> Talk to the right people, It's fast and free.</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
