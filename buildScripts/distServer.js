//var express = require('express');
//var path = require('path');
//var open = require('open');

//var port = 3000;
//var app = express();

import express from 'express';
import path from 'path';
import open from 'open';
//import webpack from 'webpack';
//import config from '../webpack.config.dev';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3002;
const app = express();
//const compiler = webpack(config);

/*
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
*/

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
    // Hard coding for simplicity, pretend this hits a real DB
    res.json([
        {"id": 1,"firstName":"Juozas","lastName":"Venskutonis","email":"juozas.venskutonis@vvk.lt"},
        {"id": 2,"firstName":"Juozas","lastName":"Venskutonis","email":"juozas.venskutonis@vvk.lt"},
        {"id": 3,"firstName":"Juozas","lastName":"Venskutonis","email":"juozas.venskutonis@vvk.lt"},
        {"id": 4,"firstName":"Juozas","lastName":"Venskutonis","email":"juozas.venskutonis@vvk.lt"},
        {"id": 5,"firstName":"Juozas","lastName":"Venskutonis","email":"juozas.venskutonis@vvk.lt"},
        {"id": 6,"firstName":"Juozas","lastName":"Venskutonis","email":"juozas.venskutonis@vvk.lt"}
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http:localhost:' + port);
    }
});

