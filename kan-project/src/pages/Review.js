import React, { Component } from 'react';
import CustomersReview from '../component/Review/CustomersReview';
import { Card, CardGroup, Row, Col } from 'react-bootstrap';
import '../style/Review.css';
import TDBB from '../TDDB';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: TDBB.reviews,
    };
  }

  render() {
    let customerReview = this.state.review.map(review => {
      return <CustomersReview reviews={review} key={review.id} />;
    });
    return (
      <section className="customersReview-section ">
        <div className="section-head style1 text-center text-white ">
          <h2 className="box-title">What Our Users Say</h2>
          <div className="heading_line"></div>
          <p>What our cosutmer says about our website? Check it out!</p>
        </div>
        <section className="customersReview ">
          <CardGroup>{customerReview}</CardGroup>
        </section>
      </section>
    );
  }
}

export default Review;
