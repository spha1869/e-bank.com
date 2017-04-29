var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');

var contacts = [
    {
        id:1,
        name:'tom',
        number:'0735546862',
    },
    {
        id:2,
        name:'julia',
        number:'0634258895',
    }
];

var currentId=2;

var photos = [

];

var PORT = process.env.PORT || 1337;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.get('/contacts', function(req, res) {
    res.send({products: contacts});
});


app.post('/contacts', function(req, res) {
    var contactName = req.body.name;
    currentId++;

    contant.push({
        id:cureentId,
        name:contactName
    });
    res.send('Succesful save contact');
});
app.listen(PORT, function() {
    console.log('server listen on '+ PORT);
});