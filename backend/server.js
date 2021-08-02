const express = require("express");
const articles = require("./dummydata/articles.js");
const server = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;


// API Endpoint
server.get('/', (req, res) => {
    res.send('API is running, and updates automatically!')
})

// Prints all articles
server.get('/api/articles', (req,res) => {
    res.json(articles);
});

// Prints specific article
server.get('/api/articles/:id', (req,res) => {
    const article = articles.find((n) => n._id === req.params.id);
    res.send(article);
    console.log(req.params);
});





server.listen(PORT, (console.log(`server is working and listening PORT ${PORT}`)));