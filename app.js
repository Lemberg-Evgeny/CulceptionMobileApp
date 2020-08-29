const express = require('express');
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 80;

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

// middlewares
app.set('views', './public/views');
// app.set('css', './public/css');
// app.set('js', './public/js');
// app.set('img', './public/img');
app.set("view engine", "ejs");

app.use('/', express.static(__dirname + '/'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

// app.use("/public", express.static(__dirname + '/public'));

// app.use(bodyParser.json());

app.get('/', urlencodedParser, (req, res) => {
    console.log('app.get "/"');
    // res.render('package.ejs', {
    //     title: 'My Package'
    // });
    res.end('hello from server app.js');
});

app.get('/lab', urlencodedParser, (req, res) => {
    console.log('app.get "/lab"');
    res.render('lab.ejs', {
        title: 'Lab tests'
    });

});

app.get('/more-info', urlencodedParser, (req, res) => {
    console.log('app.get "/more-info"');
    res.render('more-info.ejs', {
        title: 'More Info'
    });

});

app.get('/share', urlencodedParser, (req, res) => {
    console.log('app.get "/share"');
    res.render('share.ejs', {
        title: 'Share'
    });

});


app.listen(PORT, () => {
    console.log('Server has bin started PORT: ' + PORT);
});