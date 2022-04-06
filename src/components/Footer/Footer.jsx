import {
  BsWhatsapp,
  BsMessenger,
  BsInstagram,
  BsTwitter,
  BsTelephoneFill,
} from "react-icons/bs";
import "./Footer.css";
import gen from "../../img/logoP.png";

function Footer() {
  return (
    <div id="footer" className="footer">
      <div>
        <h2>Enquiries and Sales:</h2>
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
      <div>
        <img src={gen} alt="footer logo" />
        <p>
          &copy;{new Date().getFullYear()}&nbsp;Gen Organics.
          <br />
          Made in Uganda with &#10084;&#65039;
        </p>
      </div>
    </div>
  );
}

export default Footer;
