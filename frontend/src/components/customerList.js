// src/components/CustomersList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("https://banking-app-backend-1adw.onrender.com/api/customers")
      .then((response) => setCustomers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer._id}>
            <Link to={`/customers/${customer._id}`} className="text-blue-500">
              {customer.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomersList;
