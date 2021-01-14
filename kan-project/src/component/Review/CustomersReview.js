import React from 'react';
import { Card } from 'react-bootstrap';
import '../../style/CustomersReview.css';

function CustomersReview(props) {
  return (
    <Card className="review-card">
      <Card.Img variant="top" src={props.reviews.avatar} className="user-img" />
      <Card.Body>
        <Card.Title className="review-title">{props.reviews.title}</Card.Title>

        <Card.Subtitle className="mb-2 user-name">
          {props.reviews.name}
        </Card.Subtitle>

        <Card.Text className="review-text">{props.reviews.review}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomersReview;
