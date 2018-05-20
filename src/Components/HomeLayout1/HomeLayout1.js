import React, { Component } from "react"
import { Link } from "react-router-dom"
import device from "../../Images/device.png"
import "./HomeLayout1.css"
class HomeLayout1 extends Component {
  render() {
    return (
      <div className="home-layout1-container">
        <div className="column left">
          <p className="slogan"> Transforming </p>
          <p className="slogan"> Tomorrow </p>
          <p className="slogan"> Together </p>
          <p className="introduce">
            {" "}
            Award-winning digital engineering agency focusing on mobile-centric
            softwares and solutions.
          </p>
          <Link className="about-company-text" to="/about">
            {" "}
            About our company
          </Link>
        </div>
        <div className="column right">
          <img className="image-introduce" src={device} alt="device-image" />
        </div>
      </div>
    )
  }
}

export default HomeLayout1
