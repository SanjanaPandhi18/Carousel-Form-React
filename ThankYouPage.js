import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

const ThankYouPage = () => {
  return (
    <div className="thankyou d-block bg-primary-subtle">
      <h1>Thank You for Submitting the Form!</h1>
    <div className="back-to-form d-block">
        <Link to="/">Want to submit another form?</Link>
      </div>
      </div>
  );
};

export default ThankYouPage;
