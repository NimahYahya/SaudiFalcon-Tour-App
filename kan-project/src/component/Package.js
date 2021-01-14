import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Packages.css';
import { FaUser } from '@react-icons/all-files/fa/FaUser';
import { FaCalendar } from '@react-icons/all-files/fa/FaCalendar';

function Package(props) {
  return (
    <Card className="card-content-container">
      <Card.Img className="card-img" variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title className="card-title">{props.data.title}</Card.Title>
        <Card.Text className="card-location">{props.data.location}</Card.Text>
        <hr />
        <Card.Text className="card-description">
          <ul className="card-list">
            <li className="card-list-item">
              <FaCalendar size={12} color={'rgba(0, 132, 255, 0.87)'} />
              <span className="icon-text"> No of Days: {props.data.days}</span>
            </li>
            <li>
              <FaUser size={12} color={'rgba(0, 132, 255, 0.87)'} />
              <span className="icon-text">
                {' '}
                No of People: {props.data.people}
              </span>
            </li>
          </ul>
        </Card.Text>
        <Card.Text>
          <p className="card-price">{props.data.price} SR</p>
          <Button className="card-button" variant="primary">
            View details
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Package;
