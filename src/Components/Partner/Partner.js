import React, { Component } from "react"
import capitaland_logo from "../../Images/capitaland_logo.png"
import changi_logo from "../../Images/changi_logo.png"
import dbs_logo from "../../Images/dbs_logo.png"
import fox_logo from "../../Images/fox_logo.png"
import mediacorp_logo from "../../Images/mediacorp_logo.png"
import microsoft_logo from "../../Images/microsoft_logo.png"
import samsung_logo from "../../Images/samsung_logo.png"
import singtel_logo from "../../Images/singtel_logo.png"
import "./Partner.css"
class Partner extends Component {
  render() {
    return (
      <div className="container wrapper-partner">
        <div className="wrapper-title-partner">
          <p className="title-partner-text">Who we work with </p>
        </div>
        <div className="wrapper-logos">
          <div className="partner-logo-wrapper ">
            <img className="partner-logo" src={singtel_logo} alt="singtel" />
          </div>
          <div className="partner-logo-wrapper">
            <img className="partner-logo" src={dbs_logo} alt="dbs" />
          </div>
          <div className="partner-logo-wrapper">
            <img
              className="partner-logo"
              src={microsoft_logo}
              alt="microsoft"
            />
          </div>
          <div className="partner-logo-wrapper">
            <img className="partner-logo" src={fox_logo} alt="fox" />
          </div>
          <div className="partner-logo-wrapper">
            <img className="partner-logo" src={capitaland_logo} alt="capland" />
          </div>
          <div className="partner-logo-wrapper">
            <img className="partner-logo" src={changi_logo} alt="changi" />
          </div>
          <div className="partner-logo-wrapper">
            <img
              className="partner-logo"
              src={mediacorp_logo}
              alt="mediacorp"
            />
          </div>
          <div className="partner-logo-wrapper">
            <img className="partner-logo" src={samsung_logo} alt="samsung" />
          </div>
        </div>
      </div>
    )
  }
}

export default Partner
