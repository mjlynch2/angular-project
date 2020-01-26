const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const fruitsRouter = require("./routes/fruits.router");

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static("build"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200/fruits"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/** ---------- ROUTES ---------- **/
app.use("/api/fruits", fruitsRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function() {
  console.log("Listening on port: ", port);
});
