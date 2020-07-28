const express = require('express')
const app = express();
const port = 8080;
var server = require("http").Server(app);
const users = require("./configs/users");
const cors = require("cors");

app.use(cors());

app.get("/users", (req, res) => {
  res.send({ data: users });
});

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
