
import { Authen } from '../../api'

const LOGIN = 'crm/users/LOGIN'
const LOGIN_FULFILLED = 'crm/users/LOGIN_FULFILLED'
const LOGIN_REJECTED = 'crm/users/LOGIN_REJECTED'

export const loginUser = (username, password) => {
  const response = Authen(username, password)
  return {
    type: LOGIN,
    payload: response
  }
}


export default (state = { user: null }, action) => {
  switch (action.type) {
    case LOGIN_FULFILLED: {
      const user = action.payload.data
      return { ...state, user }
    }
    case LOGIN_REJECTED: {
      return state
    }

    default:
      return state
  }
}