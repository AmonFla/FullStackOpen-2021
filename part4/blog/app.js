const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

const blogRouter = require('./controllers/blogs')

logger.info('Coneccting to mongo')

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to mongo')
  })
  .catch((error) => {
    logger.error('Connecting to mongo', error.message)
  })

const app = express()
app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogRouter)

app.use(middleware.unknowEndpoint)
app.use(middleware.errorHundler)

module.exports = app
