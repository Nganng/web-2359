import React, { Component } from "react"
import { Link } from "react-router-dom"
import device from "../../Images/device.png"
import "../../index.css"
import "./HomeLayout1.css"
class HomeLayout1 extends Component {
  render() {
    return (
      <div className="home-banner container">
        <div className="row">
          <div className="column-1">
            <p className="slogan">
              {" "}
              Transforming <br /> Tomorrow <br /> Together{" "}
            </p>
            <p className="introduce">
              {" "}
              Award-winning digital engineering agency focusing on
              mobile-centric softwares and solutions.
            </p>
            <Link className="about-company-text" to="/about">
              {" "}
              About our company
            </Link>
          </div>
          <div className="column-1 header-logo">
            <img className="image-introduce" src={device} alt="device-image" />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeLayout1
