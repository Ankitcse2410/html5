var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
    directives: {
        frameAncestors: ["'none'"]
    }
}));

app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'FilmyGossip.html'));
})
app.listen(3000);