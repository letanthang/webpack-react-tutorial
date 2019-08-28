import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/duck/users'

class AppSideBar extends Component {
    logoutUser = () => {
        const { logoutUser, history } = this.props
        const abc = logoutUser();
        console.log(this)
        this.props.history.push("/login");
    }
    render() {

        return (
            <div className="sidebar">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#/dashboard"><i className="nav-icon icon-speedometer"></i>Dashboard</a></li>
                    <li className="nav-title">AIR Admin </li>
                    <li className="nav-item"><a className="nav-link" href="#/home" aria-current="page"><i className="nav-icon fa fa-home"></i>Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#/login" aria-current="page"><i className="nav-icon fa fa-sign-in"></i>Login</a></li>
                    <li className="nav-item" onClick={this.logoutUser}><span className="nav-link" aria-current="page"><i className="nav-icon fa fa-sign-out"></i>Logout</span></li>
                    <li className="nav-item"><a className="nav-link active" href="#/aircraft" aria-current="page"><i className="nav-icon fa fa-plane"></i>Máy bay</a></li>
                    <li className="nav-item"><a className="nav-link" href="#/airline"><i className="nav-icon fa fa-plane"></i>Hãng hàng không</a></li><li className="nav-item"><a className="nav-link" href="#/airport"><i className="nav-icon fa fa-list"></i>Hãng hàng không</a></li><li className="nav-item"><a className="nav-link" href="#/company"><i className="nav-icon fa fa-list"></i>Đối tác bay</a></li>

                </ul>

                <button className="sidebar-minimizer mt-auto" type="button"></button>
            </div>
        )
    }
}

export default connect(null, { logoutUser })(AppSideBar)