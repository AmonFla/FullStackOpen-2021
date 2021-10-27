const blogRouter = require('express').Router()
const m = require('../utils/middleware')
const Blog = require('../models/blog')
const User = require('../models/user')

blogRouter.get('/', async (req, res, next) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  res.json(blogs)
})

blogRouter.post('/', m.userExtractor, async (req, resp, next) => {
  const { body, user } = req

  if (!body.title || !body.url) {
    return resp.status(400).end()
  }
  const blog = new Blog({ ...body, user })

  const result = await blog.save()
  await User.findByIdAndUpdate(user, { $push: { blogs: result._id } })
  const dataToReturn = await result.populate('user', { username: 1, name: 1 })
  resp.status(201).json(dataToReturn)
})

blogRouter.delete('/:id', m.userExtractor, async (req, resp, next) => {
  const blog = await Blog.findById(req.params.id)
  if (blog.user.toString() !== req.user) {
    return resp.status(401).json({ error: 'You are not allowed to delete' })
  }
  blog.remove()
  return resp.status(204).end()
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
