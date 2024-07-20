// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Maheen Akhtar Khan</h1>
      <Link to="/customers" className="px-4 py-2 text-white bg-blue-500 rounded">
        View All Customers
      </Link>
    </div>
  );
};

export default HomePage;
