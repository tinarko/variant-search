var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');
var cors = require('cors');

const corsOptions = {
  origin: true,
  preflightContinue: true,
  exposedHeaders: [
    'Link'
  ],
};

var app = express();

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/variants', (req, res) => {
  db.getVariants({}, (err, variants) => {
    if (err) {
      throw err;
    } else {
      res.json(variants);
    }
  });
});

app.get('/variants/:Gene', (req, res) => {
  var gene = req.params.Gene;
  db.getVariants(gene, (err, variants) => {
    if (err) {
      throw err;
    } else {
      res.json(variants);
    }
  });
});

app.get('/autoSearch/:Gene', (req, res) => {
  var gene = req.params.Gene;
  db.getAutoSearchOptions(gene, (err, variants) => {
    if (err) {
      throw err;
    } else {
      res.json(variants);
    }
  });
});

//
app.listen(8000, function() {
  console.log('listening on port 8000!');
});
/*

//Access-Control-Allow-Methods

# GET /endpoint
curl 127.0.0.1:3000/endpoint

# POST /endpoint
curl -X POST 127.0.0.1:3000/endpoint

*/
