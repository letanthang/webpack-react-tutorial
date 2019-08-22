import React, { Component } from "react";
import { Icon } from 'react-bootstrap'
import Input from "../common/Input";
import Home from "../scene/Home";
import AppBreadCrumb from "./AppBreadCrumb";
import Aircraft from "../scene/Aircraft";


class App extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: "helloooo"
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  onClick() {
    const wrapper = document.getElementById('wrapper')
    wrapper.classList.toggle('is-nav-open')
  }
  render() {
    return (
      <div id="outer">
        <div className="app-header">
          <p>hello how are you</p>
          <div
            className="nav__icon"
            type="menu_fold"
            onClick={this.onClick}
          >
            <i className="fa fa-lock" />
          </div>
        </div>
        <div className="app-body">
          <div id="wrapper" className="wrapper">
            <div className="nav">

            </div>
            <div className="nav__body">
              <div>
                <AppBreadCrumb />
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
      </div>

    );
  }
}
export default App;
