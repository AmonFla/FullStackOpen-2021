const router = require('express').Router()

const User = require('../models/user')
const Blog = require('../models/blog')

router.post('/reset', async (req, resp) => {
  await User.deleteMany()
  await Blog.deleteMany()

  resp.status(204).end()
})

module.exports = router
