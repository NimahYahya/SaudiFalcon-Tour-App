import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class BootstrapCarousel extends Component {
  render() {
    return (
      <div className="slider section">
        <div className="container-fluid">
          <Carousel>
            <Carousel.Item style={{ height: '100%' }}>
              <img
                style={{ height: '100%' }}
                className="d-block w-100"
                src={'assets/img/slid1.jpg'}
                alt={'Kingdom Centre,Riyadh'}
              />

              <Carousel.Caption>
                <h1 className="slider-heading">Explore Saudi Arabia Tours !</h1>
                <p className="slider-text">
                  Book Now Saudi Arabia Tours, Luxury tour Packages, Custom
                  Tours. Local tour operator ranked #1. Online secure payments
                  for all Saudi Arabia Tours. Saudi Arabia’s leading travel
                  agency Licensed and insured.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: '100%' }}>
              <img
                style={{ height: '100%' }}
                className="d-block w-100"
                src={'assets/img/slid2.jpg'}
                alt={'Al Rahma Mosque, Jeddah'}
              />

              <Carousel.Caption>
                <h1
                  style={{
                    fontSize: '25px',
                    fontWeight: '700',
                  }}
                >
                  Our Vision & Mission
                </h1>
                <p
                  className="slider-text"
                  style={{ backgroundColor: '#af8447' }}
                >
                  SaudiArabiaTours’s mission is to make it easy, more affordable
                  and locally sustainable for travelers to travel in Suadi
                  Arabia.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: '100%' }}>
              <img
                style={{ height: '100%' }}
                className="d-block w-100"
                src={
                  'https://alkhaleejtoday.co/content/uploads/2020/05/08/4b1b025f03.jpg'
                }
                alt={'Elephant rock Al Ula, Saudi Arabia'}
              />

              <Carousel.Caption>
                <h1
                  style={{
                    fontSize: '20px',
                    backgroundColor: '#af8447 ',
                    display: 'inline-block',
                    padding: '5px 15px',
                  }}
                >
                  Get to know Saudi Arabia
                </h1>
                <p className="slider-text">
                  SaudiArabiaTours’s mission is to make it easy, more affordable
                  and locally sustainable for travelers to travel in Suadi
                  Arabia.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default BootstrapCarousel;
