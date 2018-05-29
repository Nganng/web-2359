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
          <div className="col-xs">
            <p className="slogan">
              {" "}
              Transforming <br /> Tomorrow <br /> Together{" "}
            </p>
            <div className="header-logo-1">
              <img
                className="image-introduce-1"
                src={device}
                alt="device-image"
              />
            </div>
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
          <div className="col-xs header-logo">
            <img className="image-introduce" src={device} alt="device-image" />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeLayout1
