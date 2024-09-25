const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const dbPath = path.join(__dirname, '../data/db.json');


router.get('/', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading database' });
    }
    const db = JSON.parse(data);
    res.json(db.users);
  });
});

router.post('/new', (req, res) => {
  const newUser = req.body;

  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading database' });
    }

    const db = JSON.parse(data);
    db.users.push(newUser);

    fs.writeFile(dbPath, JSON.stringify(db, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error saving user' });
      }
      res.status(201).json(newUser);
    });
  });
});

module.exports = router;
