import React, { Component } from 'react'

class AppHeader extends Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    const nav = document.getElementById('app-nav')
    nav.classList.toggle('is-nav-open')
    const appMain = document.getElementById('app-main')
    appMain.classList.toggle('is-nav-open')
    const togglerIcon = document.getElementById('navbar-toggler-icon')
    togglerIcon.classList.toggle('is-nav-open')
  }
  render() {
    return (
      <div className="app-header">
        <div className="header-col">
          <span><img height="26" src='/images/log-logo.png' /></span>
          <span
            id="navbar-toggler-icon"
            className="navbar-toggler-icon"
            onClick={this.onClick}
          />
        </div>
        <div className="header-col">
          <span><img height="32" src={require('assets/img/log-logo.png')} /></span>
          <span
            className="app-nav__icon"
            type="menu_fold"
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}

export default AppHeader