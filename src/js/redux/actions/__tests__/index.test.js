import { SAVE_COMMENT } from 'actions/types'
import { saveComment } from 'actions'

describe('action saveComment', () => {
  it('has correct type', () => {
    const action = saveComment()
    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('has correct payload', () => {
    const action = saveComment('New Comment')
    expect(action.payload).toEqual('New Comment')
  })
})