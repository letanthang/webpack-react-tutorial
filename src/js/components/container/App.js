import React, { Component } from "react";
import Input from "../common/Input";
import Home from "../scene/Home";

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
    const { seo_title } = this.state;
    return (
      <div>
        <form id="article-form">
          <Input
            text="SEO title hehe"
            label="seo_title"
            type="text"
            id="seo_title"
            value={seo_title}
            handleChange={this.handleChange}
          />
        </form>
        <Home />
      </div>

    );
  }
}
export default App;
