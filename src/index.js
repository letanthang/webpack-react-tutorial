import { setConfig } from 'react-hot-loader';
setConfig({ logLevel: 'debug' });
import Root from "js/components/Root";
import React from 'react'
import ReactDOM from "react-dom";
import './App.scss'
import App from "js/components/container/App";


//load resource for css access at /images/...
if (process.env.NODE_ENV !== 'production') {
    require('./assets/img/frame.png')
    require('./assets/img/log-logo.png')
}

const wrapper = document.getElementById("app-root")
wrapper ? ReactDOM.render(<Root><App /></Root>, wrapper) : false
