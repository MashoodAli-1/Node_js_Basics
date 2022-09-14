// var http = require("http");
// var mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "BikeStore",
//   password: "reallyStrongPwd123",
// });
// let r = [];
// const sqlQuery = "INSERT INTO bikestore.datadummy (name) VALUES ('shemdy');";
// function callme(res) {
//   console.log("function call");
//   console.log(res);
//   console.log(res[2].ID);
// }
// const sqlQuery = "select * from datadummy;";
// pool.execute(sqlQuery, async function (err, result) {
//   if (err) throw err;

//   console.log(result);
//   r = result;
//   callme(r);
//   // console.log(r[2].ID);
// });

// /* var mysql = require("mysql");

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "reallyStrongPwd123",
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// }); */

// /* var con = mysql.createConnection({
//   host: "localhost",
//   user: "sa",
//   password: "reallyStrongPwd123",
//   database: "Bikestores",
// });

// con.connect(function (err) {
//   if (err) throw err;
//   con.query("SELECT * FROM production.brands", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     console.log("it runs");
//   });
// }); */
// try {
//   http
//     .createServer(function (req, res) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end("hello mashood");
//     })
//     .listen(8080);
// } catch (e) {
//   console.log(e);
// }
