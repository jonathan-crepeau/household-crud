const express = require('express');
const app = express();
const path = require('path');

const routes = require('./routes');
const PORT = process.env.PORT || 3100;

app.use(express.static(`${__dirname}/public`));

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

// API Endpoints
app.use('/api/v1/member', routes.member)

app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}...`);
});