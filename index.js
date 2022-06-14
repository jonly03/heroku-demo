require("dotenv").config();

const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

let PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log("Server listening on PORT: ", PORT);
});

server.get("/", (req, res) => {
  res.send({ day: "tueday", date: process.env.DATE });
});
