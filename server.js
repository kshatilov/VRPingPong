var fs = require('fs');
var http = require('http');
var https = require('https');
const path = require( 'path' );
var express = require('express');

var privateKey  = fs.readFileSync('ssl/key.PEM', 'utf8');
var certificate = fs.readFileSync('ssl/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('dist'));
// app.use(express.static('src'));
app.get( '/', function ( req, res ) {
  // res.sendFile( path.join( __dirname, 'dist/index.html' ) );
  res.sendFile( path.join( __dirname, 'dist/text.html' ) );
} );

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(3000);