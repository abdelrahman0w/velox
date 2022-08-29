const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

async function connectDB() {
  try {
    db;
    console.log('Successfully Connected to Database!');
  } catch (error) {
    console.log('Failed to Connect to Database!\n', error);
  }
}
// connectDB();

const endpoint = '/'

var indexRouter = require('./routes/index');

app.use(endpoint, indexRouter);

module.exports = app;