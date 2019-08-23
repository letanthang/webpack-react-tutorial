import React, { Component } from "react";
import { Icon } from 'react-bootstrap'
import Input from "../common/Input";
import Home from "../scene/Home";
import AppHeader from "./AppHeader";
import AppBreadCrumb from "./AppBreadCrumb";
import AppSideBar from "./AppSideBar";
import Aircraft from "../scene/Aircraft";


class App extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: "helloooo"
    };
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div id="outer">
        <AppHeader />
        <div className="app-body">
          <div id="app-nav" className="app-nav">
            <AppSideBar />
          </div>
          <div className="app-main">
            <AppBreadCrumb />
            <div className="app-content">
              <Aircraft />
              <Aircraft />
              <Aircraft />
              <Aircraft />
              <Aircraft />
              <Aircraft />
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default App;
