const express = require('express');
const http = require('http');
const app = express();
const port = 3001;

app.use(express.json());

// Simulons une base de données en mémoire
let users = [{ id: 1, name: 'Albert' },
            { id: 2, name: 'Michel' }
];

// Routes pour la gestion des utilisateurs
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.json(user);
});

app.get('/users/produit/:id', (req, res) => {
  const user = users.find((user) => user.id === Number(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  http.get('http://localhost:3002/products/' + user.id, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      user.products = JSON.parse(data);
      res.json(user);
    });
  }).on('error', (err) => {
    res.status(500).json({ error: 'Error fetching products' });
  });
});

app.listen(port, () => {
  console.log(`User service running on http://localhost:${port}`);
});