import React from "react"
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <div className="nav-wrap">
        <div className="nav-main">
          <div className="nav-logo">
            <h1>Papa Segane.</h1>
          </div>
          <div className="consult">
            <a href="tel:+256782442281">
              <button>CONSULT</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
