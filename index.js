const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const purchases = {};

app.get('/purchases', (req, res) => {
  res.send(Object.values(purchases));
});

app.post('/purchases', (req, res) => {
  const purchase = req.body;
  purchases[purchase.id] = purchase;

  res.send(purchase);
});

app.post('/purchases/:id/use', (req, res) => {
  const id = req.params.id
  const purchase = purchases[id];
  purchase.currentUses++;

  res.send(purchase);
});

app.listen(3001, () => {
  console.log('Listening to port 3001');
});
