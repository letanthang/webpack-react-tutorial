import React, { Component } from 'react'
import { Breadcrumb } from 'react-bootstrap'

class AppBreadCrumb extends Component {
    render() {
        return (<Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        )
    }
}

export default AppBreadCrumb