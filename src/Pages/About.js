import React, { Component, Fragment } from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import AboutLayout1 from "../Components/AboutLayout1/AboutLayout1"
import AboutLayout2 from "../Components/AboutLayout1/AboutLayout2"
class About extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <AboutLayout1 />
        <AboutLayout2 />
        <Footer />
      </Fragment>
    )
  }
}

export default About
