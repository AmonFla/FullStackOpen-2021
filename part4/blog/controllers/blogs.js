const blogRouter = require('express').Router()
const c = require('../utils/config')
const jwt = require('jsonwebtoken')
const Blog = require('../models/blog')
const User = require('../models/user')

blogRouter.get('/', async (req, res, next) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  res.json(blogs)
})

blogRouter.post('/', async (req, resp, next) => {
  const { body, token } = req

  const decodedToken = jwt.verify(token, c.SECRET)
  if (!token || !decodedToken.id) {
    return resp.status(401).json({ error: 'token missing or invalid' })
  }

  if (!body.title || !body.url) {
    return resp.status(400).end()
  }
  const user = await User.findById(decodedToken.id)
  const blog = new Blog({ ...body, user: user.id })

  const result = await blog.save()
  user.blogs = user.blogs.concat(result._id)
  await user.save()

  resp.status(201).json(result)
})

blogRouter.delete('/:id', async (req, resp, next) => {
  const { token } = req

  const decodedToken = jwt.verify(token, c.SECRET)
  if (!token || !decodedToken.id) {
    return resp.status(401).json({ error: 'token missing or invalid' })
  }

  const blog = await Blog.findById(req.params.id)
  if (blog.user.toString() === decodedToken.id) {
    blog.remove()
    return resp.status(204).end()
  } else {
    return resp.status(401).json({ error: 'You are not allowed to delete' })
  }
})

blogRouter.put('/:id', async (req, resp, next) => {
  const blog = {
    title: req.body.title,
    url: req.body.url,
    author: req.body.author,
    likes: req.body.likes
  }

  const data = await Blog.findByIdAndUpdate(req.params.id, blog, { new: true })
  resp.json(data)
})

blogRouter.patch('/:id', async (req, resp, next) => {
  const blog = req.body

  const data = await Blog.findByIdAndUpdate(req.params.id, blog, { new: true })
  resp.json(data)
})
module.exports = blogRouter
