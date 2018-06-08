const express = require('express')
const app = express()

const Config = require('node-json-config');

let conf = new Config("./config.json");

app.get('/', function (req, res) {
  res.status(200)
});

app.get('/version', (req, res) => {
    res.send({ version: conf.get("version") }).status(200);
});
 
app.listen(4444);