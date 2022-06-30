'use strict'

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  return res.render('index');
});

const port = 4000;

app.listen(port, () => console.log('Server running...'));
