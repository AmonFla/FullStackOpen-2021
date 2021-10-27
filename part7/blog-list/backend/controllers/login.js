const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')
const c = require('../utils/config')

loginRouter.post('/', async (req, resp) => {
  const { body } = req

  const user = await User.findOne({ username: body.username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(body.password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return resp.status(401).json({ error: 'invalid username or passowrd' })
  }
  const userForToken = {
    username: user.username,
    id: user.id
  }
  const token = jwt.sign(userForToken, c.SECRET)
  resp.status(200)
    .send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter
