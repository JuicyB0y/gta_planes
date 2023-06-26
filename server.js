// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// require('dotenv').config();
// const port = 8000;

// const bodyParser = require('body-parser');

// // Для парсинга application/json
// app.use(express.json());

// // Для парсинга application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

// // Абсолютный путь к папке с картинками
// app.use('/static', express.static(__dirname + '/assets'));

// // Роуты
// app.use('/api/planes', require('./routes/planes'));

// mongoose.connect('mongodb://localhost:27017').then(() => {
//   app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
//   });
// });

const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = 8000;

// Для парсинга application/json
app.use(express.json());
// Для парсинга application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Абсолютный путь к папке с картинками
app.use('/static', express.static(__dirname + '/assets'));

// Роуты
app.use('/api/planes', require('./routes/planes'));

// Подключаемся к Монго
mongoose.connect('mongodb://localhost:27017').then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
