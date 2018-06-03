import React, { Component } from "react"
import api from "../../Images/api.png"
import algorithm from "../../Images/algorithm.png"
import puzzle from "../../Images/puzzle.png"
import rgb_symbol from "../../Images/rgb_symbol.png"
import marketing from "../../Images/marketing.png"
import advertising from "../../Images/advertising.png"

import "./AboutLayout.css"
class AboutLayout1 extends Component {
  state = {
    industry: "telecommunication"
  }
  changeIndustry = name => {
    this.setState({ industry: name })
  }
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
        <p className="about-text-3 padding">
          We are a leading Digital <br />Consultancy and Development <br />Studio
          in South East Asia
        </p>
        <div className="about-number-wrapper">
          <div className="number-wrapper">
            <p className="about-number">03 </p>
            <p className="about-number-text"> Countries and Offices </p>
          </div>
          <div className="number-wrapper">
            <p className="about-number">90+ </p>
            <p className="about-number-text">Digital Engineers</p>
          </div>
          <div className="number-wrapper">
            <p className="about-number">09 </p>
            <p className="about-number-text"> Years Experience </p>
          </div>
        </div>
        <p className="about-text-3 padding ">
          We strive to build digital experiences <br /> that transform the way
          people live<br /> and work using industry best<br /> practices and
          emerging technologies
        </p>
        <p className="about-text-1 padding">
          What we can do for<br /> your business
        </p>
        <div className="wrapper-business">
          <div className="business-image-wrapper ">
            <img className="business-image" src={puzzle} />
            <p> Business Strategy </p>
          </div>
          <div className="business-image-wrapper ">
            <img className="business-image" src={api} />
            <p> Software Engineering </p>
          </div>
          <div className="business-image-wrapper ">
            <img className="business-image" src={algorithm} />
            <p> Data Intelligence </p>
          </div>
          <div className="business-image-wrapper ">
            <img className="business-image" src={rgb_symbol} />
            <p> User Experience </p>
          </div>
          <div className="business-image-wrapper ">
            <img className="business-image" src={marketing} />
            <p> Brand Communication </p>
          </div>
          <div className="business-image-wrapper ">
            <img className="business-image" src={advertising} />
            <p> Digital Marketing </p>
          </div>
        </div>
        <div className="wrapper-technical">
          <p className="about-text-1 padding"> Our technical expertise </p>
          <div className="wrapper-intro-technical-1">
            <p className="about-text-2">
              It’s almost never as simple as customising pre-packaged
              open-source products. We specialise in building bespoke systems to
              deliver the types of products and systems that are unique to your
              business.
            </p>
          </div>
          <div className="wrapper-technical-content">
            <div className="technical-content-item">
              <p className="about-text-3"> Mobile </p>
              <p className="about-text-2">
                Native iOS and Android applications for Mobile and Tablet is our
                bread and butter. We also build quality hybrid applications in
                React Native and Flutter.{" "}
              </p>
            </div>
            <div className="technical-content-item">
              <p className="about-text-3"> Web </p>
              <p className="about-text-2">
                We build AMP powered, progressive web applications with the
                latest Javascript frameworks and technologies.{" "}
              </p>
            </div>
            <div className="technical-content-item">
              <p className="about-text-3"> Server </p>
              <p className="about-text-2">
                We build enterprise-level secure server applications and APIs
                for cloud deployments on AWS, Azure and Google Cloud (as well as
                for on-site deployments!){" "}
              </p>
            </div>
            <div className="technical-content-item">
              <p className="about-text-3"> Leanback </p>
              <p className="about-text-2">
                As it happens, we’ve also built some of the region’s best tvOS,
                AndroidTV and SamsungTV (Tizen) applications.{" "}
              </p>
            </div>
          </div>
          <p className="about-text-1 padding"> Our industry verticals </p>
          <div className="wrapper-intro-technical-1">
            <p className="about-text-2">
              We’ve never limited ourselves to any verticals (and we often
              cross-pollinate ideas across verticals to great results) - but
              here are some that we have had extensive experience with over the
              years:
            </p>
          </div>
        </div>
        <div className="wrapper-industry">
          <div className="text">
            <p
              className={
                this.state.industry === "telecommunication"
                  ? "text-bold"
                  : "text"
              }
              onClick={() => this.changeIndustry("telecommunication")}
            >
              {" "}
              Telecommunication
            </p>
            <p
              className={
                this.state.industry === "banking" ? "text-bold" : "text"
              }
              onClick={() => this.changeIndustry("banking")}
            >
              {" "}
              Banking
            </p>
            <p
              className={this.state.industry === "media" ? "text-bold" : "text"}
              onClick={() => this.changeIndustry("media")}
            >
              {" "}
              Media
            </p>
            <p
              className={
                this.state.industry === "logistics" ? "text-bold" : "text"
              }
              onClick={() => this.changeIndustry("logistics")}
            >
              {" "}
              Logistics
            </p>
            <p
              className={
                this.state.industry === "loyalty" ? "text-bold" : "text"
              }
              onClick={() => this.changeIndustry("loyalty")}
            >
              {" "}
              User Loyalty
            </p>
          </div>
          {this.state.industry === "telecommunication" && (
            <div className="industry-image" />
          )}
          {this.state.industry === "banking" && (
            <div className="industry-image-2" />
          )}
          {this.state.industry === "media" && (
            <div className="industry-image-3" />
          )}
          {this.state.industry === "logistics" && (
            <div className="industry-image-4" />
          )}
          {this.state.industry === "loyalty" && (
            <div className="industry-image-5" />
          )}
        </div>
      </div>
    )
  }
}

export default AboutLayout1
