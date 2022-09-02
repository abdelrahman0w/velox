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
var authRouter = require('./routes/auth');
var userRouter = require('./routes/user');
var productRouter = require('./routes/product')
var orderRouter = require('./routes/order')
var cartRouter = require('./routes/cart')

app.use(endpoint, indexRouter);
app.use(endpoint, authRouter);
app.use(endpoint, userRouter);
app.use(endpoint, productRouter);
app.use(endpoint, orderRouter);
app.use(endpoint, cartRouter);

module.exports = app;
