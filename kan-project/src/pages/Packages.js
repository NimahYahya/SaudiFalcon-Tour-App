import React from 'react';
import { Card, CardGroup, Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Packages.css';
import Package from '../component/Package';
import TDDB from '../TDDB';
import VideoBackground from '../component/VideoBackground/VideoBackground';

class Packages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: TDDB.packages,
    };
  }
  render() {
    let packageData = this.state.packages.map(packageItem => {
      return (
        <Col className="card-col" sm="3">
          <Package key={packageItem.id} data={packageItem} />
        </Col>
      );
    });
    return (
      <section className="section">
        <div className="section-head style1 text-center  ">
          <h2 className="box-title">BEST TRAVEL PACKAGES</h2>
          <div className="heading_line"></div>
          <p>BEST TRAVEL PACKAGES</p>
        </div>
        <VideoBackground />
        <div
          className="heading_line"
          style={{ width: '100%', margin: '0 auto' }}
        ></div>
        <div className="card-container">
          <CardGroup>
            <Row>{packageData}</Row>
          </CardGroup>
        </div>
      </section>
    );
  }
}

export default Packages;
