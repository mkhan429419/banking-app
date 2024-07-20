// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import CustomersList from './components/customerList';
import CustomerDetails from './components/customerDetails';
import TransferMoney from './components/transferMoney';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomersList />} />
        <Route path="/customers/:id" element={<CustomerDetails />} />
        <Route path="/transfer/:fromId" element={<TransferMoney />} />
      </Routes>
    </Router>
  );
};

export default App;
