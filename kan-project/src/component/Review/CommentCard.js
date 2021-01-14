import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/cardComments.css';

function CommentCard(props) {
  return (
    <section className="commentContainer">
      <div className="row">
        <div>
          <img
            className="userProfileImage"
            src={props.comments.img}
            alt="user avatar"
          ></img>
        </div>
        <div className="card w-75 comment-card-body">
          <a href="#" className="replyButton">
            Replay{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-reply-all-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.021 11.9L3.453 8.62a.719.719 0 0 1 0-1.238L8.021 4.1a.716.716 0 0 1 1.079.619V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
              <path d="M5.232 4.293a.5.5 0 0 1-.106.7L1.114 7.945a.5.5 0 0 1-.042.028.147.147 0 0 0 0 .252.503.503 0 0 1 .042.028l4.012 2.954a.5.5 0 1 1-.593.805L.539 9.073a1.147 1.147 0 0 1 0-1.946l3.994-2.94a.5.5 0 0 1 .699.106z" />
            </svg>
          </a>
          <div className="review_author">{props.comments.username}</div>
          <h5 className="card-title">{props.comments.title}</h5>
          <div className="card-text">
            <p>{props.comments.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommentCard;