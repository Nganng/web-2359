import React, { Component } from "react"
import mylaundrybox from "../../Images/mylaundrybox.png"
import ico from "../../Images/ico.png"
import sifa from "../../Images/sifa.png"
import dbshome from "../../Images/dbshome.png"

import { Link } from "react-router-dom"
import "./RecentWork.css"
class RecentWork extends Component {
  render() {
    return (
      <div className="container wrapper-recent">
        <div className="wrapper-title-recent">
          <p className="title-recent-text"> Recent Works </p>
          <div className="explore-text">
            <Link className="explore-more-work" to="/work">
              {" "}
              Explore more work
            </Link>
          </div>
        </div>
        <div className="wrapper-work-image">
          <div className="work-images">
            <img className="work-image" src={ico} />
            <div className="banner">
              <p className="banner-content"> ICO Crowdsale Smart Contract</p>
            </div>
          </div>
          <div className="work-images">
            <img className="work-image" src={mylaundrybox} />
          </div>
          <div className="work-images">
            <img className="work-image" src={sifa} />
          </div>
          <div className="work-images">
            <img className="work-image" src={dbshome} />
          </div>
        </div>
      </div>
    )
  }
}

export default RecentWork
