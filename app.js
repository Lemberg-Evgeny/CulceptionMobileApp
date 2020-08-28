const express = require('express');
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 80;

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

// middlewares
app.set('views', './views');
app.set("view engine", "ejs");

app.use('/', express.static(__dirname + '/'));

// app.use('/', express.static(path.join(__dirname, '/')));

app.use(bodyParser.json());

app.get('/', urlencodedParser, (req, res) => {
    console.log('app.get "/"');
    // res.render('Package.ejs');
    res.render('Lab.ejs');
  });

app.get('/lab', urlencodedParser, (req, res) => {
    console.log('app.get "/lab"');
    res.render('Lab.ejs');
    
  });


app.listen(PORT, () => {
    console.log('Server has bin started PORT: ' + PORT);
});