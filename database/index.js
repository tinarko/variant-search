var mysql = require('mysql');
var mysqlConfig = require('./config.js');
var connection = mysql.createConnection(mysqlConfig);

module.exports.getVariants = function(gene, callback) {
  var query = gene
    ? `SELECT * FROM variants WHERE Gene like '${gene}%'`
    : 'SELECT * FROM variants';

  connection.query(query, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports.getAutoSearchOptions = function(gene, callback) {
  var query = `SELECT Gene FROM variants WHERE Gene like '${gene}%'`;

  connection.query(query, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};
