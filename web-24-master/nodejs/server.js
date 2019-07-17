const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello world !!!');
});

app.get('/about', (req, res) => {
  res.send('About us !!');
});

app.get('/introduction', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(3000);