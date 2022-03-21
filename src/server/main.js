var express = require("express");
var mysql = require("./db_conn.js");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", 8080);
app.set("mysql", mysql);
var cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
var db = require("./db_conn");

app.get("/listguests", function (req, res) {
  db.pool.query("SELECT * FROM Guests", function (error, result, fields) {
    if (error) {
      res.write(JSON.stringify(error));
    } else {
      res.send(result);
    }
  });
});

app.listen(app.get("port"), function () {
  console.log(
    "Express started on http://localhost:" +
      app.get("port") +
      "; press Ctrl-C to terminate."
  );
});
