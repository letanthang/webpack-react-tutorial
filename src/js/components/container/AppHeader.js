import React, { Component } from 'react'

class AppHeader extends Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    const nav = document.getElementById('app-nav')
    nav.classList.toggle('is-nav-open')
  }
  render() {
    return (
      <div className="app-header">
        <img height="32" src={require('../../../assets/img/log-logo.png')} />
        <div
          className="app-nav__icon"
          type="menu_fold"
          onClick={this.onClick}
        >
          <i className="fa fa-lock" />
        </div>
      </div>
    );
  }
}

export default AppHeader