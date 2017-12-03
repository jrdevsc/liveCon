const express = require('express');
const app = express();

app.set('view engine', 'pug' );

app.get('/', function(req, res){
  res.render('homepage');
})

app.listen(8080, ()=> console.log('Server started on 8080'));
