let express = require('express');
let http = require('http');
let path = require('path');

let favicon = require('serve-favicon');
let logger = require('morgan');
let methodOverride = require('method-override');
let bodyParser = require('body-parser');
let multer = require('multer');
let errorHandler = require('errorhandler');
let session = require('express-session');

// Create server
let app = express();
let server = http.createServer(app);
let WebSocketServer = require('ws').Server;
let wss = new WebSocketServer({ server: server });

// Color for an avatar
let colors = ['red', 'green', 'blue', 'magenta', 'purple', 'plum', 'orange'];
colors.sort(function() {
    return Math.random() > 0.5;
});

let clients = [];

wss.on('connection', function(ws) {
    clients.push(Object.assign(ws, { userID: Date.now() }));
    let userName = false;
    let userColor = false;
    ws.on('message', function(msg) {
        if (!userName) {
            userName = msg;
            userColor = colors.shift();

            for (let i = 0; i < clients.length; i++) {
                clients[i].send(JSON.stringify({ type: 'connected_new_user', userID: ws.userID, userName}));
            }
            console.log(userName + ' login');   // *********************************
        }
        else {
            console.log(userName + ' say: ' + msg);   // *********************************
            let obj = {
                time: (new Date()).getTime(),
                text: msg,
                author: userName,
                color: userColor
            };
            let json = JSON.stringify({ type: 'message', data: obj });
            for (let i = 0; i < clients.length; i++) {
                clients[i].send(json);
            }
        }
    });
    ws.on('close', function() {
        let index = clients.indexOf(ws);

        clients.splice(index, 1);
        if (userName !== false && userColor !== false) {
            colors.push(userColor);
        }

        let json = JSON.stringify({ type: 'disconnected_user', userID: ws.userID });
        for (let i = 0; i < clients.length; i++) {
            clients[i].send(json);
        }

    });

});

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
    saveUninitialized: true,
    secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendfile('views/chat.html');
});

if ('development' === app.get('env')) {
    app.use(errorHandler());
}

server.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));   // *********************************
});
