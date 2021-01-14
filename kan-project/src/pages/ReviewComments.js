import React, { Component } from 'react';

import CommentCard from '../component/Review/CommentCard';

class ReviewComments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let Review = this.props.blog.map(comment => {
      return <CommentCard comments={comment} key={comment.id} />;
    });
    return (
      <div>
        <h2 className="commentsTitle">Comments</h2>
        <div className="heading_line"></div>
        {Review}
      </div>
    );
  }
}

export default ReviewComments;
