const userRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

userRouter.post('/', async (req, resp) => {
  const { body } = req
  if (!body.username || !body.password) {
    return resp.status(400).send({ error: 'Username and Password must be given' })
  } else if (body.username.length < 3 || body.password.length < 3) {
    return resp.status(400).send({ error: 'Username and Password must be al least 3 characters long' })
  }

  const passwordHash = await bcrypt.hash(body.password, 10)
  const user = new User({ username: body.username, name: body.name, passwordHash })
  const result = await user.save()
  resp.status(201).json(result)
})

userRouter.get('/', async (req, resp) => {
  const users = await User.find({})
  resp.json(users)
})

module.exports = userRouter
