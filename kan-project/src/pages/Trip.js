import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import TripDescription from '../component/TripPlan/TripDescription';
import '../style/Trip.css';
import TDDB from '../TDDB';
import Header from './Header';
import Footer from './Footer';

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: TDDB.trips[0],
    };
  }
  render() {
    // let tripInfo = this.state.trips.map((trip) => { return <TripDescription key={trip.id} data={trip} /> })

    return (
      <section className="section">
        <div className="trip-container">
          <TripDescription key={this.state.trips.id} data={this.state.trips} />
        </div>
      </section>
    );
  }
}

export default Trip;
