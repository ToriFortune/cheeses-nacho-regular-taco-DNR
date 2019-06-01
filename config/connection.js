//  mySQL connection info
const mysql = require ("mysql");

const connection = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"tacosDB"});


module.exports = connection;