import React from "react"
import { motion } from "framer-motion"
import "./Testimonial.css"

import client from "../../img/client3.png"
import client1 from "../../img/client4.png"
import client2 from "../../img/client.png"

export const Testimonial = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], scale: [0.99, 1] }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div className="testimonial-main">
        <div className="testimonial-box">
          <p>
            <img src={client} alt="client" />
          </p>
          <p style={{ fontStyle: "italic" }}>Ashleigh</p>

          <p>-Cape Town-</p>
          <p>
            It had been years since I got a divorce but failed to find my true
            soulmate till I visited Great Segane. All I did was explain to him
            the man of my dreams and with in just weeks, my lovely husband
            showed up. He’s all I have ever dreamed to have in a man— handsome,
            hand working, God fearing, loving, caring, generous and kind. I am
            so happy and loved. Thank you man of God.
          </p>
        </div>
        <div className="testimonial-box">
          <p>
            <img src={client1} alt="client" />
          </p>
          <p style={{ fontStyle: "italic" }}>Lindelwa</p>

          <p>-Johannesburg-</p>
          <p>
            Baba I am here to thank you for opening up my luck. My funeral
            business is booming. It is attracting a lot of sales. I am busy
            setting up a new branch like you advised me. All the spiritual
            sicknesses I had are gone. I am walking properly. No back pains or
            weakness in my bones. I will soon be visiting you again soon Baba.
            There's my business friend I want to bring you. He need help also.
          </p>
        </div>
        <div className="testimonial-box">
          <p>
            <img src={client2} alt="client" />
          </p>
          <p style={{ fontStyle: "italic" }}>Mandla</p>

          <p>-Nelspruit-</p>
          <p>
            The blessed waters and spiritual bracelets you sent me have done so
            much miracles in my life Papa Segane. I feel more energetic,
            confident and passionate towards life in general. My love life is
            also awesome. I am so focused at work. I am getting in shape and
            great people are attracted towards me. No more depression and
            anxiety. I am living a happy financially free blessed life now.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
