import React from 'react'
import ReactDOM from "react-dom";
import './App.scss'
import App from "./js/components/container/App";
import Root from "./js/components/Root";

//load resource for css access at /images/...
if (process.env.NODE_ENV !== 'production') {
    require('./assets/img/frame.png')
    require('./assets/img/log-logo.png')
}

const wrapper = document.getElementById("app-root")
wrapper ? ReactDOM.render(<Root><App /></Root>, wrapper) : false
