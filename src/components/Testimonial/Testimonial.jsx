import { RiStarSFill } from "react-icons/ri";
import { motion } from "framer-motion";

import "./Testimonial.css";
import { users } from "../../Data";

function Testimonial() {
  return (
    <motion.div
      whileInView={{ scale: [0.95, 1] }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div id="testimonial" className="testimonial">
        <h3 className="testimonial_title">
          0ur satisfied customers are saying
          <br />
          <RiStarSFill /> <RiStarSFill />
          <RiStarSFill /> <RiStarSFill /> <RiStarSFill />
        </h3>
        {users.map((user) => (
          <div key={user.id} className="testimonial_wrap">
            <p className="testimonial_avatar">
              <img src={user.avatar} width="90" height="90" alt="avatar" />
            </p>
            <p className="testimonial_comment">&quot; {user.comment} &quot;</p>
            <p className="testimonial_name_title">
              {user.name}, {user.title}
            </p>

            <p className="testimonial_company">{user.company}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonial;
