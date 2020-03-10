const express = require('express');
const http = require('http')
const path = require('path');
var fs = require('fs');


var getClientConfig = function () {
  var result = {};

  if (!process.env.SPOTIFY_CLIENT_CALLBACK_URL) {
    throw new Error("SPOTIFY_CLIENT_CALLBACK_URL undefined!");
  }
  if (!process.env.SPOTIFY_ENCRYPTION_SECRET) {
    throw new Error("SPOTIFY_ENCRYPTION_SECRET undefined!");
  }
  if (!process.env.SPOTIFY_CLIENT_SECRET) {
    throw new Error("SPOTIFY_CLIENT_SECRET undefined!");
  }
  if (!process.env.SPOTIFY_CLIENT_ID) {
    throw new Error("SPOTIFY_CLIENT_ID undefined!");
  }
  if (!process.env.SPOTIFY_API_DOMAIN) {
    throw new Error("SPOTIFY_API_DOMAIN undefined!");
  }
  if (!process.env.SPOTIFY_API_PATH) {
    throw new Error("SPOTIFY_API_PATH undefined!");
  }

  result.clientId = process.env.SPOTIFY_CLIENT_ID;
  result.clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  result.clientCallbackUrl = process.env.SPOTIFY_CLIENT_CALLBACK_URL;
  result.encryptionSecret = process.env.SPOTIFY_ENCRYPTION_SECRET;
  result.apiDomain = process.env.SPOTIFY_API_DOMAIN;
  result.apiPath = process.env.SPOTIFY_API_PATH;


  return result;
}

var writeClientConfig = function (config) {
  fs.writeFileSync('./configDetailsConstant.js', `var CONFIG = ${JSON.stringify(config)}`);
}

writeClientConfig(getClientConfig());


const app = express();

// Is this still needed?
app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname + req.url));
});

//Get's the path(little_spot_spwa)
//Joins the path onto the '/'
//Base href Adds the little spot path again
//We remove it using the split function
//This allows for full deployment on heroku
app.get('/little_spot_spwa/', (req, res, next) => {
  res.sendFile(path.join(__dirname + req.url.split("little_spot_spwa")[1]));
});



const port = process.env.PORT || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`running on port ${port}`));