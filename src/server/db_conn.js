const mysql = require("mysql");

var pool = mysql.createPool({
  host: "localhost",
  user: "rtpiidmy_ltalkington",
  password: "Dunkin@44",
  port: "3306",
  database: "rtpiidmy_WeddingReservation",
  connectionLimit: 10, // this is the max number of connections before your pool starts waiting for a release
  multipleStatements: true,
});
pool.getConnection(function (err, connection) {
  // Use the connection
  connection.query("SELECT * From Guests", function (err, rows) {
    console.log(rows);
    // And done with the connection.
    connection.release();

    // Don't use the connection here, it has been returned to the pool.
  });
});
module.exports.pool = pool;
