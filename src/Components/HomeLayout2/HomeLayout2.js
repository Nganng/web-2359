import React, { Component } from "react"
import oval from "../../Images/oval.png"
import triangle from "../../Images/triangle.png"
import { Link } from "react-router-dom"
import "./HomeLayout2.css"
import "../../index.css"
class HomeLayout2 extends Component {
  render() {
    return (
      <div className="home-layout2-container">
        <div className="container">
          <div className="layout2-block">
            <div className="col-lg-8">
              <div className="image-wrapper-1">
                <img className="image-oval-1" src={oval} alt="image-oval" />
              </div>
              <p className="intro-1">
                {" "}
                Where Design, Technology and Strategy collide.{" "}
              </p>
              <p className="intro-2"> We created something beautiful </p>
              <Link className="about-company-text-2" to="/about">
                {" "}
                About our company
              </Link>
            </div>
            <div className="col-lg-4 image-wrapper">
              <img className="image-oval" src={oval} alt="image-oval" />
            </div>
          </div>
          <div className="layout2-block">
            <div className="col-lg-8">
              <div className="image-wrapper-1">
                <img className="image-oval-1" src={triangle} alt="image-oval" />
              </div>
              <p className="intro-1"> Calculated and iterative. </p>
              <p className="intro-2">
                {" "}
                We execute fast, analyse and iterate with thorough research and
                gusto{" "}
              </p>
              <Link className="about-company-text-2" to="/process">
                {" "}
                Learn more about our process
              </Link>
            </div>
            <div className="col-lg-4 image-wrapper">
              <img className="image-oval" src={triangle} alt="image-oval" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeLayout2
