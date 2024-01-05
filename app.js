const express = require('express');
const path = require('pat');

const app = express();
const port = 3000;

// Serve static files (like HTML) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/lib', express.static(path.join(__dirname, 'lib')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*', (req, res) => {
    res.status(404).send('404 Not Found');
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});