// src/components/CustomerDetails.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://banking-app-backend-1adw.onrender.com/api/customers/${id}`)
      .then((response) => setCustomer(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!customer) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{customer.name}</h1>
      <p>Email: {customer.email}</p>
      <p>Current Balance: ${customer.currentBalance}</p>
      <Link
        to={`/transfer/${id}`}
        className="mt-4 px-4 py-2 text-white bg-green-500 rounded"
      >
        Transfer Money
      </Link>
    </div>
  );
};

export default CustomerDetails;
