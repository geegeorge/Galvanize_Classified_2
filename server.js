'use strict';

const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')))
app.use(express.static(path.join(__dirname, '/./', 'node_modules')))

const classifieds = require('./server/routes/classifieds');
app.use('/classifieds', classifieds);
app.use('/jscripts', express.static(path.join(__dirname, "./client/jscripts")));
app.use('/stylesheets', express.static(path.join(__dirname, "./client/stylesheet")));
app.use('/views', express.static(path.join(__dirname, "/client/views")));
app.use('*', function(req, res) {
  res.sendFile('index.html', {
    root: '/client/views/'
  });
});


const port = process.env.PORT || 3000;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
