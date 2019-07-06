const express = require('express');

const path = require('path');

const fs = require('fs');

const app = express();
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './public/index1.html'));
});

app.get('/dapgon', (req,res) => {
    res.sendFile(path.resolve(__dirname, './public/dapgon.html'));
})

app.listen(3000);