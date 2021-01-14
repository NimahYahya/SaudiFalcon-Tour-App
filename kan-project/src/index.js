import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './component/ScrollToTop';
import OpenPageFromTop from './component/OpenPageFromTop';

ReactDOM.render(
  <BrowserRouter>
    <OpenPageFromTop>
      <App />
      <ScrollToTop />
    </OpenPageFromTop>
  </BrowserRouter>,
  document.getElementById('root')
);
