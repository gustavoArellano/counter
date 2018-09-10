var express =  require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


var count = 0;

app.get('/', function(request, response) {
    response.render('index', {count: count});
})
app.post('/add', function (request, response){
    count++;
    count++;
    response.redirect('/');
})

app.post('/reset', function (request, response){
    count = 0;
    response.redirect('/');
})

app.listen(8000, function() {
    console.log("listening on 8000");
})