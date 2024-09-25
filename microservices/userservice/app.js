const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Simulons une base de données en mémoire
let users = [{ id: 1, name: 'John Doe' }];

// Routes pour la gestion des utilisateurs
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.json(user);
});

app.listen(port, () => {
  console.log(`User service running on http://localhost:${port}`);
});
