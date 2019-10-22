const express = require("express");
const eventRouter = require("./routers/event");
const connect = require("./db/mongoose");

// Create app and connect to db
const app = express();
connect(app);

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
app.use(eventRouter);


module.exports = app;
