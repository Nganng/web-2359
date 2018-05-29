import React, { Component } from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import Company_Logo from "../../Images/Company_Logo.png"
import menu from "../../Images/menu.png"
import cancel from "../../Images/cancel.png"
import "./Header.css"
import { CSSTransition } from "react-transition-group"
class Header extends Component {
  state = {
    showedMenu: false
  }

  render() {
    return (
      <div className="header">
        <div className="company-logo">
          <img className="logo-main" src={Company_Logo} alt="logo" />
        </div>
        <div className="items">
          <div className="menu-wrapper">
            {this.state.showedMenu ? (
              <img
                className="logo-main"
                src={cancel}
                onClick={this.toggleMenu}
              />
            ) : (
              <img className="logo-main" src={menu} onClick={this.toggleMenu} />
            )}
            <CSSTransition
              in={this.state.showedMenu}
              unmountOnExit
              timeout={800}
              classNames="menuAnimation"
            >
              <div className="menu-content">
                <Link className="menu-text" to="/">
                  {" "}
                  Home
                </Link>
                <Link className="menu-text" to="/about">
                  {" "}
                  About
                </Link>
                <Link className="menu-text" to="/process">
                  {" "}
                  Process
                </Link>
                <Link className="menu-text" to="/work">
                  {" "}
                  Works
                </Link>
                <Link className="menu-text" to="/contact">
                  {" "}
                  Contact
                </Link>
              </div>
            </CSSTransition>
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

  toggleMenu = () => {
    this.setState({ showedMenu: !this.state.showedMenu })
  }
}

export default Header
