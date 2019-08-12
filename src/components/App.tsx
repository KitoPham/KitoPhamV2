import { Component } from "react"
import React from "react"
import { NavigationBar } from "./navigationBar/NavigationBar"
import { Switch, Router, Route } from "react-router"
import { createBrowserHistory } from "history"
import { Home } from "./home"
import { AboutPreview } from "./home/aboutPreview"

const urls = {
  home: "/home",
  about: "/about",
  blog: "/blog"
}

export default class App extends Component {
  render() {
    return (
      <div style={{ margin: 0 }}>
        <Router history={createBrowserHistory()}>
          <NavigationBar />
          <Switch>
            <Route exact path={"/"} component={() => <Home />} />
            <Route exact path={urls.home} component={() => <Home />} />
            <Route exact path={urls.home} component={() => <Home />} />
          </Switch>
        </Router>
      </div>
    )
  }
}
