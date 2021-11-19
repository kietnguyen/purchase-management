const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const purchases = {
  'd4681f12-06e2-4730-9114-1e7605e50a90': {
    id: 'd4681f12-06e2-4730-9114-1e7605e50a90',
    name: 'Food Processor',
    price: 100,
    usageCost: 1,
    currentUses: 5,
    expectedUses: 100,
    purchasedAt: 1636709651,
  },
  '569ce2c1-41fe-468a-8135-f4c285ae9a32': {
    id: '569ce2c1-41fe-468a-8135-f4c285ae9a32',
    name: 'eReader',
    price: 200,
    usageCost: 0.25,
    currentUses: 301,
    expectedUses: 300,
    purchasedAt: 1605519251,
  },
};

app.get('/purchases', (req, res) => {
  res.send(Object.values(purchases));
});

app.post('/purchases', (req, res) => {
  const purchase = req.body;
  purchases[purchase.id] = purchase;

  res.status(201).send(purchase);
});

app.post('/purchases/:id/use', (req, res) => {
  const id = req.params.id;
  const purchase = purchases[id];
  purchase.currentUses++;

  res.send(purchase);
});

app.listen(3001, () => {
  console.log('Listening to port 3001');
});
