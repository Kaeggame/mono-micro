const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

// Simulons une base de données en mémoire
let products = [
  { id: 1, name: 'Four', userId: '1' },
  { id: 2, name: 'Micro', userId: '1' },
  { id: 3, name: 'Lavabo', userId: '2' }
];

// Routes pour la gestion des produits
app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const product = { id: products.length + 1, name: req.body.name, userId: req.body.userId };
  products.push(product);
  res.json(product);
});

app.get('/products/:userId', (req, res) => {
  const userProducts = products.filter((product) => product.userId === req.params.userId);
  res.json(userProducts);
});

app.get('/products/lag/:userId', (req, res) => {
  setTimeout(() => {
    const userProducts = products.filter((product) => product.userId === req.params.userId);
    res.json(userProducts);
  }, 8000);
});

app.listen(port, () => {
  console.log(`Product service running on http://localhost:${port}`);
});