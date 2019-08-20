import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {
  render() {
    const { comments } = this.props
    console.log('CommentList render comments', comments)
    return (
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment}>{comment}</li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { comments } = state
  return { comments }
}
export default connect(mapStateToProps)(CommentList);