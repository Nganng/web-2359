import React, { Component } from "react"
import "./AboutLayout1.css"
class HomeLayout1 extends Component {
  render() {
    return (
      <div className="container about-container">
        <p className="about-text-1">
          {" "}
          We’re not just a team <br />of developers, designers,<br />nor
          consultants -<br />
          <span className="gradient-text">we’re problem solvers.</span>
        </p>
        <p className="about-text-2">
          {" "}
          Be it building internal products to improve your business productivity
          or <br /> building world-class consumer applications for your audience
          - pushing<br /> the boundaries of digital innovation is the name of
          our game.
        </p>
        <p className="about-text-3">
          We are a leading Digital <br />Consultancy and Development <br />Studio
          in South East Asia
        </p>
        <div className="about-number-wrapper">
          <p className="about-number">
            {" "}
            03 <br />
            <span className="about-number-text"> Countries and Offices </span>
          </p>
          <p className="about-number">
            {" "}
            90+ <br />
            <span className="about-number-text">Digital Engineers</span>{" "}
          </p>
          <p className="about-number">
            {" "}
            09 <br />
            <span className="about-number-text"> Years Experience </span>{" "}
          </p>
        </div>
        <p className="about-text-3">
          We strive to build digital experiences <br /> that transform the way
          people live<br /> and work using industry best<br /> practices and
          emerging technologies
        </p>
        <p className="about-text-1 padding">
          What we can do for<br /> your business
        </p>
      </div>
    )
  }
}

export default HomeLayout1
