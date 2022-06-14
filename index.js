require("dotenv").config();

const express = require("express");
const server = express();

let PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log("Server listening on PORT: ", PORT);
});

server.get("/", (req, res) => {
  res.send({ day: "tueday", date: process.env.DATE });
});
