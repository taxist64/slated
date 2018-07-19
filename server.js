let express = require('express'),
  app = express();

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res){
  res.redirect('/');
});

let PORT = process.env.PORT || 8080;
app.listen(PORT);