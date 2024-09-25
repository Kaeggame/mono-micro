const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simulons une base de données en mémoire
let users = [{ id: 1, name: 'John Doe' }];
let products = [{ id: 1, name: 'Product A' }];

// Routes pour la gestion des utilisateurs
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.json(user);
});

// Routes pour la gestion des produits
app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const product = { id: products.length + 1, name: req.body.name };
  products.push(product);
  res.json(product);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
