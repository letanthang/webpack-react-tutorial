import { hot } from 'react-hot-loader/root'
import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from "../scene/Pages/Login";
import AppLayout from "./AppLayout";


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

  About() {
    return <h2>About</h2>;
  }

  Users() {
    return <h2>Users</h2>;
  }
  render() {
    return (
      <div id="outer">
        <Router>
          <Switch>
            <Route path="/about/" exact component={this.About} />
            <Route path="/login/" exact component={Login} />
            <Route path="/users/" exact component={this.Users} />
            <Route path="/" component={AppLayout} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default hot(App);
