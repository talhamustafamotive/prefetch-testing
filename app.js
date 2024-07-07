const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// CORS Middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Custom-Header');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        return res.status(200).json({});
    }
    next();
});


// Route to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// API endpoint
app.get('/api', (req, res) => {
    res.json({
        message: 'This is your API response'
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});