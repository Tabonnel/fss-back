var express = require("express");
require("./models/connection");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var streamersRouter = require("./routes/streamers");
var esportRouter = require("./routes/esport");
var topliveRouter = require("./routes/toplive");

var app = express();

const cors = require("cors");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/streamers", streamersRouter);
app.use("/esport", esportRouter);
app.use("/toplive", topliveRouter);


module.exports = app;
