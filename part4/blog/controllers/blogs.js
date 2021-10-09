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
  const blog = new Blog(body)
  const result = await blog.save()
  resp.status(201).json(result)
})

blogRouter.delete('/:id', async (req, resp, next) => {
  await Blog.findByIdAndRemove(req.params.id)
  resp.status(204).end()
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
