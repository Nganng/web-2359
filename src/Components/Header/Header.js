import React, { Component } from "react"
import { Link } from "react-router-dom"
import Company_Logo from "../../Images/Company_Logo.png"
import "./Header.css"
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="company-logo">
          <img className="logo-main" src={Company_Logo} alt="logo" />
        </div>
        <div className="items">
          <Link className="item" to="/">
            {" "}
            Home
          </Link>
          <Link className="item" to="/about">
            {" "}
            About
          </Link>
          <Link className="item" to="/process">
            {" "}
            Process
          </Link>
          <Link className="item" to="/work">
            {" "}
            Works
          </Link>
          <Link className="item" to="/contact">
            {" "}
            Contact
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
