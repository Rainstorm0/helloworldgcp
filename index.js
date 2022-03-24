const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'JT';
  res.send(`Hello ${name}!`);
});

app.get('/test', (req, res) => {
  res.send("WHOAAAA");
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
