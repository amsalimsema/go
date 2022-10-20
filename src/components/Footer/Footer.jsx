import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div>
          <a href="tel:+256782442281">
            <button>+256782442281</button>
          </a>
        </div>
        <p>
          *DISCLAIMER: All services are fully spiritual and results may vary.
          The trademarks or logos appearing on this website belong to their
          respective parent companies.There are only used for descriptive
          purposes.In the nature of transparency and authenticity, I do offer
          traditional ritual services for those in need. Are they required for
          everyone? Absolutely not. Will you receive value & insight even if you
          don’t want to take up my services? Absolutely. Some people will take
          my services, implement them by themselves, and see the breakthroughs.
          Some people will see what’s possible, and know that working hand in
          hand with my services is just what they need to get results even
          faster. It’s completely up to you but I hope that you’ll at least try
          one of my services, use it, and let the world know what you think!
        </p>
        <p id="copy">&copy;{new Date().getFullYear()}&nbsp;Papa Segane.</p>
        <p id="sema">
          Made with &#10084;&#65039;&nbsp;by{" "}
          <a href="tel:+256782442281">Sema</a>
        </p>
      </div>
    </>
  )
}

export default Footer
