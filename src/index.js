// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./elements/Contact";
import error404 from "./elements/error404";
// Element Layout
import Service from "./elements/Service";
import MainDemo from "./home/MainDemo";
// Create Import File
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={MainDemo}
          />
          {/* Element Layot */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service`}
            component={Service}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tos`}
            component={Service}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/privacy`}
            component={Service}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact`}
            component={Contact}
          />
          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
          <Route component={error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
