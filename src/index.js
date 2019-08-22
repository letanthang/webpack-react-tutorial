import React from 'react'
import ReactDOM from "react-dom";
import './App.scss'
import App from "./js/components/container/App";
import Root from "./js/components/Root";

const wrapper = document.getElementById("app-root")
wrapper ? ReactDOM.render(<Root><App /></Root>, wrapper) : false
