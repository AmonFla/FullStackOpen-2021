/* eslint-disable consistent-return */
const logger = require('./logger')
const jwt = require('jsonwebtoken')
const c = require('./config')

const requestLogger = (req, res, next) => {
  logger.info('Method:', req.method)
  logger.info('Path:', req.path)
  logger.info('Body:', req.body)
  logger.info('---')
  next()
}

const unknowEndpoint = (req, res) => {
  res.status(404).send({ error: 'unkown endpoint' })
}

const errorHundler = (error, req, res, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  } else if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'invalid token' })
  }
  next(error)
}

const getTokenFrom = (req, resp, next) => {
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.token = authorization.substring(7)
  } else {
    req.token = null
  }
  next()
}

const userExtractor = (req, resp, next) => {
  const decodedToken = jwt.verify(req.token, c.SECRET)
  if (!req.token || !decodedToken.id) {
    return resp.status(401).json({ error: 'token missing or invalid' })
  }
  req.user = decodedToken.id
  next()
}
module.exports = { requestLogger, unknowEndpoint, errorHundler, getTokenFrom, userExtractor }
