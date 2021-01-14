import React from 'react';
import '../style/Header.css';
import { Navbar } from 'react-bootstrap';
import { Link, Switch, Route } from 'react-router-dom';
import { GiFalconMoon } from '@react-icons/all-files/gi/GiFalconMoon';

const Header = () => {
  return (
    <Navbar className="sticky-nav" variant="dark" fixed="top">
      <div className="logo">
        <Link to="/" className="logo-text">
          SaudiFalcon
        </Link>
        &nbsp;
        <i>
          <GiFalconMoon
            className="logo-icon"
            size={25}
            color={'#af8447 '}
          ></GiFalconMoon>
        </i>
      </div>

      <nav className="nav">
        <ul className="nav--menu">
          <li>
            <Link to="/">Home</Link> &nbsp;
          </li>
          <li>
            <Link to="/packages">Discover More</Link> &nbsp;
          </li>
          <li>
            <Link to="/blog">Blogs</Link>&nbsp;
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>&nbsp;
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </Navbar>
  );
};

export default Header;
