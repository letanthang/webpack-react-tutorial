import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class Home extends Component {
    render() {
        return (
            <div>
                <CommentBox />
                <CommentList />
            </div>
        );
    }
}

export default Home;
