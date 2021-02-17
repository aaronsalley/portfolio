import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./store";

import SiteFooter from "./components/templates/SiteFooter";
import SiteHeader from "./components/templates/SiteHeader";

import "./assets/styles/index.scss";
import Home from "./components/views/Home";

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Router>
        {/* <SiteHeader></SiteHeader> */}
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <SiteFooter></SiteFooter>
      </Router>
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
