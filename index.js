const express = require('express')
const helmet = require('helmet')

const server = express()
const PORT = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())

server.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`)
})