import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions'

class CommentBox extends Component {
    constructor() {

        super()
        this.state = { comment: '' }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.saveComment(this.state.comment)
        this.setState({ comment: '' })
    }
    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea
                        value={this.state.comment}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button>Submit comment</button>
                    </div>

                </form>
                <button onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        );
    }
}

export default connect(null, actions)(CommentBox);