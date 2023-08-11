import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import ThankYouPage from './ThankYouPage';
import './style.css';

const App = () => {
  return (
    <Router>
    <Routes>
    <Route exact path="/" Component={Home}/>
    <Route exact path="/thankYou" Component={ThankYouPage}/>
    </Routes>
    </Router>
  );
};

export default App;
