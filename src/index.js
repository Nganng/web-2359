import React from "react"
import ReactDOM from "react-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Process from "./Pages/Process"
import Work from "./Pages/Work"
import Contact from "./Pages/Contact"
import "./index.css"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter as Router, Route } from "react-router-dom"

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/process" component={Process} />
      <Route path="/works" component={Work} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>,
  document.getElementById("root")
)
registerServiceWorker()
