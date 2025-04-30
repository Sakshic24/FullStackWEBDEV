const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();

const razorpay = new Razorpay({
  key_id: 'rzp_test_wG5yxU0KM6H2dv',
  key_secret: 'rt2F1xQ6B5d7fKyOxUX213bB',
});

router.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  try {
    const options = {
      amount: amount * 100, // in paise
      currency: 'INR',
      receipt: 'receipt_' + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send('Error creating Razorpay order');
  }
});

module.exports = router;
