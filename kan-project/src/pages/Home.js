import React, { Component } from 'react';
import TopPlaces from '../pages/TopPlaces';
import Review from './Review';
import BlogHomePage from './BlogHomePage';
import BootstrapCarousel from '../component/BootstrapCarousel';

import TDDB from '../TDDB';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: TDDB.trips,
    };
  }
  render() {
    return (
      <>
        <BootstrapCarousel />
        <TopPlaces />
        <Review />
        <BlogHomePage />
      </>
    );
  }
}

export default Home;
