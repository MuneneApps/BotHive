import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "@tabler/icons-webfont/dist/tabler-icons.css";

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
    <HomePage />
  </HashRouter>,
  document.getElementById("root")
);