import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

// core styles
import "./scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";

// pages
import HomePage from "./pages/HomePage";

// components
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />

    <Switch>
      {/* DEFAULT ROUTE */}
      <Route exact path="/">
        <Redirect to="/dashboard/overview" />
      </Route>

      {/* ALL OTHER ROUTES */}
      <Route path="/" component={HomePage} />
    </Switch>

  </HashRouter>,
  document.getElementById("root")
);