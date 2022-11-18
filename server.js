const express = require('express');
const app = express();

const PORT = process.env.PORT || 3100;

app.get('/', (req, res) => {
    res.send('Homepage!');
});

app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}...`);
});