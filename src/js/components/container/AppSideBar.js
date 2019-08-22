import React, { Component } from 'react'

class AppSideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="scrollbar-container sidebar-nav ps ps-container">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#/dashboard"><i className="nav-icon icon-speedometer"></i>Dashboard</a></li>
                        <li className="nav-title">AIR Admin </li>
                        <li className="nav-item"><a className="nav-link active" href="#/aircraft" aria-current="page"><i className="nav-icon fa fa-plane"></i>Máy bay</a></li>
                        <li className="nav-item"><a className="nav-link" href="#/airline"><i className="nav-icon fa fa-plane"></i>Hãng hàng không</a></li><li className="nav-item"><a className="nav-link" href="#/airport"><i className="nav-icon fa fa-list"></i>Hãng hàng không</a></li><li className="nav-item"><a className="nav-link" href="#/company"><i className="nav-icon fa fa-list"></i>Đối tác bay</a></li>
                    </ul>
                    <div className="ps__rail-x" style="left: 0px; bottom: 0px;">
                        <div className="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;">
                        </div>
                    </div>
                    <div className="ps__rail-y" style="top: 0px; right: 0px;">
                        <div className="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;">

                        </div>
                    </div>
                </div>
                <button className="sidebar-minimizer mt-auto" type="button"></button>
            </div>
        )
    }
}

export default AppSideBar