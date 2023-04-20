import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './routes/Details';
import Home from './routes/Home';
import './styles/App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:companyName" element={<Details />} />
    </Routes>
  </Router>
);

export default App;
