const connection = require('./Model');
const routes = require('./Routes/routes');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({
  extended: true
}));
app.use('/database', routes);

app.get('/', (_, res) => res.render('home'));

app.listen(5000, () => console.log('Listening at http://localhost:5000'));