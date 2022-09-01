const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

connectDB;

const endpoint = '/'

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/user');

app.use(endpoint, indexRouter);
// app.use(endpoint, usersRouter);

module.exports = app;
