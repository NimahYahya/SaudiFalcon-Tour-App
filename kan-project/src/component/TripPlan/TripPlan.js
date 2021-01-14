import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Blog.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaStar } from '@react-icons/all-files/fa/FaStar';

function TripPlan(props) {
  // To repeat the number of icons
  let iconRepeat = [...Array(5)].map((e, i) => {
    return (
      <span className="icons" key={i}>
        <FaStar key={i} color="gold" size={15} />
      </span>
    );
  });

  return (
    <Row className="trip-plan-container">
      <Col sm={1} className="trip-day-col">
        <h2 className="trip-day">Day {props.data.id}</h2>
      </Col>
      <Col>
        <Row className="trip-plan-description">
          <Col sm className="trip-plan-content-col">
            <h1 className="trip-plan-title">{props.data.title}</h1>

            {iconRepeat}
            <p className="trip-plan-content">{props.data.description}</p>
          </Col>
          <Col sm className="trip-plan-img-col">
            <img className="trip-plan-img" src={props.data.img} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default TripPlan;
