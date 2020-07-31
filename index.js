const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const recipes = require('./routers/recipes_router')
const ingredients = require('./routers/ingredients_router')
const server = express()
const PORT = process.env.PORT || 4000

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/recipes', recipes)
server.use('/api/ingredients', ingredients)

server.use((error, req, res, next) => {
  console.dir(error)
  res.status(500).json({ errorMessage: 'Something went wrong' })
})

server.listen(PORT, () => {

  console.log(`Running at http://localhost:${PORT}`)
})