//Node utiliza o express para criar o servidor
//Criei este servidor e utilizei a lib do express para a primeira chamada da página
var express = require('express'),
    app = express(),
    var cors = require('cors'),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('C:/Users/gabri/Desktop/CredSystem-html'));

//
app.get('/', function(req, res, next) {
	res.sendFile('Welcome-page.html', {"root": 'C:/Users/gabri/Desktop/CredSystem-html'});
});

app.listen(port);

