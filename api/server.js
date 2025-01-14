const express = require('express');

const server = express();
const usersRouter = require('./users/usersRouter')
server.use(express.json());

server.use('/api/users', usersRouter)

module.exports = server;