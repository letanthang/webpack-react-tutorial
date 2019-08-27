import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { loginUser } from '../../../../redux/duck/users'
import logo from '../../../../../assets/img/log-logo.png'
// import ErrorMessage from '../../../components/ErrorMessage'
const loginReq = {
  phone: "",
  password: "",
}
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginModel: loginReq
    }
  }
  componentDidMount() {
    console.log(process.env)
  }
  componentWillMount = () => {
    // Reducers.logout()
  }
  componentWillUpdate() {
    if (this.props.user) {
      this.props.history.push("/home")
    }
  }

  setPopupError = () => {
    const { dispatch } = this.props
    dispatch(clearErrorMessage())
  }

  login = () => {
    const { phone, password } = this.state.loginModel
    this.props.loginUser(phone, password)
  }

  render() {
    const { errorMessage } = this.props
    return (
      <div className="app flex-row align-items-center">
        {/* <ErrorMessage
          setPopupError={this.setPopupError}
          popupError={!errorMessage.status ? false : true}
          url={errorMessage.url}
          message={`${errorMessage.message}`}></ErrorMessage> */}
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <div>
                <Card className="p-4">
                  <div>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <div className="input-group mb-3">
                        <span className="input-group-addon">
                          <span>
                            <i className="icon-phone"></i>
                          </span>
                        </span>
                        <input className="form-control" type="text" placeholder="Số điện thoại" autoComplete="phone"
                          onChange={e => this.setState({ loginModel: { ...this.state.loginModel, phone: e.target.value.trim() } })}
                          onKeyUp={e => { if (e.key === "Enter") { this.login() } }} />
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-addon">
                          <span>
                            <i className="icon-lock"></i>
                          </span>
                        </span>
                        <input className="form-control" type="password" placeholder="Mật khẩu" autoComplete="password"
                          onChange={e => this.setState({ loginModel: { ...this.state.loginModel, password: e.target.value.trim() } })}
                          onKeyUp={e => { if (e.key === "Enter") { this.login() } }} />
                      </div>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" type="button" className="px-4" onClick={this.login}>Đăng nhập</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Card>
                <Card className="text-white py-5 d-md-down-none" style={{ width: '44%' }}>
                  <div className="text-center">
                    <div>
                      <img style={{ width: "100%", marginTop: "10%" }} src={logo}></img>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const { user } = users
  return { user }
}

export default connect(mapStateToProps, { loginUser })(Login)