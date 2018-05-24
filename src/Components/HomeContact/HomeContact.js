import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./HomeContact.css"
class HomeContact extends Component {
  render() {
    return (
      <div className="home-contact-container">
        <div className="home-contact-wrapper">
          <p className="home-contact-text">
            {" "}
            Let’s build something <br /> together{" "}
            <span className="change-color">
              if you like <br /> what we do.
            </span>
          </p>
          <Link className="contact-us-text" to="/contact">
            {" "}
            Contact us
          </Link>
        </div>
      </div>
    )
  }
}

export default HomeContact
