
import { GetComments } from 'js/api'
const SAVE = 'crm/comments/SAVE'
const FETCH = 'crm/comments/FETCH'
const FETCH_FULFILLED = 'crm/comments/FETCH_FULFILLED'

export const saveComment = (comment) => ({
  type: SAVE,
  payload: comment
})

export const fetchComments = () => {
  const response = GetComments()
  return {
    type: FETCH,
    payload: response
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case SAVE:
      return [...state, action.payload]
    case FETCH: {
      const comments = action.payload.data.map(comment => comment.name)
      return [...state, ...comments.slice(0, 10)]
    }
    case FETCH_FULFILLED: {
      const comments = action.payload.data.map(comment => comment.name)
      return [...state, ...comments.slice(0, 10)]
    }

    default:
      return state
  }
}