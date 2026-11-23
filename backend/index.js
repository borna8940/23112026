
// API
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api/hello', (request, response) => {
    response.send('pozdrav');
});

app.listen(port, function () {
    console.log('Node app is running on port ' + port);
});
