import { combineReducers } from 'redux'
import commentsReducer from './comments'
import usersReducer from './users'

export default combineReducers({
  comments: commentsReducer,
  users: usersReducer,
})