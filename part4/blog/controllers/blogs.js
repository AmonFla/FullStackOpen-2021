const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', async (req, res, next) => {
  const blogs = await Blog.find({})
  res.json(blogs)
})

blogRouter.post('/', async (req, resp, next) => {
  const blog = new Blog(req.body)
  const result = await blog.save()
  resp.status(201).json(result)
})

module.exports = blogRouter
