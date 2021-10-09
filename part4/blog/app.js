const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const mongoose = require('mongoose')

const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

logger.info('Coneccting to mongo')

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to mongo')
  })
  .catch((error) => {
    logger.error('Connecting to mongo', error.message)
  })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

app.use(middleware.unknowEndpoint)
app.use(middleware.errorHundler)

module.exports = app
