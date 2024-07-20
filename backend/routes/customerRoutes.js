// backend/routes/customerRoutes.js
const express = require('express');
const Customer = require('../models/Customer');
const Transfer = require('../models/Transfer');
const router = express.Router();

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single customer
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Transfer money
router.post('/transfer', async (req, res) => {
  const { fromId, toId, amount } = req.body;
  try {
    const fromCustomer = await Customer.findById(fromId);
    const toCustomer = await Customer.findById(toId);

    if (fromCustomer.currentBalance < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    fromCustomer.currentBalance -= amount;
    toCustomer.currentBalance += amount;

    await fromCustomer.save();
    await toCustomer.save();

    const transfer = new Transfer({ from: fromId, to: toId, amount });
    await transfer.save();

    res.json({ message: 'Transfer successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
