import React from 'react';
// import FormComponent from './FormComponent';
import IpAddressComponent from './IpAddressComponent';
import RandomKittenCarousel from './RandomKittenCarousel';

import './style.css';

const Home = () => {
  return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <RandomKittenCarousel />
          </div>
          <div className="col-md-6 p-3">
            <IpAddressComponent />
          </div>
        </div>
        </div>
  );
};

export default Home;
