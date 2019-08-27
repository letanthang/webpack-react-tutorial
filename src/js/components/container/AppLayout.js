import React, { Component, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import AppHeader from "./AppHeader";
import AppBreadCrumb from "./AppBreadCrumb";
import AppSideBar from "./AppSideBar";
import Aircraft from "../scene/Aircraft";
import Home from "../scene/Home";

class AppLayout extends Component {
  constructor() {
    super()
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {
    return (
      <div>
        <AppHeader />
        <div className="app-body">
          <div id="app-nav" className="app-nav">
            <AppSideBar />
          </div>
          <div className="app-main" id="app-main">
            <AppBreadCrumb />
            <div className="app-content">
              <Suspense fallback={this.loading}>
                <Switch>
                  <Route
                    key="aircraft"
                    path="/aircraft"
                    exact
                    name="aircraft"
                    component={Aircraft}
                  />
                  <Route
                    key="home"
                    path="/home"
                    name="home"
                    component={Home}
                  />
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppLayout