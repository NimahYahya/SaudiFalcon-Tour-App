import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Blog.css';
import { Container, Row, Image, Button, Col } from 'react-bootstrap';
import TripPlan from './TripPlan';

function TripDescription(props) {
  let planInfo = props.data.plan.map(day => {
    return <TripPlan data={day} />;
  });

  return (
    <section className="section">
      <Row className="trip-description-container">
        <Row className="trip-header-row">
          <Col>
            <h1 className="trip-title ">{props.data.title}</h1>
            <div className="heading_line"></div>

            <Row className="trip-duration-row">
              <p className="trip-duration">{props.data.days} Day</p>
              <p className="trip-duration">{props.data.nights} Night</p>
            </Row>
          </Col>
        </Row>
        <Row className="trip-img-row">
          <img className="trip-img" src={props.data.img} />
          <Col className="trip-price-col">
            <h5 className="trip-price-header">Starting From</h5>
            <h1 className="trip-price-new">{props.data.newprice} SR</h1>
            <h3 className="trip-price-old">{props.data.oldprice} SR</h3>
            <Button className="trip-book-button">Book Now</Button>
          </Col>
        </Row>
        <Row className="trip-content-row">
          <Col sm>
            <h1 className="trip-content-header">About Trip</h1>
            <p className="trip-content-details">{props.data.description}</p>
          </Col>
        </Row>
      </Row>
      {planInfo}
    </section>
  );
}

export default TripDescription;
