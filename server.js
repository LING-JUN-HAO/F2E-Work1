require('dotenv').config()
var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
var API = require('./routers/API')
app.use('/API', API)
app.use('/', express.static(__dirname + '/'));
app.use(express.static('dist'));
app.use(express.static('src/build_files'));
app.use(express.static('src/component'));
app.use(express.static('src/pages'));
app.use(express.static('src/web_routers'));
app.use(express.static('src/images'));
app.use('*', function (req, res) {
  const File = fs.readFileSync('dist/index.html')
  res.write(File);
  res.end();
})
app.listen(process.env.HOMEPORT, function () {
  console.log(
    `${process.env.SERVERTYPE} Server is running on: ${process.env.SERVERTYPE}://${process.env.DOMAIN}:${process.env.HOMEPORT}`
  );
});