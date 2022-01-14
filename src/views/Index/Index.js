import React, { Component } from "react";
// import logo from '../../components/Logo/logo.svg';

import Header from "../../components/Header/Header";
import Content from "./Content";
import Footer from "../../components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Status from "./Status";

class Index extends Component {
  render() {
    return (
      <div class="main-container">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Content />
            <Footer />
          </Route>
          <Route path="/status">
            <Header />
            <Status />
            <Footer />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Index;
