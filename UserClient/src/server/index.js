const express = require('express');
const path = require('path');

const PORT = 3002
const server = new express();

server.use(express.json())

server.use(express.static('build'))

server.get('/', (request, response) => {
  response.sendFile(path.join(path.resolve() + '/build/index.html'))
})

server.listen(PORT, () => {
  console.log(`[User Client UI Server] listening at http://localhost:${PORT}`)
})

