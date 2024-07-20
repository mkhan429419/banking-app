// src/components/TransferMoney.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TransferMoney = () => {
  const { fromId } = useParams();
  const [customers, setCustomers] = useState([]);
  const [amount, setAmount] = useState('');
  const [toId, setToId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3002/api/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleTransfer = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3002/api/customers/transfer', { fromId, toId, amount });
      navigate('/customers');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transfer Money</h1>
      <form onSubmit={handleTransfer}>
        <div className="mb-4">
          <label className="block mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Transfer To</label>
          <select
            value={toId}
            onChange={(e) => setToId(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          >
            <option value="">Select Customer</option>
            {customers.filter(c => c._id !== fromId).map(customer => (
              <option key={customer._id} value={customer._id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
          Transfer
        </button>
      </form>
    </div>
  );
};

export default TransferMoney;
