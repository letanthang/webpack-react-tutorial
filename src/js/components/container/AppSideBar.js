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
                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                        <div className="ps__thumb-x" tabIndex="0" style={{ left: 0, width: 0 }}>
                        </div>
                    </div>
                    <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                        <div className="ps__thumb-y" tabIndex="0" style={{ top: 0, height: 0 }}>
                        </div>
                    </div>
                </div>
                <button className="sidebar-minimizer mt-auto" type="button"></button>
            </div>
        )
    }
}

export default AppSideBar