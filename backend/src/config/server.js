const express = require("express");
const { urlencoded, json } = require("body-parser");

const server = express();
const port = 3003;

const allowCors = require("./cors");
const queryParser = require("express-query-int");

server.use(urlencoded({ extended: true }));
server.use(json());
server.use(allowCors);
server.use(queryParser());

server.listen(port, () => console.log(`BACKEND is running on port ${port}.`));

module.exports = server;
