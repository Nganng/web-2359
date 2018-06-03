import React, { Component } from "react"
import rectangle from "../../Images/rectangle.png"
import rectangle_2 from "../../Images/rectangle_2.png"
import rectangle_3 from "../../Images/rectangle_3.png"
import rectangle_4 from "../../Images/rectangle_4.png"

import "./AboutLayout.css"
class AboutLayout2 extends Component {
  render() {
    return (
      <div className="container about-container">
        <div className="wrapper-leader">
          <p className="about-text-1 "> Our team leaders </p>
          <div className="wrapper-intro-leader">
            <p className="about-text-2">
              Every member of our leadership team dual-roles in their strategic
              function and also as a principal consultant to our portfolio of
              clients.
            </p>
          </div>
        </div>
        <div className="wrapper-images-leader">
          <div className="one">
            <img className="leader-image" src={rectangle} />
            <p className="text-leader-name"> Hong Ting Wong </p>
            <p className="text-leader-position"> Chief Executive Officer</p>
          </div>
          <div className="one">
            <img className="leader-image" src={rectangle_2} />
            <p className="text-leader-name"> Hong Ting Wong </p>
            <p className="text-leader-position"> Chief Executive Officer</p>
          </div>
          <div className="one">
            <img className="leader-image" src={rectangle_3} />
            <p className="text-leader-name"> Hong Ting Wong </p>
            <p className="text-leader-position"> Chief Executive Officer</p>
          </div>
          <div className="one">
            <img className="leader-image" src={rectangle_4} />
            <p className="text-leader-name"> Hong Ting Wong </p>
            <p className="text-leader-position"> Chief Executive Officer</p>
          </div>
          <div className="one">
            <img className="leader-image" src={rectangle} />
            <p className="text-leader-name"> Hong Ting Wong </p>
            <p className="text-leader-position"> Chief Executive Officer</p>
          </div>
          <div className="one">
            <img className="leader-image" src={rectangle_2} />
            <p className="text-leader-name"> Hong Ting Wong </p>
            <p className="text-leader-position"> Chief Executive Officer</p>
          </div>
          <div className="one">
            <img className="leader-image" src={rectangle_3} />
            <p className="text-leader-name"> Hong Ting Wong </p>
            <p className="text-leader-position"> Chief Executive Officer</p>
          </div>
          <div className="one">
            <img className="leader-image" src={rectangle_4} />
            <p className="text-leader-name"> Hong Ting Wong </p>
            <p className="text-leader-position"> Chief Executive Officer</p>
          </div>
        </div>
        <p className="about-text-1">
          {" "}
          Join our team{" "}
          <span className="change-color-text-1">
            if you<br /> like what we do.
          </span>
        </p>
        <p className="about-text-4"> Our cuture </p>
      </div>
    )
  }
}

export default AboutLayout2
