const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/html/index.html'));
});

app.get('/game/add-round', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./public/html/player-screen.html'))
})

app.listen(8080);