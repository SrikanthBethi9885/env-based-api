// routes.js
const express = require('express');
const connection = require('./db');

const router = express.Router();

router.get('/data', (req, res) => {
  connection.query('SELECT * FROM employees', (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

router.post('/addEmployee', (req, res) => {
  const { first_name, last_name, email } = req.body;
  const query = 'INSERT INTO employees (first_name, last_name, email) VALUES (?, ?, ?)';
  connection.query(query, [first_name, last_name, email], (error, results) => {
    if (error) {
      res.status(500).send('Error inserting data');
      return;
    }
    res.status(201).send('Employee Details inserted successfully');
  });
});

module.exports = router;
