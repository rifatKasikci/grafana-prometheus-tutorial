const express = require('express');
const client = require('prom-client');
const app = express();

// Default metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
