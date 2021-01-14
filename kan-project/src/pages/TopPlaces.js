import React, { Component } from 'react';
import TopPlacesCard from '../component/TopPlaces/TopPlacesCard';
import '../style/TopPlaces.css';
import TDDB from '../TDDB';

class TopPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: TDDB.trips,
    };
  }

  render() {
    let topPlaces = this.state.trips.map(trip => {
      return <TopPlacesCard key={trip.id} data={trip} />;
    });
    return (
      <section className="section">
        <div className="section-head style1 text-center ">
          <h2 className="box-title">Top Places</h2>
          <div className="heading_line"></div>
          <p>
            Here is a list of the top places in Saudi Arabi, maybe it's the time to book a flight?
          </p>
        </div>

        <div className="component_container">{topPlaces}</div>
      </section>
    );
  }
}

export default TopPlaces;
