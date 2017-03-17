var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');
var http       = require('http');
var mongoose   = require('mongoose');

var index   = require('./routes/index');
var cards   = require('./routes/cards');
var arenas  = require('./routes/arenas');
var chests  = require('./routes/chests');
var players = require('./routes/players');

var app    = express();
var server = http.createServer(app);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://clash:royale@ds145289.mlab.com:45289/clash-royale', function(err, res) {
    if (err) throw err;

    console.log('Connected to DataBase');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/templates', express.static(path.join(__dirname, 'views/templates')));

app.use('/', index);
app.use('/api', cards);
app.use('/api', arenas);
app.use('/api', chests);
app.use('/api', players);

server.listen(3000, function() {
	console.log('Server listening on port 3000');
});
