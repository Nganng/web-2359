import React, { Component, Fragment } from "react"
import "./Home.css"
import Header from "../Components/Header/Header"
import HomeLayout1 from "../Components/HomeLayout1/HomeLayout1"
import HomeLayout2 from "../Components/HomeLayout2/HomeLayout2"
import RecentWork from "../Components/RecentWork/RecentWork"
import Partner from "../Components/Partner/Partner"
import HomeContact from "../Components/HomeContact/HomeContact"
import Footer from "../Components/Footer/Footer"
class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <HomeLayout1 />
        <HomeLayout2 />
        <RecentWork />
        <Partner />
        <HomeContact />
        <Footer />
      </Fragment>
    )
  }
}

export default Home
