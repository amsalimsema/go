import "./Contact.css";

import { motion } from "framer-motion";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-info">
        <motion.div
          className="contact_info_inner"
          whileInView={{ scale: [0.7, 1] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <h3>Get In Touch:</h3>
          <p>
            Establish the right product routine for your skin from our
            specialists. Ask questions related to skin issues. Are you trying to
            transition from a different product to gen organics? Know where to
            start. Talk to the right people, It's fast and free.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
