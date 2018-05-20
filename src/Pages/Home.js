import React, { Component } from "react"
import "./Home.css"
import Header from "../Components/Header/Header"
import HomeLayout1 from "../Components/HomeLayout1/HomeLayout1"
import HomeLayout2 from "../Components/HomeLayout2/HomeLayout2"
class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <HomeLayout1 />
        <HomeLayout2 />
      </div>
    )
  }
}

export default Home
