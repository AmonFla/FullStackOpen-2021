const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', async (req, res, next) => {
  const blogs = await Blog.find({})
  res.json(blogs)
})

blogRouter.post('/', async (req, resp, next) => {
  const { body } = req
  if (!body.title || !body.url) {
    return resp.status(400).end()
  }
  const blog = new Blog(req.body)
  const result = await blog.save()
  resp.status(201).json(result)
})

blogRouter.delete('/:id', async (req, resp, next) => {
  await Blog.findByIdAndRemove(req.params.id)
  resp.status(204).end()
})

module.exports = blogRouter
