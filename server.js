/*const express = require('express');
const app = express();

const path = express.router('/api/posts')

const PORT = process.env.POST || 5000;

if (process.env.NODE_ENV === "production") {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Server runing on port: ', PORT);
})*/