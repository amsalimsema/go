import { motion } from "framer-motion";

import product from "../../img/pic.jpg";
import "./Products.css";
function Products() {
  return (
    <div id="products">
      {/* first product */}
      <div className="products_wrap-1">
        <div className="products_one">
          <img src={product} alt="product" />
          <div className="products_one-text">
            <h2>Gen Organics</h2>
            <h1>Mugavu Pure Soap</h1>
            <h2>Available in: 200g, 230g, 260g</h2>
          </div>
        </div>
        <div className="products_two">
          <div className="products_two-text">
            <motion.h1
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              Mugavu Pure Soap.
            </motion.h1>

            <motion.h2
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              Instructions For Use.
            </motion.h2>

            <br />
            <motion.h3
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              Use to bath with foam formed. Apply foam to affected areas for
              about 10 min, let it dry and then wash it off and apply generously
              gen organics pure jelly. Noticeable results after 72hrs of use.
            </motion.h3>

            <motion.button
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="products_btn"
            >
              <p>Talk To Gen Doctor</p>
            </motion.button>
          </div>
        </div>
      </div>
      {/* second product */}

      <div className="products_wrap-2">
        <div className="products_two">
          <div className="products_two-text">
            <motion.h1
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              Mugavu Pure Soap.
            </motion.h1>

            <motion.h2
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              Instructions For Use.
            </motion.h2>

            <br />
            <motion.h3
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              Use to bath with foam formed. Apply foam to affected areas for
              about 10 min, let it dry and then wash it off and apply generously
              gen organics pure jelly. Noticeable results after 72hrs of use.
            </motion.h3>

            <motion.button
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="products_btn"
            >
              <p>Talk To Gen Doctor</p>
            </motion.button>
          </div>
        </div>
        <div className="products_one">
          <img src={product} alt="product" />
          <div className="products_one-text">
            <h2>Gen Organics</h2>
            <h1>Mugavu Pure Soap</h1>
            <h2>Available in: 200g, 230g, 260g</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
