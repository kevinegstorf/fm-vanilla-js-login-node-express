const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var path = require("path");
var fs = require("fs");

var data = "./data.js";
var file = require(data);

const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "public/index.html"))
);

app.get("/home", (req, res) =>
  res.sendFile(path.join(__dirname + "/public/home.html"))
);

app.post("/", function(request, response) {
  const username = request.body.username;
  const password = request.body.password;
  console.log(request.body);

  // fs.writeFile(data, JSON.stringify(username), function(err) {
  //   if (err) return console.log(err);
  //   console.log(JSON.stringify(file, null, 2));
  //   console.log("writing to " + data);
  // });

  fs.writeFile(data, JSON.stringify(file), function(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log("writing to " + data);
    file.name = username;
    file.password = password;
  });

  // fs.appendFile("mynewfile.js", username, function(err) {
  //   if (err) throw err;
  //   console.log("Replaced!");
  // });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
