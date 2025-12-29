const express = require('express');

const app = express();

// handler for /
app.get('/', (req, res) => {
    res.send('Home page');
});

// handler for /users
app.get('/users', (req, res) => {
    res.send('Users page');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
