const express = require('express');
const http = require('http')
const path = require('path');
var fs = require('fs');

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
app.get('/little_spot_spwa/*', (req, res, next) => {
  let reqPath = req.url.split("little_spot_spwa")[1];
  console.log("Request made to : ", reqPath);
  if (req.query.hasOwnProperty("code")) {
    // console.log("Query params : ", req.query);
    // console.log("WE HAVE THE COOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOODE!!!!!");
    reqPath = reqPath.split("?")[0];
    // console.warn("\n", reqPath);
    res.sendFile(path.join(__dirname + "/js/states/callback" + reqPath));
  } else if (reqPath === "/auth-secure") {
    console.log("SECUUUUURITY");
    res.sendFile(path.join(__dirname + "/js/states/secure-auth/authenticate.secure.html"));
  } else {
    res.sendFile(path.join(__dirname + reqPath));
  }
});

const port = process.env.PORT || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`running on port ${port}`));
