import React, { Component } from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import Company_Logo from "../../Images/Company_Logo.png"
import menu from "../../Images/menu.png"
import "./Header.css"
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="company-logo">
          <img className="logo-main" src={Company_Logo} alt="logo" />
        </div>
        <div className="items">
          <div className="item-menu">
            <img className="logo-main" src={menu} alt="logo" />
          </div>
          <NavLink
            exact={true}
            className="item"
            activeClassName="is-active"
            to="/"
          >
            Home
          </NavLink>
          <NavLink className="item" activeClassName="is-active" to="/about">
            About
          </NavLink>
          <NavLink className="item" activeClassName="is-active" to="/process">
            Process
          </NavLink>
          <NavLink className="item" activeClassName="is-active" to="/work">
            Works
          </NavLink>
          <NavLink className="item" activeClassName="is-active" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    )
  }
}

export default Header
