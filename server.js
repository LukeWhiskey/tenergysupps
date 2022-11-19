const https = require('https');
const express = require('express');
const sql = require("mssql");
const crypto = require("crypto");
const router = express.Router();
const cheerio = require("cheerio");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 5724;
/*
const serverConfig = {
    server: 'LAPTOP\DFUJU725\TENERGYSUPPS',
    user: 'MCFox',
    password: 'qwert',
    database: 'TenergySupps',
    port: 49172
};
sql.connect(serverConfig, function (err) {
    if (err) console.log(err);
    else {
        console.log("connected");
    }
});
*/

app.use('/Assets', express.static('Assets'));
app.use('/JS', express.static('JS'));
app.use('/CSS', express.static('CSS'));
/*
app.use('/', (req, res) => {
    console.time("SQL");
    try {
        let 

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error: Cannot connect to SQL"
        });
    }
    console.timeEnd("SQL");
});
*/

var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.get('/', urlencodedParser, (req, res) => {
    fs.readFile(__dirname + "/Tenergy.html", "utf8", (err, data) => {
        if (err) throw err;
        var $ = cheerio.load(data);
        const cats = ['fitness', 'energy', 'clothing', 'protein', 'neutropics'];
        for (var i = 0; i < cats.length; i++) {
            $('.dynaBanNav').append("<td class=\"dynaBanNavBut\">" + cats[i] + "</td>");
        }
        /*
        const basket = ['item 1', 'item 2', 'item 3', 'item 4'];
        const basketlen = basket.length;
        for (var i = 0; i < basket.length; i++) {
            $('#basketItemText').append("<div>" + basket[i] + "</div>");
        }*/
        res.send($.html());
    });
});

app.get('/aboutcookies', (req, res) => {
    console.time("aboutCookies");
    res.sendFile(__dirname + "/aboutCookies.html");
    console.timeEnd("aboutCookies");
});

app.get('/contactus', (req, res) => {
    console.time("aboutCookies");
    res.sendFile(__dirname + "/contactus.html");
    console.timeEnd("aboutCookies");
});

app.get('/returns/:id', (req, res) => {
    console.time("aboutCookies");
    res.sendFile(__dirname + "/resturns.html/:id");
    console.timeEnd("aboutCookies");
});

app.get('/basket/:id', (req, res) => {
    console.time("userBasket");
    res.sendFile(__dirname + "/userBasket.html/:id");
    console.timeEnd("userBasket");
});

app.get('/account/:id', (req, res) => {
    console.time("aboutCookies");
    console.timeEnd("aboutCookies");
});

app.get('/categories', (req, res) => {
    console.time("categories");
    res.sendFile(__dirname + "")
});

app.get('/register', (req, res) => {
    fs.readFile(__dirname + "/Register.html", "utf8", (err, data) => {
        if (err) throw err;
        var $ = cheerio.load(data);
        res.send($.html());
    });
});

app.get('/login', urlencodedParser, (req, res) => {
    fs.readFile(__dirname + "/Login.html", "utf8", (err, data) => {
        if (err) throw err;
        var $ = cheerio.load(data);
        res.send($.html());
    });
});

app.listen(port, function (req, res) {
    console.log('Listening on PORT: ', port);
});
