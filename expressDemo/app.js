var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const fs = require('fs');

//load data from json file
let data = fs.readFileSync('tracks.json');
data = JSON.parse(data);

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/all_tracks', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data, null, 4));
});

app.post('/track', function (req, res) {
  for(let element in data){
    if(req.body.id == data[element].id){

      return res.status(200).send({
        message: data[element]
      });
    }
    console.log(data[element].id);
  }
  return res.status(400).send({
    message: 'id does not exist!'
  });
  res.send('no problem');s
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
