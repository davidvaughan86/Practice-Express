//app.js
const http = require("http");
const express = require("express");

/* 
      The app object is where  most of the express "magic" happens.
  */
const app = express();
const port = 4433;

/* 
      The app object is passed as the options argument.
      http.createSever allows the options object to be omitted so we 
      have not used it before. Instead we are ommiting the callback.
  */
const server = http.createServer(app);
//app.js
//previous example

http.createServer(app);

/*
    Routes are created using
    app.{method} function.
*/
app.get("/about", (req, res) => {
  //   console.log("A request has been recieved at the root of the app!");

  //   res.writeHead(200);
  res.send("<div>This is about</div>");
});

/*
    Routes can have any number of arguments, but the first is the pattern to match 
*/

server.listen(port, () => console.log(`listening on port ${port}`));
