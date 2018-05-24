import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Footer.css"
class Header extends Component {
  state = {
    location: "Sing"
  }
  changeLocation = name => {
    this.setState({ location: name })
  }
  render() {
    return (
      <div className="footer-wrapper">
        <div className="row">
          <div className="column-1">
            <div className="location-text-wrapper">
              <p
                className="location-text"
                onClick={() => this.changeLocation("Sing")}
              >
                {" "}
                Singapore{" "}
              </p>
              <p
                className="location-text"
                onClick={() => this.changeLocation("Viet")}
              >
                {" "}
                Vietnam{" "}
              </p>
              <p className="location-text"> Indonesia </p>
            </div>
            {this.state.location === "Sing" && (
              <p className="location-text">
                3 Shenton Way, #20-09, Shenton House <br /> Singapore 068805
              </p>
            )}
            {this.state.location === "Viet" && (
              <p className="location-text">
                268 To Hien Thanh Street, Ward 15, District 10
                <br /> VietNam 068805
              </p>
            )}
            <p className="location-text"> enquiries@2359media.com </p>
            <p className="footer-text">
              {" "}
              © 2359 Media Pte Ltd 2016. All rights reserved{" "}
            </p>
          </div>

          <div className="column-1 footer">
            <Link
              className="social-text"
              to="https://www.facebook.com/2359media/"
            >
              {" "}
              Facebook{" "}
            </Link>

            <Link className="social-text" to="">
              {" "}
              Twitter{" "}
            </Link>

            <Link className="social-text" to="">
              {" "}
              Linkedin{" "}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
